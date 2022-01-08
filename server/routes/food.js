const router = require('express').Router();
const Food = require('../models/food.model');

router.post('/', (req, res) => {
    const food = new Food({
        username: req.body.username,
        name: req.body.name,
        calories: req.body.calories,
        date: req.body.date
    });

    food.save().then((food) => res.status(200).send(food)).catch(err => res.status(400).send(err));
});

router.get('/', (req, res) => {
    Food.find().select('-__v').then((foods) => res.status(200).send(foods)).catch(err => res.status(400).send(err));
});

router.get('/:id', (req, res) => {
    Food.findById(req.params.id).then(a => res.status(200).send(a)).catch(err => res.status(404).send(err));
})

router.delete('/:id', (req, res) => {
    Food.findByIdAndDelete(req.params.id).then(a => res.status(200).send(a)).catch(err => res.status(404).send(err));
});

router.put('/:id', (req, res) => {
    Food.findByIdAndUpdate(req.params.id, req.body.food, {new: true}).then(a => res.status(200).send(a)).catch(err => res.status(404).send(err));
});

module.exports = router;
