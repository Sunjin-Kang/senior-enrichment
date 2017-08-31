'use strict';
const router = require('express').Router();
const db = require('../../db');

const Students = db.models.User;
const Planets = db.models.Planet;



router.get('/', (req, res, next) => {
  Planets.findAll({
    include: {model: Students, as: 'students'},
    order: ['id']
  })
  .then((planets) => {
    if (!planets) {
      res.status(404)
    }
    res.status(200).json(planets)
  })
  .catch(next)
})

router.get('/:planetId', (req, res, next) => {
  Planets.findById(req.params.planetId)
  .then((planet) => {
    if (!planet) {
      res.status(404)
    }
    res.status(200).json(planet)
  })
  .catch(next)
})

router.post('/', (req, res, next) => {
  Planets.create(req.body)
  .then(planet => res.status(201).json(planet))
  .catch(next);
})

router.delete('/:planetId', (req, res, next) => {
  Planets.destroy({
    where: {
      id: req.params.planetId
    }
  })
  .then(() => res.sendStatus(204))
  .catch(next)
})

router.put('/:planetId', (req, res, next) => {
  Planetss.update(req.body, {
    where: {
      id: req.params.planetId
    }
  })
  .then(updated => Planets.findById(req.params.planetId))
  .then(planet => res.json(planet))
  .catch(next)
})

module.exports = router
