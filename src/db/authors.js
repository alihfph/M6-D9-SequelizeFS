module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define("author", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  author.associate = (models) => {
    author.hasMany(models.article)
  };
  return author;
};
