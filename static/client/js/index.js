(function initializeSubmitButton() {
    const submitButton = document.getElementById('submit-button');

    submitButton.onclick = async (e) => {
        e.preventDefault();

        const quizzesForm = document.getElementById('quizzes-form');

        let response = await fetch('http://localhost:5002/api/send-form', {
            method: 'POST',
            body: new FormData(quizzesForm),
        });

        let rightAnswersCount = await response.json();
        alert(`Количество правильных ответов: ${rightAnswersCount}`);
    };
})();