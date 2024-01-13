// Quiz data
const quizData = [
    {
        question: "x+y-(y-x) denotes ?",
        choices: ["0", "2x", "-2x", "1"],
        correctAnswer: 1
    },
    {
        question: "what is the part of oop concept in the following ?",
        choices: ["virtual function", "pointer", "abstraction", "friend function",],
        correctAnswer: 2
    },
    {
        question: "pointer stores ?",
        choices: ["value", "address", "null", "none of them"],
        correctAnswer: 1
    }
];

let currentQuestion = 0;
let score = 0;
const questionContainer = document.getElementById('question-container');
const choicesContainer = document.getElementById('choices-container');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');

function loadQuestion() {
    const question = quizData[currentQuestion].question;
    const choices = quizData[currentQuestion].choices;

    questionContainer.textContent = question;
    choicesContainer.innerHTML = '';

    for (let i = 0; i < choices.length; i++) {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'choice';
        input.value = i;

        const label = document.createElement('label');
        label.appendChild(input);
        label.appendChild(document.createTextNode(choices[i]));

        choicesContainer.appendChild(label);
    }
}

function submitAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');

    if (!selectedChoice) {
        return;
    }

    const selectedAnswer = parseInt(selectedChoice.value);

    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion === quizData.length) {
        showResult();
    } else {
        loadQuestion();
    }
}

function showResult() {
    questionContainer.style.display = 'none';
    choicesContainer.style.display = 'none';
    submitBtn.style.display = 'none';
    
    resultContainer.textContent = `You scored ${score} out of ${quizData.length}.`;
    if(score==quizData.length){
        resultContainer.textContent=`Congratulations!! You win : your score is ${score} out of ${quizData.length}.`;  
    }
    else{
        resultContainer.textContent=` Sorry!! You lose : your score is ${score} out of ${quizData.length}.`; 
    }
}


// Load initial question
loadQuestion();

// Event listeners
submitBtn.addEventListener('click', submitAnswer);
