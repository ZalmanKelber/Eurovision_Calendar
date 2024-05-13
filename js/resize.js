const windowEvents = (() => {
    window.addEventListener("click", e => {
        const cl = e.target.classList
        if ((!cl.contains('esc') && !cl.contains('event')) || cl.contains('key')) {
            selectOperations.deselectCountries();
        }
    })

    let throttled = false;
    window.addEventListener('resize', () => {
        renderCalendar.setMargins();
        renderMap.renderMap();
        setTimeout(() => {
            throttled = false;
        }, 200);
    });
  })();