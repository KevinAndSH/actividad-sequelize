const db = require("../database/models")

const genresController = {
  list: (req, res) => {
    db.Genres.findAll()
      .then(genres => res.render("genresList", {genres}))
      .catch(err => res.send("Oops! An error: " + err))
  },

  detail: (req, res) => {
    db.Genres.findByPk(req.params.id)
      .then(genre => res.render("genresDetail", {genre}))
      .catch(err => res.send("Oops! An error: " + err))
  }
}


module.exports = genresController