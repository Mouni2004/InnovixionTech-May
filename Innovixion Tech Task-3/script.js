const quizzes = {
    'Python': [
        {
            question: 'What is the keyword to define a function in Python?',
            options: ['func', 'def', 'function', 'define'],
            answer: 'def'
        },
        {
            question: 'Which of these is a mutable type?',
            options: ['tuple', 'list', 'string', 'integer'],
            answer: 'list'
        }
    ],
    'HTML': [
        {
            question: 'What does HTML stand for?',
            options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
            answer: 'Hyper Text Markup Language'
        },
        {
            question: 'Who is making the Web standards?',
            options: ['Google', 'Microsoft', 'Mozilla', 'The World Wide Web Consortium'],
            answer: 'The World Wide Web Consortium'
        }
    ]
};

let currentQuiz = 'Python';
let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();
});

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    const question = quizzes[currentQuiz][currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.innerText = question.question;
    quizContainer.appendChild(questionElement);

    question.options.forEach(option => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'option';
        
        radio.value = option;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));
        quizContainer.appendChild(label);
    });

    document.getElementById('next').style.display = 'inline-block';
    document.getElementById('submit').style.display = 'none';
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert('Please select an option');
        return;
    }

    const answer = selectedOption.value;
    if (answer === quizzes[currentQuiz][currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizzes[currentQuiz].length) {
        loadQuiz();
    } else {
        document.getElementById('next').style.display = 'none';
        document.getElementById('submit').style.display = 'inline-block';
    }
}

function submitQuiz() {
    document.getElementById('quiz').innerHTML = '';
    document.getElementById('result').innerText = `You scored ${score} out of ${quizzes[currentQuiz].length}`;
}
