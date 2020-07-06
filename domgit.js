const ul = document.querySelector("ul");


const movies = [
    {
      name: "The avengers",
      year: 2012,
      director: "Joss Whedon",
      poster: "avengersmovie.jpg"
    },
    {
        name: "Avengers age of Ultron",
        year: 2015,
        director: "Joss Whedon",
        poster: "avengersmovie2.jpeg"
    },
    {
        name: "Avengers: Infinity War",
        year: 2018,
        director: "Anthony Russo, Joe Russo",
        poster: "avengersmovie3.jpg"
    },
    {
        name: "Avengers: Endgame",
        year: 2019,
        director: "Anthony Russo, Joe Russo",
        poster: "avengersmovie4.jpg"
    },
    {
        name: "Thor: Ragnarok",
        year: 2017,
        director: "taika Waititi",
        poster: "thormovie.jpg"
    },
];
const li = `
    <li>
        <p>Name: ${movies[0].name}</p>
        <p>year: ${movies[0].year}</p>
        <p>director: ${movies[0].director}</p>
        <p>poster: ${movies[0].poster}</p>
        </li>
`
const template = movies.map(movies => `
<li>
        <p>Name: ${movies.name}</p>
        <p>year: ${movies.year}</p>
        <p>director: ${movies.director}</p>
        <p>poster: ${movies.poster}</p>
</li>
`);
ul.innerHTML = template.join('');