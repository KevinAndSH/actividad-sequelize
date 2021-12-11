const db = require("../database/models")

const genresController = {
  list: (req, res) => {
    db.Genres.findAll()
      .then(genres => res.render("genresList", {genres}))
      .catch(res.send("Oops! An error!!"))
  },

  detail: (req, res) => {
    db.Genres.findByPk(req.params.id)
      .then(genre => res.render("genresDetail", {genre}))
      .catch(res.send("Oops! An error!!"))
  }
}


module.exports = genresController