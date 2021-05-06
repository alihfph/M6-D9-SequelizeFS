module.exports = (sequelize, DataTypes) => {
  const reviews = sequelize.define("reviews", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    starts_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ends_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  reviews.associate = (models) => {
    reviews.belongsTo(models.article);
  };

  return reviews;
};
