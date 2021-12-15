const db = require("../database/models")

const moviesController = {
  list: (req, res) => {
    db.Movies.findAll()
      .then(movies => res.render("moviesList", {movies}))
      .catch(err => res.send("Oops! An error:", err))
  },

  detail: (req, res) => {
    db.Movies.findByPk(req.params.id)
      .then(movie => res.render("moviesDetail", {movie}))
      .catch(err => res.send("Oops! An error:", err))
  },

  new: (req, res) => {
    db.Movies.findAll({ order: [ ["release_date", "DESC"] ] })
      .then(movies => res.render("newestMovies", {movies}))
      .catch(err => res.send("Oops! An error:", err))
  },

  recommended: (req, res) => {
    db.Movies.findAll({
      order: [ ["rating", "DESC"] ],
      limit: 5,
    })
    .then(movies => res.render("recommendedMovies", {movies}))
    .catch(err => res.send("Oops! An error:", err))
  },
}


module.exports = moviesController