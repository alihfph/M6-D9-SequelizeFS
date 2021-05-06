const express = require("express");
const article = require("../../db").article;
const category = require("../../db").category;
// const Module = require("../../db").Module;
// const Tutor = require("../../db").Tutor;
// const Student = require("../../db").Student;
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await article.findAll(
        // { include: Tutor },
        // { include: Student }
        { include: category }
      );
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await article.create(req.body);
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .put(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  });

module.exports = router;
