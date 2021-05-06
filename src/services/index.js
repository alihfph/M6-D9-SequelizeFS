const route = require("express").Router();

const articlesRoute = require("./articles");
const authorsRoute = require("./authors");
const categoriesRoute = require("./categories");
const reviewsRoute = require("./tutors");
route.use("/articles", articlesRoute);
route.use("/authors", authorsRoute);
route.use("/categories", categoriesRoute);
route.use("/reviews", reviewsRoute);
module.exports = route;
