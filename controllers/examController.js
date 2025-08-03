const Question = require('../models/Question');

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find().limit(5).lean();
    const shuffled = questions.sort(() => 0.5 - Math.random());
    res.json(shuffled);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions', error });
  }
};

exports.submitExam = async (req, res) => {
  const { answers } = req.body;
  try {
    const questions = await Question.find().lean();
    let score = 0;
    const total = questions.length;
    const results = questions.map((q, index) => {
      const userAnswer = answers[index];
      const isCorrect = userAnswer === q.correctAnswer;
      if (isCorrect) score++;
      return {
        question: q.text,
        userAnswer,
        correctAnswer: q.correctAnswer,
        isCorrect,
      };
    });
    res.json({ score, total, results });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting exam', error });
  }
};