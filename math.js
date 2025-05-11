const questions=[{
    question: " What is the Value of  PI ?",
    answer: [
             {text: "22/7", correct:true},
             {text: "22/6" ,correct:false},
             {text: "3.41", correct:false},
             {text: "3.15", correct:false},

    ]

},
{
    question: "4/4 equals to ",
    answer: [
        { text:"1", correct:true},
        { text:"2", correct:false},
        { text:"3", correct:false},
        { text:"4", correct:false},
    ]

},
{
    question: "2*2 equals to ",
    answer: [
        { text:"1", correct:false},
        { text:"2", correct:false},
        { text:"3", correct:false},
        { text:"4", correct:true},
    ]

},
{
    question: "what is the Value of i^2",
    answer:[
      {text:"-1",correct:true},
      {text:"1",correct:false},
      {text:"2",correct:false},
      {text:"3",correct:false},
      
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