const express = require('express');
const router = express.Router();
const { fridayController } = require('../controller');

const {
    getAll,
    createMeet,
    clearMeet,
} = fridayController;

router.get('/get', getAll);
router.post('/create-meet/:id', createMeet);
router.delete('/clear-meet/:id', clearMeet);

module.exports = router;
