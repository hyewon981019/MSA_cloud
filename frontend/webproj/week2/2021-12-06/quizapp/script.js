const quizData = [					//배열
    {								 //객체
        "question": "넓은 의미의 HTML5에 포함되지 않는 것은?", 
        "a": "HTML5", 
        "b": "CSS3", 
        "c": "JavaScript", 
        "d": "Java", 
        "correct": "d",
    }, 
    {
        question: "문제2내용", 
        a: "보기1", 
        b: "보기2", 
        c: "보기3", 
        d: "보기4", 
        correct: "d",
    }, 
    {
        question: "문제3내용", 
        a: "보기1", 
        b: "보기2", 
        c: "보기3", 
        d: "보기4", 
        correct: "d",
    }        
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz()
{
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];
    console.log(currentQuizData);

    questionE1.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected()
{
    let answerNo;

    answerEls.forEach(ans =>
        {
            if(ans.checked)
            {
                answerNo = ans.id;
            }
        })

    return answerNo;
}

function deselectAnswers()
{
    answerEls.forEach(ans => {
        ans.checked = false;
    })
}

let score = 0;

submitBtn.addEventListener("click", ()=> {
    const answer = getSelected();

    if(answer)
    {
        if(answer === quizData[currentQuiz].correct)
        {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length)
        {
            loadQuiz();
        }

        else{
            quiz.innerHTML = `
                <h2>당신은 전체 ${quizData.length} 문제중 ${score} 문제를 맞혔습니다.</h2>
                <button onclick="location.reload()">다시 문제 플이</button>
            `
        }
    }
})