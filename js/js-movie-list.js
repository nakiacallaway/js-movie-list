const movies = [
    {
        name: "Howl's Moving Castle",
        year: 2004,
        genre: ['Animation', 'Adventure', 'Family'],
        description: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
        imdbRating: 8.2
    },
    {
        name: "Spirited Away",
        year: 2001,
        genre: ['Animation', 'Adventure', 'Family'],
        description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        imdbRating: 8.6
    },
    {
        name: "Final Fantasy VII: Advent Children",
        year: 2005,
        genre: ['Animation', 'Action', 'Adventure'],
        description: "An ex-mercenary is forced out of isolation when three mysterious men kidnap and brainwash the city's children afflicted with the Geostigma disease.",
        imdbRating: 7.2
    },
    {
        name: "Violet Evergarden: The Movie",
        year: 2020,
        genre: ['Animation', 'Drama', 'Fantasy'],
        description: "After the aftermath of a war, a young girl who was used as a 'tool' for war learned to live. With the scars of burns , she goes back to her past to feel the true feelings of the Major's ,'I love you.'",
        imdbRating: 8.3
    },
    {
        name: "Hetalia: Axis Powers - Paint It, White!",
        year: 2010,
        genre: ['Animation, Adventure, Comedy'],
        description: "The Axis Powers must band together to save the world from aliens who are painting everything white.",
        imdbRating: 6.6
    }
];

// Loop and console details
const movieDetails = () => {
    movies.forEach(m => {
      console.log(`My movie title is ${m.name} and it came out in ${m.year}`);
    });
  };
  movieDetails();
  // Loop and find an instance by a parameter
  const titleDetails = movieTitle => {
   let foundMovie = movies.find(movie => movie.name === movieTitle);
    if (foundMovie) console.log(foundMovie);
    else console.log(`Could not find ${movieTitle}`);
  };
  titleDetails("Howl's Moving Castle");
  titleDetails('Spirited Away');
  titleDetails('Violet Evergarden: The Movie');


// Part One Number 3

const addMovie = (title, description, year, genre, imdbRating) => {
    movies.push(movie = {title, description, year, genre, imdbRating});
}

addMovie("Paprika", 
"When a machine that allows therapists to enter their patients' dreams is stolen, all Hell breaks loose. Only a young female therapist, Paprika, can stop it.", 
2006, 
['Animation', 'Drama', 'Fantasy'], 
7.7);

addMovie("Tokyo Godfathers",
"On Christmas Eve, three homeless people living on the streets of Tokyo discover a newborn baby among the trash and set out to find its parents.",
2003,
['Animation', 'Adventure', 'Comedy'],
7.8);

console.log(movies);




