const questions=[{
    question: "What do plants need to make food ?",
    answer: [
             {text: "Moonlight", correct:false},
             {text: "Electricity" ,correct:false},
             {text: "Sunlight", correct:true},
             {text: "Wind", correct:false},

    ]

},
{
    question: "Which part of the body helps us to breath ?",
    answer: [
        { text:"heart", correct:false},
        { text:"Lungs", correct:true},
        { text:"Brain", correct:false},
        { text:"Stomach", correct:false},
    ]

},
{
    question: "Which is the biggest planet ?",
    answer: [
        { text:"Mars", correct:false},
        { text:"Jupiter", correct:true},
        { text:"Earth", correct:false},
        { text:"Venus", correct:false},
    ]

},
{
    question: "Which object in the sky gives us light during the day ?",
    answer:[
      {text:"Moon",correct:false},
      {text:"Star",correct:false},
      {text:"Sun",correct:true},
      {text:"Cloud",correct:false},
      
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