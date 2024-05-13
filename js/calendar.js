const renderCalendar = (() => {

    const renderDates = () => {
        const container = document.querySelector('.calendar-container');
        const { startDate, endDate } = eurovisionData.calendarPeriod;
    
        let currDate = startDate;
        while (currDate <= endDate) {
            const dateEl = document.createElement('div');
            dateEl.className = 'date-outer-container';
            const dateInnerEl = document.createElement('div');
            dateInnerEl.className = 'date-inner-container';
            dateInnerEl.classList.add('date-' + currDate.toISOString().substring(0, 10));
            const dateBar = document.createElement('div');
            dateBar.className = 'date-bar';
            if (currDate.getDay() == 0 || currDate.getDay() == 6) {
                dateBar.classList.add('weekend');
            } else {
                dateBar.classList.add('weekday');
            }
            if (currDate.getDate() == 1) {
                dateBar.classList.add('first-of-month');
                const monthDisplay = document.createElement('div');
                monthDisplay.className = 'month-display';
                monthDisplay.innerHTML = currDate.toLocaleString('default', { month: 'short' });
                dateEl.appendChild(monthDisplay);
            }
    
            dateEl.appendChild(dateInnerEl)
            dateInnerEl.appendChild(dateBar);
            container.appendChild(dateEl);
            currDate.setDate(currDate.getDate() + 1);
        }
    }

    const renderEvents = () => {
        eurovisionData.events.forEach(event => {
            const dateEl = document.querySelector('.date-' + event.date.toISOString().substring(0, 10));
            const eventEl = document.createElement('div');
            eventEl.className = 'event';
            eventEl.classList.add('country-' + event.country.replace(' ', '-'));
            eventEl.classList.add('event-type-' + event.event);
            eventEl.addEventListener('click', () => {
                selectOperations.selectCountry(event.country);
                const linkEl = eventEl.querySelector('.external-link');
                if (linkEl) {
                    selectOperations.displayLink(linkEl);
                }
            });
            if (event.url && event.text) {
                const linkDiv = document.createElement('div');
                linkDiv.className = 'external-link';
                const link = document.createElement('a');
                link.innerText = `${event.date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}: ${event.text}`;
                link.setAttribute('href', event.url);
                link.setAttribute('target', '_blank');
                linkDiv.appendChild(link);
                linkDiv.addEventListener('click', e => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (e.target.classList.contains('external-link')) {
                        window.open(e.target.querySelector('a').href, '_blank');
                    } else {
                        window.open(e.target.href, '_blank');
                    }
                })
                eventEl.appendChild(linkDiv);
            }
            dateEl.appendChild(eventEl);
        });
    }

    const setMargins = () => {
        const containerWidth = window.innerWidth - 20;
        const mapHeight = 325;
        const numRows = Math.ceil(mapHeight / 85);
        const numCols = Math.floor((containerWidth - 430) / 12);
        const dateContainers = document.querySelectorAll('.date-outer-container');
        dateContainers.forEach((dateContainer, i) => {
            if ((i + 1) % numCols === 0 && i < numCols * numRows && containerWidth > 748) {
                dateContainer.setAttribute('style', `margin-right: ${containerWidth - 1 - numCols * 12}px`)
            } else {
                dateContainer.setAttribute('style', 'margin-right: 0');
            }
        });
    }

    renderDates();
    renderEvents();
    setMargins();

   return { setMargins }

})();