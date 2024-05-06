const container = document.querySelector('.calendar-container');

const startDate = new Date('2023-05-14');
const endDate = new Date('2024-05-06');

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

events.forEach(event => {
    const dateEl = document.querySelector('.date-' + event.date.toISOString().substring(0, 10));
    const eventEl = document.createElement('div');
    eventEl.className = 'event';
    eventEl.classList.add('country-' + event.country);
    eventEl.classList.add('event-type-' + event.event)
    dateEl.appendChild(eventEl);
});

const getRandomColor = () => {
    const letters = '3456789ABCD';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

Object.values(countries).forEach(country => {
    const countryEls = document.querySelectorAll('.country-' + country);
    const col = getRandomColor();
    countryEls.forEach(el => {
        el.setAttribute('style', `background-color: ${col};`)
    })
});