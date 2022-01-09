const router = require('express').Router();
const User = require('../models/use.model');

// Pravimo rutu gde se upisuju podaci korisnika u bazu

router.post('/', (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });

    user.save().then((user) => res.status(200).send(user)).catch(err => res.status(400).send(err));
});

router.post('/login', (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
    });

    //user.save().then((user) => res.status(200).send(user)).catch(err => res.status(400).send(err));

    User.find().select('-_id').then((users) => res.status(200).send(users)).catch(err=>res.status(400).send(err));
});

router.get('/', (req, res) => {
    User.find().select('username -_id').then((users) => res.status(200).send(users)).catch(err => res.status(400).send(err));
})

module.exports = router;
