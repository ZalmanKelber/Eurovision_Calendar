const renderMap = (() => {
    const state = {
      mapData: null,
      gMap: null,
    }
  
    const { select, selectAll, json, geoPath, geoConicEqualArea } = d3;
    const { feature } = topojson;
  
    let svg = select("#map");
    const projection = geoConicEqualArea()
        .parallels([0, 63.5])
        .rotate([-10, 0])
    const pathGenerator = geoPath().projection(projection);

    window.addEventListener("click", e => {
        const cl = e.target.classList
        if ((!cl.contains('esc') && !cl.contains('event')) || cl.contains('key')) {
            selectOperations.deselectCountries();
        }
    })
  
    const renderMap = () => {
        const containerWidth = window.innerWidth - 20;
        const width = containerWidth <= 748 ? containerWidth : 420;
        const height = 340;
        svg.remove();
        svg = selectAll("#map-container").append("svg");
        svg
            .attr("class", "map")
            .attr("width", width)
            .attr("height", height);
    
        const gMap = svg.append("g");
        state.gMap = gMap;
    
        gMap.append("path")
            .attr("class", "sphere")
            .attr("d", pathGenerator({type: "Sphere"}));
    
        gMap.selectAll("path[class=country]")
            .data(state.mapData.features)
            .enter().append("path")
            .attr("class", d => {
                if (eurovisionData.countries[d.properties.name.toLowerCase()]) {
                    const countryName = eurovisionData.countries[d.properties.name.toLowerCase()].replace(' ', '-');
                    if (eurovisionData.countriesWithNationalFinals.has(d.properties.name.toLowerCase())) {
                        return `esc esc-${countryName}`;
                    } else {
                        return `esc esc-${countryName} internal-selection`;
                    }
                }
                if (eurovisionData.nonReturningCountries.has(d.properties.name.toLowerCase())) {
                    return 'not-esc non-returning'
                }
                return "not-esc";
            })
            .attr("d", pathGenerator)
            .on('click', d => selectOperations.selectCountry(d.properties.name.toLowerCase()));
        gMap.attr("transform", "scale(3.3), translate(-423,-151)");
        
    }


    json("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json", data => {
      const mapData = feature(data, data.objects.countries);
      mapData.features.forEach(country => {
        const centroid = d3.geoCentroid(country);
        switch (country.properties.name.toLowerCase()) {
            case 'san marino':
                country.geometry.coordinates[0].forEach(coord => {
                    const [lat, lng] = coord;
                    coord[0] += (lat - centroid[0]) * 8;
                    coord[1] += (lng - centroid[1]) * 8;
                })
                break;
            case 'malta':
                country.geometry.coordinates.forEach(arr => arr[0].forEach(coord => {
                    const [lat, lng] = coord;
                    coord[0] += (lat - centroid[0]) * 1.5;
                    coord[1] += (lng - centroid[1]) * 1.5;
                }))
                break;
            case 'australia':
                country.geometry.coordinates.forEach(arr => arr[0].forEach(coord => {
                    const [lat, lng] = coord;
                    coord[0] -= (lat - centroid[0]) * .7 + 80;
                    coord[1] -= (lng - centroid[1]) * .7 - 83.5;
                }))
                break;
        }
      });
      state.mapData = mapData
      renderMap();
    });

    return { renderMap }
  
  })();