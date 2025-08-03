const API_URL = 'http://localhost:2800/api/exam';
let questions = [];
let currentQuestionIndex = 0;
let answers = [];
let timerInterval;

const fetchQuestions = async () => {
  try {
    const res = await fetch(`${API_URL}/questions`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    if (!res.ok) throw new Error('Unauthorized');
    questions = await res.json();
    answers = new Array(questions.length).fill(null);
    displayQuestion();
    startTimer();
  } catch (error) {
    alert('Error fetching questions');
    window.location.href = '/';
  }
};

const displayQuestion = () => {
  const container = document.getElementById('questionContainer');
  const question = questions[currentQuestionIndex];
  container.innerHTML = `
    <h3 class="mb-4">${question.text}</h3>
    ${question.options
      .map(
        (option, i) => `
      <div class="mb-2">
        <input type="radio" name="option" id="option${i}" value="${option}" ${
          answers[currentQuestionIndex] === option ? 'checked' : ''
        }>
        <label for="option${i}">${option}</label>
      </div>`
      )
      .join('')}
  `;
  document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
  document.getElementById('nextBtn').classList.toggle('hidden', currentQuestionIndex === questions.length - 1);
  document.getElementById('submitBtn').classList.toggle('hidden', currentQuestionIndex !== questions.length - 1);
};

const startTimer = () => {
  let timeLeft = 30 * 60; // 30 minutes
  timerInterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      submitExam();
    }
  }, 1000);
};

const submitExam = async () => {
  clearInterval(timerInterval);
  try {
    const res = await fetch(`${API_URL}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ answers }),
    });
    const data = await res.json();
    localStorage.setItem('examResults', JSON.stringify(data));
    window.location.href = '/result';
  } catch (error) {
    alert('Error submitting exam');
  }
};

document.getElementById('prevBtn').addEventListener('click', () => {
  const selected = document.querySelector('input[name="option"]:checked');
  if (selected) answers[currentQuestionIndex] = selected.value;
  currentQuestionIndex--;
  displayQuestion();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  const selected = document.querySelector('input[name="option"]:checked');
  if (selected) answers[currentQuestionIndex] = selected.value;
  currentQuestionIndex++;
  displayQuestion();
});

document.getElementById('submitBtn').addEventListener('click', submitExam);

fetchQuestions();