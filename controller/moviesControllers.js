const connection = require('../data/db');

function index(req, res) {

    const sqlMovies = 'SELECT * FROM movies';


    connection.query(sqlMovies, (err, results) => {
        err && res.status(500).json({ error: 'database query failed' });

        const movies = results.map((movie) => {
            return {
                ...movie,
                image: req.imagePath + movie.image
            }
        })

        res.json(movies)
    })
}

function show(req, res) {
    const id = parseInt(req.params.id);

    const movieSql = 'SELECT * FROM movies WHERE id = ?';

    const reviews = 'SELECT * FROM reviews WHERE movie_id= ?';

    connection.query(movieSql, [id], (err, results) => {
        err && res.status(500).json({ error: 'database query failed' });
        const movie = results[0];

        movie.image = req.imagePath + movie.image

        connection.query(reviews, [id], (err, reviewsResults) => {
            movie.reviews = reviewsResults;
            res.json(movie);
        })
    })

}

module.exports = { index, show };