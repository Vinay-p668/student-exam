const results = JSON.parse(localStorage.getItem('examResults'));

document.getElementById('score').textContent = `${results.score} / ${results.total}`;
document.getElementById('resultsContainer').innerHTML = results.results
  .map(
    (result, i) => `
  <div class="mb-4">
    <p><strong>Question ${i + 1}:</strong> ${result.question}</p>
    <p>Your Answer: ${result.userAnswer || 'Not answered'}</p>
    <p>Correct Answer: ${result.correctAnswer}</p>
    <p class="${result.isCorrect ? 'text-green-500' : 'text-red-500'}">${
      result.isCorrect ? 'Correct' : 'Incorrect'
    }</p>
  </div>`
  )
  .join('');