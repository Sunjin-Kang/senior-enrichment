'use strict';
const router = require('express').Router();
const db = require('../../db');

const Students = db.models.User;
const Planets = db.models.Planet;


router.get('/', (req, res, next) => {
  Students.findAll({
    include: {model: Planets, as: 'planet'},
    order: ['id']
  })
  .then((students) => {
    if (!students) {
      res.status(404)
    }
    res.status(200).json(students)
  })
  .catch(next)
})

router.get('/:studentId', (req, res, next) => {
  Students.findById(req.params.studentId)
  .then((student) => {
    if (!student) {
      res.status(404)
    }
    res.status(200).json(student)
  })
  .catch(next)
})


router.post('/', (req, res, next) => {
  Students.create(req.body)
  .then(student => res.status(201).json(student))
  .catch(next);
})

router.delete('/:studentId', (req, res, next) => {
  Students.destroy({
    where: {
      id: req.params.studentId
    }
  })
  .then(() => res.sendStatus(204))
  .catch(next)
})

router.put('/:studentId', (req, res, next) => {
  Students.update(req.body, {
    where: {
      id: req.params.studentId
    }
  })
  .then(updated => Students.findById(req.params.studentId))
  .then(student => res.json(student))
  .catch(next)
})

module.exports = router
