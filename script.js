let questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "A. HyperText Markup Language",
            "B. HyperText Transfer Protocol",
            "C. Cascading Style Sheets",
            "D. JavaScript"
        ],
        answer: 0
    },

    {
        question: "Which language is used to style a webpage?",
        options: [
            "A. Python",
            "B. CSS",
            "C. SQL",
            "D. Java"
        ],
        answer: 1
    }
];

let currentQuestionIndex = 0;

let currentQuestion = questions[currentQuestionIndex];


console.log("Quiz app is working!");

let questionElement = document.getElementById("question");

console.log(questionElement);

questionElement.textContent = currentQuestion.question;


let optionElements = document.querySelectorAll(".option");

console.log(optionElements);

optionElements[0].textContent = currentQuestion.options[0];
optionElements[1].textContent = currentQuestion.options[1];
optionElements[2].textContent = currentQuestion.options[2];
optionElements[3].textContent = currentQuestion.options[3];


let nextButton = document.getElementById("nextButton");

console.log(nextButton);

nextButton.addEventListener("click", function() {

    if (currentQuestionIndex < questions.length - 1) {

        currentQuestionIndex = currentQuestionIndex + 1;

        currentQuestion = questions[currentQuestionIndex];

        questionElement.textContent = currentQuestion.question;

    }

});