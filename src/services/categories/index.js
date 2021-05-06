const express = require("express");
const category = require("../../db").category;
const article = require("../../db").article;
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    const data = await category.findAll({ include: article });
    res.send(data);
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await category.create(req.body);
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  });
// router.route("/:studentId/:classId").post(async (req, res, next) => {
//   try {
//     const student = await Student.findByPk(req.params.studentId);
//     const result = await student.addClass(req.params.classId);
//     res.send(result);
//   } catch (error) {
//     console.log(error);
//   }
// });
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
