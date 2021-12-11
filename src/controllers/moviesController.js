const db = require("../database/models")

const moviesController = {
  list: (req, res) => {
    db.Movies.findAll()
      .then(movies => res.render("moviesList", {movies}))
      .catch(res.send("Oops! An error!!"))
  },

  detail: (req, res) => {
    db.Movies.findByPk(req.params.id)
      .then(movie => res.render("moviesDetail", {movie}))
      .catch(res.send("Oops! An error!!"))
  },

  new: (req, res) => {
    db.Movies.findAll({ order: [ ["release_date", "DESC"] ] })
      .then(movies => res.render("newestMovies", {movies}))
      .catch(res.send("Oops! An error!!"))
  },

  recommended: (req, res) => {
    db.Movies.findAll({
      order: [ ["rating", "DESC"] ],
      limit: 5,
    })
    .then(movies => res.render("necommendedMovies", {movies}))
    .catch(res.send("Oops! An error!!"))
  },
}


module.exports = moviesController