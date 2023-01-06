const quizData = [
    {
        question: "1] WHICH OF THE FOLLOWING IS NOT A DATABASE MANAGEMENT SYSTEM?",
        a: "A] MySQL",
        b: "B] Sybase",
        c: "C] Oracle",
        d: "D] COBOL",
        correct: "d",
    },
    {
        question: "2] WHICH CHARACTER IS USED TO INDICATE AN END TAG?",
        a: "A] <",
        b: "B] ^",
        c: "C] /",
        d: "D] *",
        correct: "c",
    },
    {    
        question: "3] WHICH ONE PROGRAMMING LANGUAGE IS EXCLUSIVELY USED FOR ARTIFICIAL INTELLIGENCE",
        a: "A] Prolog",
        b: "B] Java",
        c: "C] C",
        d: "D] JZEE",
        correct: "a",
    },
    {
        question: "4] MAC OPERATING SYSTEM IS DEVELOPED BY WHICH COMPANY?",
        a: "A] IBM",
        b: "B] Apple",
        c: "C] Microsoft",
        d: "D] Samsung",
        correct: "b",
    },
    {
        question: "5] WHICH ONE IS THE FIRST WAB BROWSER INVETED IN 1990",
        a: "A] Nexus",
        b: "B] Internet Explorer",
        c: "C] Mosaic",
        d: "D] Mozilla",
        correct: "a",
    },
    {
        question: "6] WHICH OF THE FOLLOWING PROGRAMMING LANGUAGE IS USED TO CREATE PROGRAMS LIKE APLETES?",
        a: "A] COBOL",
        b: "B] C-Language",
        c: "C] Java",
        d: "D] Basic ",
        correct: "c",
    },
    {

        question: "7] FIRST COMPUTER VIRUS IS KNOWN AS?",

        a: "A] Creeper Virus",
        b: "B] Rabbit",
        c: "C] Elk Cloner",
        d: "D]  SCA Virus",
        correct: "a",
    },
    {

        question: "8] WHICH OF THE FOLLOWING IS NOT AN OPERATING SYSTEM?",

        a: "A] DOS",
        b: "B] C",
        c: "C] Mac",
        d: "D] Linux",
        correct: "b",
    },
    {

        question: "9] WHICH ONE IS THE FIRST SEARCH ENGINE IN INTERNET?",

        a: "A] Google",
        b: "B] Altavista",
        c: "C] WAIS",
        d: "D]  Archie",
        correct: "d",
    },
    {

        question: "10] FIREWALL IN COMPUTER IS USED FOR?",
      
        a: "A] Security",
        b: "B] Data Transmission",
        c: "C] Authentication",
        d: "D] Monitoring",
        correct: "a",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>OUT OF 10 QUESTIONS / CORRECT SCORE IS ${score}</h2>
           <button onclick="location.reload()">RELOAD</button>
           `
       }
    }
})