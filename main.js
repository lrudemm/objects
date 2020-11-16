const ol = document.querySelector("ol");
const movies = [
    {
      name: "Django Unchained",
      year: 2012,
      director: "Quentin Tarantino",
      picture: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
    },
    {
      name: "Pulp Fiction",
      year: 1994,
      director: "Quentin Tarantino",
      picture: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
    },
    {
      name: "Star Wars: A New Hope",
      year: 1977,
      director: "George Lucas",
      picture: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
      name: "La La Land",
      year: 2016,
      director: "Damien Chazelle",
      picture: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png",
    },
    {
      name: "Casino Royale",
      year: 2006,
      director: "Martin Campbell",
      picture: "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
];

const template = movies.map(movie => `
    <li>
        <p>Name: ${movie.name}</p>
        <p>Year: ${movie.year}</p>
        <p>Director: ${movie.director}</p>
        <img src="${movie.picture}" width="200">
    </li>
`);

ol.innerHTML = template.join('');

