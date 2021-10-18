const router = require('express').Router();
let Service = require('../models/service.model');

router.route('/').get((req, res) => {
    Service.find()
        .then(services => res.json(services))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const servicename = req.body.servicename;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newService = new User({
        servicename,
        description,
        duration,
        date,
    });

    newService.save()
        .then(() => res.json('Service added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;