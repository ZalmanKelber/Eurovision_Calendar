const resize = (() => {
    let throttled = false;
    window.addEventListener('resize', () => {
        renderCalendar.setMargins();
        renderMap.renderMap();
        setTimeout(() => {
            throttled = false;
        }, 200);
    });
  })();