
(function() {
    const state = {
      mapData: null,
      gMap: null,
      gExtras: null,
      extras: [
        { "name": "malta", "lng": 35.9375, "lat": 14.3754 },
        { "name": "san marino", "lng": 43.9424, "lat": 12.4578 },
        // { "name": "australia", "longitude": 3, "latitude": 3 }
      ]
    }
  
    const { select, selectAll, json, geoPath, geoConicEqualArea, scalePow, zoom, zoomIdentity, drag } = d3;
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
        const width = 420;
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
                if (countries[d.properties.name.toLowerCase()]) {
                    return `esc esc-${countries[d.properties.name.toLowerCase()].replace(' ', '-')}`;
                }
                return "not-esc";
            })
            .attr("d", pathGenerator)
            .on('click', d => selectOperations.selectCountry(d.properties.name.toLowerCase()));

        state.extras.forEach(circle => {
            var coordinates = projection([circle.lat, circle.lng]);
            svg.append("circle")
                .attr("class", `esc esc-${circle.name}`)
                .attr("cx", coordinates[0])
                .attr("cy", coordinates[1])
                .attr("r", 10)
                .style("fill", "red");
        });
        gMap.attr("transform", "scale(3.3), translate(-423,-151)");
        
    }


    json("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json", data => {
      state.mapData = feature(data, data.objects.countries);
      renderMap();
    });
  
  })();