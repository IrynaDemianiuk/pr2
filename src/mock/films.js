const getRandomInteger = (a = 0, b = 1) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
  
    return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateRandomInformation = (item) => {
    const randomIndex = getRandomInteger(0, item.length - 1);
  
    return item[randomIndex];
};

export const generateFilmItem = () => {
    const titlesArr = [
        'Sagebrush Trail',
        'The Man with the Golden Arm',
        'Santa Claus Conquers the Martians',
        'Popeye the Sailor Meets Sindbad the Sailor',
        'The Seven Samurai',
        'Bonnie and Clyde',
        'Reservoir Dogs',
        'Airplane!',
        'Pan`s Labyrinth',
        'Doctor Zhivago'
    ];

    const genreArr = [
        'Film',
        'Cartoon',
        'Serial',
    ];

    const countryArr = [
        'USA',
        'UK',
        'France',
        'Germany'
    ];

    const actorsArr = [
        'Glenn Close, Morgan Freeman, Samuel L. Jackson',
        'Judi Dench, Tom Hanks, Frances McDormand',
        'Robert De Niro, Anthony Hopkins, Helen Mirren',
        'Leonardo DiCaprio, Liam Neeson, Gary Oldman'
    ];

    const writersArr = [
        'JK Rowling',
        'Hanya Yanagihara',
        'Bob Dylan',
        'Malcolm Gladwell'
    ];

    const genresArr = [
        ['Drama', 'Film-Noir', 'Mystery'],
        ['Action', 'Comedy'],
        ['Horror', 'Mystery'],
        ['Romance', 'Thriller']
        ['Thriller']
    ]

    const directorsArr = [
        'Anthony Mann',
        'David Lynch',
        'Martin Scorsese',
        'Joel and Ethan Coen',
        'Steven Soderbergh'
    ]

    const ageArr = [
        '6+',
        '18+'
    ]

    return {
      title: generateRandomInformation(titlesArr),
      rating: getRandomInteger(1, 10),
      releaseDate: getRandomInteger(1075847895372, 1585847895372),
      duration: getRandomInteger(15, 200),
      genre: generateRandomInformation(genreArr),
      country: generateRandomInformation(countryArr),
      actors: generateRandomInformation(actorsArr),
      writers: generateRandomInformation(writersArr),
      genres: generateRandomInformation(genresArr),
      director: generateRandomInformation(directorsArr),
      age: generateRandomInformation(ageArr),
      
      desc: 'The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion\'s other assistant. Flamarion falls in love with Connie, the movie\`s femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.'
    };
};
