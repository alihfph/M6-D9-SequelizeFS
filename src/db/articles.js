const { author } = require(".");

module.exports = (sequelize, DataTypes) => {
  const article = sequelize.define(
    "article",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      topic: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  article.associate = (models) => {
    article.hasMany(models.review);
    article.belongsTo(models.author);
    article.belongsTo(models.category);
  };
  return article;
};
