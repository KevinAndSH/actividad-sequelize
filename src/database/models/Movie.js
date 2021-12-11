module.exports = (sequelize, dataTypes) => {
  const Movie = sequelize.define("Movies", {
    id: {
      type: dataTypes.INTEGER(10),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    created_at: {
      type: dataTypes.DATE,
    },

    updated_at: {
      type: dataTypes.DATE,
    },

    title: {
      type: dataTypes.STRING(500),
      allowNull: false,
    },

    rating: {
      type: dataTypes.DECIMAL(3, 1),
      allowNull: false,
    },

    awards: {
      type: dataTypes.INTEGER(10),
      allowNull: false,
    },

    release_date: {
      type: dataTypes.DATE,
    },
    
    length: {
      type: dataTypes.INTEGER(10),
      allowNull: false,
    },

    genre_id: {
      type: dataTypes.INTEGER(10),
      allowNull: false,
    },
  },
  {
    tableName: "movies"
  })

  return Movie
}