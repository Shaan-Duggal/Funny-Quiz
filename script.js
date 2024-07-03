const questions = [
    {
        question: "Why did the computer go to the doctor?",
        answers: [
            { text: "It had a virus", correct: false },
            { text: "It needed a byte", correct: true },
            { text: "It had a hardware issue", correct: false },
            { text: "It needed a software update", correct: false }
        ]
    },
    {
        question: "What do you call a programmer who doesn't comment their code?",
        answers: [
            { text: "A code ninja", correct: false },
            { text: "A code wizard", correct: false },
            { text: "A code poet", correct: false },
            { text: "A code comedian", correct: true }
        ]
    },
    {
        question: "Why did the developer go broke?",
        answers: [
            { text: "They spent all their money on coding books", correct: false },
            { text: "They invested in a failing startup", correct: false },
            { text: "They bought too many domain names", correct: false },
            { text: "They didn't refactor their code", correct: true }
        ]
    },
    {
        question: "What do you call a group of software engineers?",
        answers: [
            { text: "A code army", correct: false },
            { text: "A code squad", correct: false },
            { text: "A code gang", correct: false },
            { text: "A code cult", correct: true }
        ]
    },
    {
        question: "Why did the AI get a job at the bakery?",
        answers: [
            { text: "It wanted to learn how to bake cookies", correct: false },
            { text: "It wanted to improve its recipe recommendation algorithm", correct: false },
            { text: "It wanted to become a master of dough", correct: false },
            { text: "It kneaded the dough", correct: true }
        ]
    },
    {
        question: "What do you call a computer that sings?",
        answers: [
            { text: "A melody machine", correct: false },
            { text: "A singing server", correct: false },
            { text: "A vocal processor", correct: false },
            { text: "A Dell", correct: true }
        ]
    },
    {
        question: "Why did the developer go to therapy?",
        answers: [
            { text: "They had imposter syndrome", correct: false },
            { text: "They were burned out", correct: false },
            { text: "They had a bug in their code", correct: false },
            { text: "They couldn't resolve their merge conflicts", correct: true }
        ]
    },
    {
        question: "Why did the JavaScript developer go broke?",
        answers: [
            { text: "They lost their function", correct: false },
            { text: "They couldn't handle the async", correct: false },
            { text: "They spent all their money on promises", correct: false },
            { text: "They got caught in an infinite loop", correct: true }
        ]
    },
    {
        question: "What do you call a programmer who can't parallelize their code?",
        answers: [
            { text: "A sequential coder", correct: false },
            { text: "A single-threaded developer", correct: false },
            { text: "A non-concurrent programmer", correct: false },
            { text: "A serial killer", correct: true }
        ]
    },
    
    {
        question: "Why did the developer go to the beach?",
        answers: [
            { text: "To catch some waves", correct: false },
            { text: "To get some vitamin D", correct: false },
            { text: "To escape from bugs", correct: false },
            { text: "To surf the net", correct: true }
        ]
    },
    {
        question: "What's a programmer's favorite song?",
        answers: [
            { text: "Another One Bites the Dust", correct: false },
            { text: "Don't Stop Believin'", correct: false },
            { text: "The Final Countdown", correct: false },
            { text: "Hello World", correct: true }
        ]
    },
   
    {
        question: "What's a programmer's favorite type of coffee?",
        answers: [
            { text: "Java", correct: false },
            { text: "Cappuccino", correct: false },
            { text: "Mocha", correct: false },
            { text: "Code Brew", correct: true }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButtons = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButtons.innerHTML = "Next";
    showQuestions();
}

function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1; 
    questionElement.innerText = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetState(){
    nextButtons.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButtons.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerText = "Your score is " + score + " out of " + questions.length;
    nextButtons.innerHTML = "Restart";
    nextButtons.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }
    else{
        showScore();
    }
}

nextButtons.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
}
)

startQuiz();
