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

const calendarPeriod = {
    startDate: new Date('2023-05-14'),
    endDate: new Date('2024-05-06')
}

const events = [
    {
        country: countries.czechia,
        event: types.final,
        text: 'Czechia National Final',
        url: 'https://www.youtube.com/watch?v=0uj9xNyJvZw',
        date: new Date("2023-12-04")
    },
    {
        country: countries.albania,
        event: types.final,
        text: 'Festivali i Këngës 62',
        url: 'https://www.youtube.com/watch?v=Pjl5liJlFqg',
        date: new Date("2023-12-22")
    },
    {
        country: countries.ireland,
        event: types.final,
        text: 'Eurosong 2024',
        url: 'https://www.youtube.com/watch?v=_UXe5QXJGMM&list=PLx_zdtGfRRAi8Vmf4QKVA2ttJ-SVguG6k',
        date: new Date("2024-01-26")
    },
    {
        country: countries.luxembourg,
        event: types.final,
        text: 'Luxembourg Song Contest 2024',
        url: 'https://www.youtube.com/watch?v=fKPnx9xexuM',
        date: new Date("2024-01-27")
    },
    {
        country: countries.ukraine,
        event: types.semi,
        text: 'Vidbir 2024 (online wildcard)',
        url: 'https://www.youtube.com/watch?v=U0sJEaKJx94&list=PLp4i8IJdXtsbZ9RACue1w45fbftVa53iL',
        date: new Date("2023-12-21")
    },
    {
        country: countries.ukraine,
        event: types.final,
        text: 'Vidbir 2024',
        url: 'https://www.youtube.com/watch?v=hGXFzJWXpC8',
        date: new Date("2024-02-03")
    },
    {
        country: countries.malta,
        event: types.semi,
        text: 'Malta Eurovision Song Contest 2024 (1st semifinal)',
        url: 'https://www.youtube.com/watch?v=esMGl7DHf5I&list=PLp4i8IJdXtsalO197JV888sqdChhgYuTO',
        date: new Date("2023-10-27")
    },
    {
        country: countries.malta,
        event: types.semi,
        text: 'Malta Eurovision Song Contest 2024 (2nd semifinal)',
        url: 'https://www.youtube.com/watch?v=esMGl7DHf5I&list=PLp4i8IJdXtsalO197JV888sqdChhgYuTO',
        date: new Date("2023-11-03")
    },
    {
        country: countries.malta,
        event: types.semi,
        text: 'Malta Eurovision Song Contest 2024 (3rd semifinal)',
        url: 'https://www.youtube.com/watch?v=esMGl7DHf5I&list=PLp4i8IJdXtsalO197JV888sqdChhgYuTO',
        date: new Date("2023-11-10")
    },
    {
        country: countries.malta,
        event: types.semi,
        text: 'Malta Eurovision Song Contest 2024 (4th semifinal)',
        url: 'https://www.youtube.com/watch?v=esMGl7DHf5I&list=PLp4i8IJdXtsalO197JV888sqdChhgYuTO',
        date: new Date("2023-11-17")
    },
    {
        country: countries.malta,
        event: types.final,
        text: 'Malta Eurovision Song Contest 2024 (national final)',
        url: 'https://www.youtube.com/watch?v=Tv2XKEbAPk4',
        date: new Date("2024-02-03")
    },
    {
        country: countries.spain,
        event: types.semi,
        text: 'Benidorm Fest 2024 (1st semifinal)',
        url: 'https://www.youtube.com/watch?v=kegNeiBFIjk',
        date: new Date("2024-01-31")
    },
    {
        country: countries.spain,
        event: types.semi,
        text: 'Benidorm Fest 2024 (2nd semifinal)',
        url: 'https://www.youtube.com/watch?v=KPj3mJeAJ2w',
        date: new Date("2024-02-02")
    },
    {
        country: countries.spain,
        event: types.final,
        text: 'Benidorm Fest 2024 (grand final)',
        url: 'https://www.youtube.com/watch?v=66YHWcpnugY',
        date: new Date("2024-02-03")
    },
    {
        country: countries.norway,
        event: types.semi,
        text: 'Melodi Grand Prix 2024 (1st semifinal)',
        url: 'https://www.youtube.com/watch?v=iAWLsGNSUHM',
        date: new Date("2024-01-13")
    },
    {
        country: countries.norway,
        event: types.semi,
        text: 'Melodi Grand Prix 2024 (2nd semifinal)',
        url: 'https://www.youtube.com/watch?v=mBEY2gS70lc',
        date: new Date("2024-01-20")
    },
    {
        country: countries.norway,
        event: types.semi,
        text: 'Melodi Grand Prix 2024 (3rd semifinal)',
        url: 'https://www.youtube.com/watch?v=05fW8f4kPOo',
        date: new Date("2024-01-27")
    },
    {
        country: countries.norway,
        event: types.final,
        text: 'Melodi Grand Prix 2024 (grand final)',
        url: 'https://www.youtube.com/watch?v=Q1NkdwnZMRk',
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
        text: 'Uuden Musiikin Kilpailu 2024',
        url: 'https://www.youtube.com/playlist?list=PLu-QTfbDH5WhY-R2dAcE31Ph_IgRFGirl',
        date: new Date("2024-02-10")
    },
    {
        country: countries.latvia,
        event: types.semi,
        text: 'Supernova 2024 (semifinal)',
        url: 'https://www.youtube.com/watch?v=p9-XTt2uypg&list=PLp4i8IJdXtsZY3RFgS67ihnfdT6uR2vSYhttps://www.youtube.com/watch?v=p9-XTt2uypg&list=PLp4i8IJdXtsZY3RFgS67ihnfdT6uR2vSY',
        date: new Date("2024-02-03")
    },
    {
        country: countries.latvia,
        event: types.final,
        text: 'Supernova 2024 (final)',
        url: 'https://www.youtube.com/watch?v=3vBvaY5de34',
        date: new Date("2024-02-10")
    },
    {
        country: countries.italy,
        event: types.semi,
        text: 'Sanremo Giovani 2023',
        url: 'https://www.youtube.com/watch?v=-y6uuBX3Y8U&list=PLkqz3S84Tw-TuNxLSHSC-Dwt1VJCzyXgX',
        date: new Date("2023-12-19")
    },
    {
        country: countries.italy,
        event: types.semi,
        text: 'Sanremo Music Festival 2024 (1st night)',
        url: 'https://www.youtube.com/watch?v=BKW0Ql4HG14&list=PLCB2npzGeC0ZMQV0w34Ic_E8vl5isrUNB',
        date: new Date("2024-02-06")
    },
    {
        country: countries.italy,
        event: types.semi,
        text: 'Sanremo Music Festival 2024 (2nd night)',
        url: 'https://www.youtube.com/watch?v=YADb629mkd0',
        date: new Date("2024-02-07")
    },
    {
        country: countries.italy,
        event: types.semi,
        text: 'Sanremo Music Festival 2024 (3rd night)',
        url: 'https://www.youtube.com/watch?v=JFt5QGQMz6E',
        date: new Date("2024-02-08")
    },
    {
        country: countries.italy,
        event: types.semi,
        text: 'Sanremo Music Festival 2024 (4th night)',
        url: 'https://www.youtube.com/watch?v=lZ4y8TGF-xs',
        date: new Date("2024-02-09")
    },
    {
        country: countries.italy,
        event: types.final,
        text: 'Sanremo Music Festival 2024 (5th night and superfinal)',
        url: 'https://www.youtube.com/watch?v=7dHFnUb0U7o&list=PLb_Qew9Dujkj2kIA797BjDELEp4iyA6E5',
        date: new Date("2024-02-10")
    },
    {
        country: countries.germany,
        event: types.semi,
        text: 'Ich will zum ESC (1st episode: auditions, part 1)',
        url: 'https://www.ardmediathek.de/video/ich-will-zum-esc/die-auditions-teil-1-s01-e01/das-erste/Y3JpZDovL25kci5kZS80OTY5XzIwMjQtMDEtMjctMjMtMTU',
        date: new Date("2024-01-25")
    },
    {
        country: countries.germany,
        event: types.semi,
        text: 'Ich will zum ESC (2nd episode: auditions, part 2)',
        url: 'https://www.ardmediathek.de/video/ich-will-zum-esc/die-auditions-teil-2-s01-e02/das-erste/Y3JpZDovL25kci5kZS80OTY5XzIwMjQtMDEtMjctMDAtMDA',
        date: new Date("2024-01-25")
    },
    {
        country: countries.germany,
        event: types.semi,
        text: 'Ich will zum ESC (3rd episode: vocal coaching)',
        url: 'https://www.ardmediathek.de/video/ich-will-zum-esc/das-vocal-coaching-jetzt-zaehlt-jeder-ton-s01-e03/das-erste/Y3JpZDovL25kci5kZS80OTY5XzIwMjQtMDItMDMtMjMtNTU',
        date: new Date("2024-01-25")
    },
    {
        country: countries.germany,
        event: types.semi,
        text: 'Ich will zum ESC (4th episode: lip-sync challenge)',
        url: 'https://www.ardmediathek.de/video/ich-will-zum-esc/lip-sync-performance-ist-alles-s01-e04/das-erste/Y3JpZDovL25kci5kZS80OTY5XzIwMjQtMDItMDQtMDAtNDA',
        date: new Date("2024-01-30")
    },
    {
        country: countries.germany,
        event: types.semi,
        text: 'Ich will zum ESC (5th episode: songwriting challenge)',
        url: 'https://www.ardmediathek.de/video/ich-will-zum-esc/das-song-writing-auf-den-spuren-des-esc-songs-s01-e05/das-erste/Y3JpZDovL25kci5kZS80OTY5XzIwMjQtMDItMDQtMDEtMjU',
        date: new Date("2024-02-01")
    },
    {
        country: countries.germany,
        event: types.semi,
        text: 'Ich will zum ESC (6th episode: live final)',
        url: 'https://www.ardmediathek.de/video/ich-will-zum-esc/die-live-entscheidung-das-grosse-finale-s01-e06/das-erste/Y3JpZDovL25kci5kZS9wcm9wbGFuXzE5NjM1NTcyNF9nYW56ZVNlbmR1bmc',
        date: new Date("2024-02-08")
    },
    {
        country: countries.germany,
        event: types.final,
        text: 'Eurovision Song Contest: Das deutsche Finale 2024',
        url: 'https://www.youtube.com/watch?v=TibLUl7o0So&list=PLp4i8IJdXtsYNAElpVMKD2g9sQODjf1Vm',
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
        text: 'Una voce per San Marino (1st semifinal)',
        url: 'https://www.youtube.com/watch?v=Eh1UVmKKpag',
        date: new Date("2024-02-19")
    },
    {
        country: countries['san marino'],
        event: types.semi,
        text: 'Una voce per San Marino (2nd semifinal)',
        url: 'https://www.youtube.com/watch?v=zhm1qEpieds',
        date: new Date("2024-02-20")
    },
    {
        country: countries['san marino'],
        event: types.semi,
        text: 'Una voce per San Marino (3rd semifinal)',
        url: 'https://www.youtube.com/watch?v=SptqXRYaYTo',
        date: new Date("2024-02-21")
    },
    {
        country: countries['san marino'],
        event: types.semi,
        text: 'Una voce per San Marino (4th semifinal)',
        url: 'https://www.youtube.com/watch?v=XeIxFLbQQsM',
        date: new Date("2024-02-22")
    },
    {
        country: countries['san marino'],
        event: types.semi,
        text: 'Una voce per San Marino (5th semifinal)',
        url: 'https://www.youtube.com/watch?v=TR1rmXQwhs8',
        date: new Date("2024-02-23")
    },
    {
        country: countries['san marino'],
        event: types.final,
        text: 'Una voce per San Marino (final)',
        url: 'https://www.youtube.com/watch?v=fh49dnAkU8I&list=PL01L6lGBoNb6u8sTI-gQU0Ku1Z4nenLpB',
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
        text: 'Mustii selected to represent Belgium',
        url: 'https://www.google.com',
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