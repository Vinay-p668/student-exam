const express = require('express');
const router = express.Router();
const { getQuestions, submitExam } = require('../controllers/examController');
const protect = require('../middleware/authMiddleware');

router.get('/questions', protect, getQuestions);
router.post('/submit', protect, submitExam);

module.exports = router;