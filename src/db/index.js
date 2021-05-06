const { Sequelize, DataTypes } = require("sequelize");
const article = require("./articles");
const review = require("./reviews");
const category = require("./categories");
const author = require("./authors");

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  { port: process.env.PGPORT, host: process.env.PGHOST, dialect: "postgres" }
);

const models = {
  article: article(sequelize, DataTypes),
  review: review(sequelize, DataTypes),
  category: category(sequelize, DataTypes),
  author: author(sequelize, DataTypes),
  sequelize: sequelize,
};

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

// article.hasMany(review);
// review.belongsTo(article);

// category.hasMany(article);
// article.belongsTo(category);

// author.belongsToMany(article, { through: "AuthorArticle", timestamps: false });

// article.belongsToMany(author, { through: "StudentClass", timestamps: false });
// Tutor.belongsToMany(Class, { through: "TutorClass", timestamps: false });
// Class.belongsToMany(Tutor, { through: "TutorClass", timestamps: false });

sequelize
  .authenticate()
  .then(() => console.log("Connection established"))
  .catch((e) => console.log("Connection failed ",  e));

module.exports = models;
