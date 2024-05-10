const countries = {
    armenia: 'armenia',
    australia: 'australia',
    austria: 'austria',
    azerbaijan: 'azerbaijan',
    belgium: 'belgium',
    croatia: 'croatia',
    cyprus: 'cyprus',
    czechia: 'czechia',
    denmark: 'denmark',
    albania: 'albania',
    finland: 'finland',
    france: 'france',
    estonia: 'estonia',
    georgia: 'georgia',
    germany: 'germany',
    greece: 'greece',
    iceland: 'iceland',
    ireland: 'ireland',
    israel: 'israel',
    italy: 'italy',
    latvia: 'latvia',
    lithuania: 'lithuania',
    luxembourg: 'luxembourg',
    malta: 'malta',
    'san marino': 'san marino',
    moldova: 'moldova',
    netherlands: 'netherlands',
    norway: 'norway',
    poland: 'poland',
    portugal: 'portugal',
    serbia: 'serbia',
    slovenia: 'slovenia',
    spain: 'spain',
    sweden: 'sweden',
    switzerland: 'switzerland',
    'united kingdom': 'united kingdom',
    ukraine: 'ukraine',
}

const types = {
    final: 'final',
    semi: 'semi',
    selection: 'selection'
}

const events = [
    {
        country: countries.czechia,
        event: types.final,
        date: new Date("2023-12-04")
    },
    {
        country: countries.albania,
        event: types.final,
        date: new Date("2023-12-22")
    },
    {
        country: countries.ireland,
        event: types.final,
        date: new Date("2024-01-26")
    },
    {
        country: countries.luxembourg,
        event: types.final,
        date: new Date("2024-01-27")
    },
    {
        country: countries.ukraine,
        event: types.semi,
        date: new Date("2023-12-21")
    },
    {
        country: countries.ukraine,
        event: types.final,
        date: new Date("2024-02-03")
    },
    {
        country: countries.malta,
        event: types.semi,
        date: new Date("2023-10-27")
    },
    {
        country: countries.malta,
        event: types.semi,
        date: new Date("2023-11-03")
    },
    {
        country: countries.malta,
        event: types.semi,
        date: new Date("2023-11-10")
    },
    {
        country: countries.malta,
        event: types.semi,
        date: new Date("2023-11-17")
    },
    {
        country: countries.malta,
        event: types.final,
        date: new Date("2024-02-03")
    },
    {
        country: countries.spain,
        event: types.semi,
        date: new Date("2024-01-31")
    },
    {
        country: countries.spain,
        event: types.semi,
        date: new Date("2024-02-02")
    },
    {
        country: countries.spain,
        event: types.final,
        date: new Date("2024-02-03")
    },
    {
        country: countries.norway,
        event: types.semi,
        date: new Date("2024-01-13")
    },
    {
        country: countries.norway,
        event: types.semi,
        date: new Date("2024-01-20")
    },
    {
        country: countries.norway,
        event: types.semi,
        date: new Date("2024-01-27")
    },
    {
        country: countries.norway,
        event: types.final,
        date: new Date("2024-02-03")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2023-11-20")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2023-12-02")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2023-12-03")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2023-12-06")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2023-12-10")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2023-12-17")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2023-12-18")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2023-12-20")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2023-12-25")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2023-12-27")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2024-01-03")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2024-01-07")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2024-01-14")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2024-01-17")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2024-01-21")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2024-01-22")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2024-01-25")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2024-01-28")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2024-01-29")
    },
    {
        country: countries.israel,
        event: types.semi,
        date: new Date("2024-02-01")
    },
    {
        country: countries.israel,
        event: types.final,
        date: new Date("2024-02-06")
    },
    {
        country: countries.finland,
        event: types.final,
        date: new Date("2024-02-10")
    },
    {
        country: countries.latvia,
        event: types.semi,
        date: new Date("2024-02-03")
    },
    {
        country: countries.latvia,
        event: types.final,
        date: new Date("2024-02-10")
    },
    {
        country: countries.italy,
        event: types.semi,
        date: new Date("2023-12-19")
    },
    {
        country: countries.italy,
        event: types.semi,
        date: new Date("2024-02-06")
    },
    {
        country: countries.italy,
        event: types.semi,
        date: new Date("2024-02-07")
    },
    {
        country: countries.italy,
        event: types.semi,
        date: new Date("2024-02-08")
    },
    {
        country: countries.italy,
        event: types.semi,
        date: new Date("2024-02-09")
    },
    {
        country: countries.italy,
        event: types.final,
        date: new Date("2024-02-10")
    },
    {
        country: countries.germany,
        event: types.semi,
        date: new Date("2024-01-25")
    },
    {
        country: countries.germany,
        event: types.semi,
        date: new Date("2024-01-30")
    },
    {
        country: countries.germany,
        event: types.semi,
        date: new Date("2024-02-01")
    },
    {
        country: countries.germany,
        event: types.semi,
        date: new Date("2024-02-08")
    },
    {
        country: countries.germany,
        event: types.final,
        date: new Date("2024-02-16")
    },
    {
        country: countries.moldova,
        event: types.semi,
        date: new Date("2024-01-13")
    },
    {
        country: countries.moldova,
        event: types.final,
        date: new Date("2024-02-17")
    },
    {
        country: countries.denmark,
        event: types.final,
        date: new Date("2024-02-17")
    },
    {
        country: countries.estonia,
        event: types.final,
        date: new Date("2024-01-20")
    },
    {
        country: countries.estonia,
        event: types.final,
        date: new Date("2024-02-17")
    },
    {
        country: countries.lithuania,
        event: types.semi,
        date: new Date("2024-01-13")
    },
    {
        country: countries.lithuania,
        event: types.semi,
        date: new Date("2024-01-20")
    },
    {
        country: countries.lithuania,
        event: types.semi,
        date: new Date("2024-01-27")
    },
    {
        country: countries.lithuania,
        event: types.semi,
        date: new Date("2024-02-03")
    },
    {
        country: countries.lithuania,
        event: types.semi,
        date: new Date("2024-02-10")
    },
    {
        country: countries.lithuania,
        event: types.final,
        date: new Date("2024-02-17")
    },
    {
        country: countries['san marino'],
        event: types.semi,
        date: new Date("2024-02-19")
    },
    {
        country: countries['san marino'],
        event: types.semi,
        date: new Date("2024-02-20")
    },
    {
        country: countries['san marino'],
        event: types.semi,
        date: new Date("2024-02-21")
    },
    {
        country: countries['san marino'],
        event: types.semi,
        date: new Date("2024-02-22")
    },
    {
        country: countries['san marino'],
        event: types.semi,
        date: new Date("2024-02-23")
    },
    {
        country: countries['san marino'],
        event: types.final,
        date: new Date("2024-02-24")
    },
    {
        country: countries.croatia,
        event: types.semi,
        date: new Date("2024-02-22")
    },
    {
        country: countries.croatia,
        event: types.semi,
        date: new Date("2024-02-23")
    },
    {
        country: countries.croatia,
        event: types.final,
        date: new Date("2024-02-25")
    },
    {
        country: countries.serbia,
        event: types.semi,
        date: new Date("2024-02-27")
    },
    {
        country: countries.serbia,
        event: types.semi,
        date: new Date("2024-02-29")
    },
    {
        country: countries.serbia,
        event: types.final,
        date: new Date("2024-03-02")
    },
    {
        country: countries.iceland,
        event: types.semi,
        date: new Date("2024-02-27")
    },
    {
        country: countries.iceland,
        event: types.semi,
        date: new Date("2024-02-29")
    },
    {
        country: countries.iceland,
        event: types.final,
        date: new Date("2024-03-02")
    },
    {
        country: countries.portugal,
        event: types.semi,
        date: new Date("2024-02-24")
    },
    {
        country: countries.portugal,
        event: types.semi,
        date: new Date("2024-03-02")
    },
    {
        country: countries.portugal,
        event: types.final,
        date: new Date("2024-03-09")
    },
    {
        country: countries.sweden,
        event: types.semi,
        date: new Date("2024-02-03")
    },
    {
        country: countries.sweden,
        event: types.semi,
        date: new Date("2024-02-10")
    },
    {
        country: countries.sweden,
        event: types.semi,
        date: new Date("2024-02-17")
    },
    {
        country: countries.sweden,
        event: types.semi,
        date: new Date("2024-02-24")
    },
    {
        country: countries.sweden,
        event: types.semi,
        date: new Date("2024-03-02")
    },
    {
        country: countries.sweden,
        event: types.final,
        date: new Date("2024-03-09")
    },
    {
        country: countries.france,
        event: types.selection,
        date: new Date("2023-11-08")
    },
    {
        country: countries.cyprus,
        event: types.selection,
        date: new Date("2023-09-25")
    },
    {
        country: countries.cyprus,
        event: types.selection,
        date: new Date("2024-01-08")
    },
    {
        country: countries.slovenia,
        event: types.selection,
        date: new Date("2023-12-12")
    },
    {
        country: countries.slovenia,
        event: types.selection,
        date: new Date("2024-01-20")
    },
    {
        country: countries.poland,
        event: types.selection,
        date: new Date("2024-02-19")
    },
    {
        country: countries.belgium,
        event: types.selection,
        date: new Date("2023-08-30")
    },
    {
        country: countries.belgium,
        event: types.selection,
        date: new Date("2024-02-20")
    },
    {
        country: countries.switzerland,
        event: types.selection,
        date: new Date("2024-02-29")
    },
    {
        country: countries.netherlands,
        event: types.selection,
        date: new Date("2023-12-11")
    },
    {
        country: countries.netherlands,
        event: types.selection,
        date: new Date("2024-02-29")
    },
    {
        country: countries.austria,
        event: types.selection,
        date: new Date("2024-01-16")
    },
    {
        country: countries.austria,
        event: types.selection,
        date: new Date("2024-03-01")
    },
    {
        country: countries['united kingdom'],
        event: types.selection,
        date: new Date("2023-12-16")
    },
    {
        country: countries['united kingdom'],
        event: types.selection,
        date: new Date("2024-03-01")
    },
    {
        country: countries.australia,
        event: types.selection,
        date: new Date("2024-03-06")
    },
    {
        country: countries.greece,
        event: types.selection,
        date: new Date("2023-10-24")
    },
    {
        country: countries.greece,
        event: types.selection,
        date: new Date("2024-03-7")
    },
    {
        country: countries.georgia,
        event: types.selection,
        date: new Date("2024-01-12")
    },
    {
        country: countries.georgia,
        event: types.selection,
        date: new Date("2024-03-11")
    },
    {
        country: countries.armenia,
        event: types.selection,
        date: new Date("2024-03-09")
    },
    {
        country: countries.armenia,
        event: types.selection,
        date: new Date("2024-03-13")
    },
    {
        country: countries.azerbaijan,
        event: types.selection,
        date: new Date("2024-03-07")
    },
    {
        country: countries.azerbaijan,
        event: types.selection,
        date: new Date("2024-03-15")
    }
]