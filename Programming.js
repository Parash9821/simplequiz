const questions=[{
    question: "Which of the following is not a keyboard",
    answer: [
             {text: "int ", correct:false},
             {text: "char" ,correct:false},
             {text: "include", correct:true},
             {text: "float", correct:false},

    ]

},
{
     question: "Which datatype is used to store a character in C ?",
    answer: [
        { text:"char", correct:true},
        { text:"int", correct:false},
        { text:"float", correct:false},
        { text:"double", correct:false},
    ]

},
{
    question: "Which of the following is a valid identifier ",
    answer: [
        { text:"2ndName", correct:false},
        { text:"None of the above", correct:false},
        { text:"#name", correct:false},
        { text:"_name", correct:true},
    ]

},
{
    question: "What is the purpose of the printf() function in C ?",
    answer:[
      {text:"To print output",correct:true},
      {text:"To read input",correct:false},
      {text:"To perform calculation",correct:false},
      {text:"To control program flow",correct:false},
      
    ]

},];
const New_questions=document.getElementById("questions");
const answer_btn=document.getElementById("answer-buttons");
const next_btn=document.getElementById("nextbtn");
let Qindex=0;
let score=0;
function startQuiz(){
    Qindex=0;
    score=0;
    next_btn.innerHTML="next";
    Showquestion();

}

function Showquestion(){
    let CurrentQuestion = questions[Qindex];
    let questionNo = Qindex + 1;
    New_questions.innerHTML = questionNo + ". " + CurrentQuestion.question;
    answer_btn.innerHTML = "";
    CurrentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("bbb");
        answer_btn.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    });
}
function selectAnswer(e){
const selectBTN=e.target;
const isCorrect=selectBTN.dataset.correct==="true";
if(isCorrect){
    selectBTN.classList.add("correct");
    score++;
}
else{
    selectBTN.classList.add("incorrect")
}

Array.from(answer_btn.children).forEach(button =>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct")
    }
    button.disabled=true;
})
next_btn.style.display="block";
}
function showscore(){
    resetState();
    New_questions.innerHTML=`you scored ${score} out of ${questions.length}`;
    next_btn.innerHTML="play again";
    next_btn.style.display="block";
}
function handlenext_btn(){
    Qindex++
    if(Qindex<questions.length){
        Showquestion();
    }
    else{
        showscore();
    }
}
next_btn.addEventListener("click",()=>{
    if(Qindex<questions.length){
        handlenext_btn();
    }
    else{
        startQuiz();
    }
});
function resetState(){
next_btn.style.display="none";
while(answer_btn.firstChild){
    answer_btn.removeChild(answer_btn.firstChild);
}
}
startQuiz();