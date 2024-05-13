const eurovisionData = (() => {
    const countries = {
        albania: 'albania',
        armenia: 'armenia',
        australia: 'australia',
        austria: 'austria',
        azerbaijan: 'azerbaijan',
        belgium: 'belgium',
        croatia: 'croatia',
        cyprus: 'cyprus',
        czechia: 'czechia',
        denmark: 'denmark',
        estonia: 'estonia',
        finland: 'finland',
        france: 'france',
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
    
    const countriesWithNationalFinals = new Set([
        countries.albania,
        countries.croatia,
        countries.czechia,
        countries.denmark,
        countries.estonia,
        countries.finland,
        countries.germany,
        countries.iceland,
        countries.ireland,
        countries.israel,
        countries.italy,
        countries.latvia,
        countries.lithuania,
        countries.luxembourg,
        countries.malta,
        countries['san marino'],
        countries.moldova,
        countries.norway,
        countries.portugal,
        countries.serbia,
        countries.spain,
        countries.sweden,
        countries.ukraine
    ]);
    
    const nonReturningCountries = new Set([
        'russia',
        'belarus',
        'slovakia',
        'hungary',
        'romania',
        'bulgaria',
        'macedonia',
        'montenegro',
        'bosnia and herz.',
        'turkey',
        'morocco',
        'andora',
        'monaco'
    ])
    
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
            text: 'HaKokhav HaBa (Season 10, Episode 1)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-e35438d994a7b81026.htm',
            date: new Date("2023-11-20")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 2)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-4618af891c48b81027.htm',
            date: new Date("2023-12-02")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 3)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-d7c4b9c8df5fb81027.htm',
            date: new Date("2023-12-03")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 4)',
            url: 'https://mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-110f3e663c83c81027.htm',
            date: new Date("2023-12-06")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 5)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-5ef27ec9efd3c81026.htm',
            date: new Date("2023-12-10")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 6)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-5ef27ec9efd3c81026.htm',
            date: new Date("2023-12-17")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 7)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-b63e90967967c81026.htm',
            date: new Date("2023-12-18")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 8)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-44e57339edb7c81027.htm',
            date: new Date("2023-12-20")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 9)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-05968150fd58c81026.htm',
            date: new Date("2023-12-25")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 10)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-bc408aa46ff9c81027.htm',
            date: new Date("2023-12-27")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 11)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-21206768466ac81026.htm',
            date: new Date("2023-12-31")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 12)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-4145f002ee3cc81026.htm',
            date: new Date("2024-01-03")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 13)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-877a9d1d85acc81027.htm',
            date: new Date("2024-01-07")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 14)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-7824c38dde9ec81027.htm',
            date: new Date("2024-01-10")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 15)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-45b9663ec02fc81026.htm',
            date: new Date("2024-01-14")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 16)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-9709d05cb2c0d81027.htm',
            date: new Date("2024-01-17")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 17)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-d00111b32661d81026.htm',
            date: new Date("2024-01-21")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 18)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-c84311b32661d81026.htm',
            date: new Date("2024-01-22")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 19)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-9e0479f71003d81027.htm',
            date: new Date("2024-01-25")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 20)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-60e5431d5653d81026.htm',
            date: new Date("2024-01-28")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 21)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-2534391a9af3d81027.htm',
            date: new Date("2024-01-29")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 22)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-242d8924dee4d81026.htm',
            date: new Date("2024-02-01")
        },
        {
            country: countries.israel,
            event: types.semi,
            text: 'HaKokhav HaBa (Season 10, Episode 23)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-98bd73179936d81027.htm',
            date: new Date("2024-02-05")
        },
        {
            country: countries.israel,
            event: types.final,
            text: 'HaKokhav HaBa (Season 10, Episode 24)',
            url: 'https://www.mako.co.il/mako-vod-keshet/the-next-star-s10/VOD-f5b073179936d81027.htm',
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
            text: 'Etapa națională 2024 (live audition round)',
            url: 'https://www.youtube.com/watch?v=pr9fKl1_Xkc',
            date: new Date("2024-01-13")
        },
        {
            country: countries.moldova,
            event: types.final,
            text: 'Etapa națională 2024 (national final)',
            url: 'https://www.youtube.com/watch?v=vNiKGH22cYs',
            date: new Date("2024-02-17")
        },
        {
            country: countries.denmark,
            event: types.final,
            text: 'Dansk Melodi Grand Prix 2024',
            url: 'https://www.youtube.com/watch?v=gqILqU4eI_4&list=PLp4i8IJdXtsYPpNvn63rZhm-WxOJZ1Fge',
            date: new Date("2024-02-17")
        },
        {
            country: countries.estonia,
            event: types.semi,
            text: 'Eesti Laul 2024 (semifinal)',
            url: 'https://www.youtube.com/watch?v=Efh8AX7Ij-I',
            date: new Date("2024-01-20")
        },
        {
            country: countries.estonia,
            event: types.final,
            text: 'Eesti Laul 2024 (final)',
            url: 'https://www.youtube.com/watch?v=s3cjyzuxkzc',
            date: new Date("2024-02-17")
        },
        {
            country: countries.lithuania,
            event: types.semi,
            text: 'Eurovizija.LT (1st semifinal)',
            url: 'https://www.youtube.com/watch?v=ZkTPIEFYqiw',
            date: new Date("2024-01-13")
        },
        {
            country: countries.lithuania,
            event: types.semi,
            text: 'Eurovizija.LT (2nd semifinal)',
            url: 'https://www.youtube.com/watch?v=a9IQUZAWPKQ',
            date: new Date("2024-01-20")
        },
        {
            country: countries.lithuania,
            event: types.semi,
            text: 'Eurovizija.LT (3rd semifinal)',
            url: 'https://www.youtube.com/watch?v=vfmzgG1rLR8',
            date: new Date("2024-01-27")
        },
        {
            country: countries.lithuania,
            event: types.semi,
            text: 'Eurovizija.LT (4th semifinal)',
            url: 'https://www.youtube.com/watch?v=NXic5wB5i6Q',
            date: new Date("2024-02-03")
        },
        {
            country: countries.lithuania,
            event: types.semi,
            text: 'Eurovizija.LT (5th semifinal)',
            url: 'https://www.youtube.com/watch?v=gTS_h3d8SR4',
            date: new Date("2024-02-10")
        },
        {
            country: countries.lithuania,
            event: types.final,
            text: 'Eurovizija.LT (national final)',
            url: 'https://www.youtube.com/watch?v=WTd0d4fQ2kw',
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
            text: 'Dora 2024 (1st semifinal)',
            url: 'https://www.youtube.com/watch?v=2jK3L6kRE7s',
            date: new Date("2024-02-22")
        },
        {
            country: countries.croatia,
            event: types.semi,
            text: 'Dora 2024 (2nd semifinal)',
            url: 'https://www.youtube.com/watch?v=HsSp5OpY0dc',
            date: new Date("2024-02-23")
        },
        {
            country: countries.croatia,
            event: types.final,
            text: 'Dora 2024 (final)',
            url: 'https://www.youtube.com/watch?v=oIDJ4kvB7f0',
            date: new Date("2024-02-25")
        },
        {
            country: countries.serbia,
            event: types.semi,
            text: 'Pesma za Evroviziju 24 (1st semifinal)',
            url: 'https://www.youtube.com/watch?v=mIvLzBo9UqU',
            date: new Date("2024-02-27")
        },
        {
            country: countries.serbia,
            event: types.semi,
            text: 'Pesma za Evroviziju 24 (2nd semifinal)',
            url: 'https://www.youtube.com/watch?v=OQxDDkyWqU8',
            date: new Date("2024-02-29")
        },
        {
            country: countries.serbia,
            event: types.final,
            text: 'Pesma za Evroviziju 24 (final)',
            url: 'https://www.youtube.com/watch?v=h0VpZWSprOM',
            date: new Date("2024-03-02")
        },
        {
            country: countries.iceland,
            event: types.semi,
            text: 'Söngvakeppnin 2024 (1st semifinal)',
            url: 'https://www.youtube.com/watch?v=LVq6USt81SI&list=PLp4i8IJdXtsZb_qHdCpfW2uBtMUNiVNzz',
            date: new Date("2024-02-27")
        },
        {
            country: countries.iceland,
            event: types.semi,
            text: 'Söngvakeppnin 2024 (2nd semifinal)',
            url: 'https://www.youtube.com/watch?v=LVq6USt81SI&list=PLp4i8IJdXtsZb_qHdCpfW2uBtMUNiVNzz',
            date: new Date("2024-02-29")
        },
        {
            country: countries.iceland,
            event: types.final,
            text: 'Söngvakeppnin 2024 (final)',
            url: 'https://www.youtube.com/watch?v=DCvtmpj12KY',
            date: new Date("2024-03-02")
        },
        {
            country: countries.portugal,
            event: types.semi,
            text: 'Festival da Canção 2024 (1st semifinal)',
            url: 'https://www.youtube.com/watch?v=5IcVSAoZkIw&list=PLMedIwg0kZw-9Lka8ILUiqGoaewftSNzo',
            date: new Date("2024-02-24")
        },
        {
            country: countries.portugal,
            event: types.semi,
            text: 'Festival da Canção 2024 (2nd semifinal)',
            url: 'https://www.youtube.com/watch?v=qNHQIM3a6j0&list=PLMedIwg0kZw_d9BGJ1-c98t-2dbcNIXLF',
            date: new Date("2024-03-02")
        },
        {
            country: countries.portugal,
            event: types.final,
            text: 'Festival da Canção 2024 (final)',
            url: 'https://www.youtube.com/watch?v=aNMVhwi6qqY&list=PLMedIwg0kZw-kKbTAKYM4lwkYNsK60N6N',
            date: new Date("2024-03-09")
        },
        {
            country: countries.sweden,
            event: types.semi,
            text: 'Melodifestivalen 2024 (Heat 1)',
            url: 'https://www.youtube.com/watch?v=PbmS3pBaxGE',
            date: new Date("2024-02-03")
        },
        {
            country: countries.sweden,
            event: types.semi,
            text: 'Melodifestivalen 2024 (Heat 2)',
            url: 'https://www.youtube.com/watch?v=BWiSRW23zwI',
            date: new Date("2024-02-10")
        },
        {
            country: countries.sweden,
            event: types.semi,
            text: 'Melodifestivalen 2024 (Heat 3)',
            url: 'https://www.youtube.com/watch?v=nAfnS9LO9y8',
            date: new Date("2024-02-17")
        },
        {
            country: countries.sweden,
            event: types.semi,
            text: 'Melodifestivalen 2024 (Heat 4)',
            url: 'https://www.youtube.com/watch?v=Nufl8vI1uXc',
            date: new Date("2024-02-24")
        },
        {
            country: countries.sweden,
            event: types.semi,
            text: 'Melodifestivalen 2024 (Heat 5 and final qualification)',
            url: 'https://www.youtube.com/watch?v=f92WdRdxNhs',
            date: new Date("2024-03-02")
        },
        {
            country: countries.sweden,
            event: types.final,
            text: 'Melodifestivalen 2024 (final)',
            url: 'https://www.youtube.com/watch?v=f27brCCdres',
            date: new Date("2024-03-09")
        },
        {
            country: countries.france,
            event: types.selection,
            text: 'Slimane announced as France\'s selected entrant with song Mon amour',
            url: 'https://eurovision.tv/story/slimane-will-represent-france-eurovision-2024',
            date: new Date("2023-11-08")
        },
        {
            country: countries.cyprus,
            event: types.selection,
            text: 'Silia Kapsis announced as Cyprus\'s selected entrant',
            url: 'https://ogaegreece.com/exclusive-silia-kapsis-with-cyprus-to-eurovision-2024/',
            date: new Date("2023-09-25")
        },
        {
            country: countries.cyprus,
            event: types.selection,
            text: 'Liar announced as entering song',
            url: 'https://www.instagram.com/p/C11435StwMb/',
            date: new Date("2024-01-08")
        },
        {
            country: countries.cyprus,
            event: types.selection,
            text: 'Liar released',
            url: 'https://eurovoix.com/2024/02/14/cyprus-liar-to-be-released-on-february-29th/',
            date: new Date("2024-02-29")
        },
        {
            country: countries.slovenia,
            event: types.selection,
            text: 'Raiven announced as Slovenia\'s selected entrant',
            url: 'https://eurovoix.com/2024/01/17/misija-malmo-song-reveal-show-details-revealed/',
            date: new Date("2023-12-12")
        },
        {
            country: countries.slovenia,
            event: types.selection,
            text: 'Veronika chosen as entering song',
            url: 'https://eurovoix.com/2024/01/17/misija-malmo-song-reveal-show-details-revealed/',
            date: new Date("2024-01-20")
        },
        {
            country: countries.poland,
            event: types.selection,
            text: 'Luna chosen as Poland\'s entrant with song The Tower',
            url: 'https://www.tvp.pl/76003464/luna-reprezentantka-polski-w-konkursie-piosenki-eurowizji-2024',
            date: new Date("2024-02-19")
        },
        {
            country: countries.belgium,
            event: types.selection,
            text: 'Mustii announced as Belgium\'s selected entrant',
            url: 'https://eurovision.tv/story/belgium-announces-first-artist-eurovision-2024',
            date: new Date("2023-08-30")
        },
        {
            country: countries.belgium,
            event: types.selection,
            text: 'Before the Party\'s Over premiered',
            url: 'https://www.telepro.be/actu/tv/eurovision-2024-la-chanson-de-mustii-sera-devoilee-dans-le-8-9-de-vivacite-ce-mardi-20-fevrier/',
            date: new Date("2024-02-20")
        },
        {
            country: countries.switzerland,
            event: types.selection,
            text: 'Nemo announced as Switzerland\'s selected entrant with song The Code',
            url: 'https://eurovision.tv/story/nemo-the-code-malmo-switzerland',
            date: new Date("2024-02-29")
        },
        {
            country: countries.netherlands,
            event: types.selection,
            text: 'Joost Klein announced as the Netherlands\'s selected entrant',
            url: 'https://eurovision.tv/story/joost-klein-represent-netherlands-eurovision-2024',
            date: new Date("2023-12-11")
        },
        {
            country: countries.netherlands,
            event: types.selection,
            text: 'Europapa released',
            url: 'https://eurovoix.com/2023/12/11/netherlands-joost-klein-to-eurovision-2024/',
            date: new Date("2024-02-29")
        },
        {
            country: countries.austria,
            event: types.selection,
            text: 'Kaleen announced as Austria\'s selected entrant',
            url: 'https://eurovoix.com/2024/02/17/austria-kaleens-we-will-rave-will-be-released-1-march/',
            date: new Date("2024-01-16")
        },
        {
            country: countries.austria,
            event: types.selection,
            text: 'We Will Rave released',
            url: 'https://eurovoix.com/2024/02/17/austria-kaleens-we-will-rave-will-be-released-1-march/',
            date: new Date("2024-03-01")
        },
        {
            country: countries['united kingdom'],
            event: types.selection,
            text: 'Olly Alexander announced as the UK\'s selected entrant',
            url: 'https://www.bbc.com/news/entertainment-arts-67740425',
            date: new Date("2023-12-16")
        },
        {
            country: countries['united kingdom'],
            event: types.selection,
            text: 'Dizzy released',
            url: 'https://www.officialcharts.com/chart-news/olly-alexander-eurovision-2024-entry-name-dizzy/',
            date: new Date("2024-03-01")
        },
        {
            country: countries.australia,
            event: types.selection,
            text: 'Electric Fields announced as Australia\'s entrant with song One Milkali',
            url: 'https://eurovision.tv/story/electric-fields-represent-australia-malmo',
            date: new Date("2024-03-06")
        },
        {
            country: countries.greece,
            event: types.selection,
            text: 'Marina Satti announced as Greece\'s selected entrant',
            url: 'https://eurovision.tv/story/marina-satti-will-represent-greece-malmo',
            date: new Date("2023-10-24")
        },
        {
            country: countries.greece,
            event: types.selection,
            text: 'Zari released',
            url: 'https://www.ekathimerini.com/culture/1233589/greece-ready-to-roll-the-dice-at-eurovision-with-marina-sattis-zari/',
            date: new Date("2024-03-7")
        },
        {
            country: countries.georgia,
            event: types.selection,
            text: 'Nutsa Buzaladze announced as Georgia\'s selected entrant',
            url: 'https://eurovision.tv/story/international-idol-nutsa-buzaladze-represent-georgia',
            date: new Date("2024-01-12")
        },
        {
            country: countries.georgia,
            event: types.selection,
            text: 'Firefighter selected as entering song',
            url: 'https://eurovoix.com/2024/03/06/nutsa-buzaladze-fire-fighter-at-eurovision-2024/',
            date: new Date("2024-03-11")
        },
        {
            country: countries.armenia,
            event: types.selection,
            text: 'Ladaniva announced as Armenia\'s selected entrant',
            url: 'https://eurovision.tv/story/ladaniva-representing-armenia-malmo-2024',
            date: new Date("2024-03-09")
        },
        {
            country: countries.armenia,
            event: types.selection,
            text: 'Jako released',
            url: 'https://eurovision.tv/story/armenias-song-malmo-jako-ladaniva',
            date: new Date("2024-03-13")
        },
        {
            country: countries.azerbaijan,
            event: types.selection,
            text: 'Fahree announced as Azerbaijan\'s selected entrant',
            url: 'https://eurovision.tv/story/fahree-will-represent-azerbaijan-malmo',
            date: new Date("2024-03-07")
        },
        {
            country: countries.azerbaijan,
            event: types.selection,
            text: 'Özünlə apar released',
            url: 'https://eurovision.tv/story/azerbaijan-2024-fahree-song-released',
            date: new Date("2024-03-15")
        }
    ]
    return { 
        countries, 
        countriesWithNationalFinals, 
        nonReturningCountries, 
        calendarPeriod, 
        events }
})();