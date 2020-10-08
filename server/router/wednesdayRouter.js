const express = require('express');
const router = express.Router();
const { wednesdayController } = require('../controller');

const {
    getAll,
    createMeet,
    clearMeet,
} = wednesdayController;

router.get('/get', getAll);
router.post('/create-meet/:id', createMeet);
router.delete('/clear-meet/:id', clearMeet);

module.exports = router;
