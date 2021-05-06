const express = require("express");
const Tutor = require("../../db").Tutor;
const Student = require("../../db").Student;
const Class = require("../../db").Class;
const { Op, Sequelize } = require("sequelize");
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    const data = await Tutor.findAll({
      include: {
        model: Class,
        include: { model: Student },
      },
    });
    res.send(data);
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Tutor.create(req.body);
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  });
router
  .route("/search")
  .get(async (req, res, next) => {
    const data = await Tutor.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: "%" + req.query.name + "%" } },
          {
            classes: Sequelize.where(Sequelize.col(`"classes".topic`), {
              [Op.iLike]: "%" + req.query.className + "%",
            }),
          },
        ],
      },
      include: {
        model: Class,
        include: { model: Tutor, through: { attributes: [] } },
      },
    });
    res.send(data);
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Tutor.create(req.body);
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  });
router.route("/:tutorId/classes/:classId").post(async (req, res, next) => {
  try {
    const tutorr = await Tutor.findByPk(req.params.tutorId);
    const result = await tutorr.addClass(req.params.classId);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});
router
  .route("/:id")
  .get(async (req, res, next) => {
    const data = await Tutor.findByPk(req.params.id, {
      include: Class,
    });
    res.send(data);
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .put(async (req, res, next) => {
    const data = await Tutor.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    console.log(data);
    res.send(data[1][0]);
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const data = await Tutor.destroy({ where: { id: req.params.id } });
      console.log(data);
      if (data > 0) {
        res.send("ok");
      } else {
        res.status(404).send("Not Found");
      }
    } catch (e) {
      console.log(e);
    }
  });

module.exports = router;
