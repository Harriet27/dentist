const express = require('express');
const router = express.Router();
const { saturdayController } = require('../controller');

const {
    getAll,
    createMeet,
    clearMeet,
} = saturdayController;

router.get('/get', getAll);
router.post('/create-meet/:id', createMeet);
router.delete('/clear-meet/:id', clearMeet);

module.exports = router;
