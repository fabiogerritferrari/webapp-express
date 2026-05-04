const connection = require('../data/db');

function index(req, res) {

    const movies = 'SELECT * FROM movies';

    connection.query(movies, (err, results) => {
        err && res.status(500).json({ error: 'database query failed' });
        res.json(results)
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