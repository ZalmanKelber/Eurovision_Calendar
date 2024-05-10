const selectOperations = (() => {
    const deselectCountries = () => {
        const events = document.querySelectorAll('.event');
        events.forEach(event => {
            event.classList.remove('inactive');
            event.classList.remove('active')
        });
        const shapes = document.querySelectorAll('.esc');
        shapes.forEach(shape => {
            shape.classList.remove('highlighted')
        });
        document.querySelector('.country-title')?.remove();
    }
    
    const selectCountry = (country) => {
        if (countries[country]) {
            deselectCountries();
            const events = document.querySelectorAll('.event');
            events.forEach(event => {
                if (event.classList.contains(`country-${countries[country].replace(' ', '-')}`)) {
                    event.classList.add('active');
                } else {
                    if (!event.classList.contains('key')) {
                        event.classList.add('inactive');
                    }
                }
            });
            document.querySelector(`.esc-${countries[country].replace(' ', '-')}`).classList.add('highlighted');
            const countryTitle = document.createElement('div');
            countryTitle.className = 'country-title';
            countryTitle.textContent = country.toUpperCase();
            document.querySelector('.content-container').appendChild(countryTitle);
        }
    }

    return { deselectCountries, selectCountry }
})();