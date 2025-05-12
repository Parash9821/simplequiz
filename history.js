const questions=[{
    question: "During the first world war, which country signed the peace treaty(1917) with Germany",
    answer: [
             {text: "England", correct:false},
             {text: "USA" ,correct:false},
             {text: "Russia", correct:true},
             {text: "Austria", correct:false},

    ]

},
{
     question: "The last country of Axis power to surrender during the end of the world war II was ",
    answer: [
        { text:"Germany", correct:false},
        { text:"Japan", correct:true},
        { text:"Italy", correct:false},
        { text:"France", correct:false},
    ]

},
{
    question: "The second world war started in the year",
    answer: [
        { text:"1942", correct:false},
        { text:"1941 correct:false},
        { text:"1940", correct:false},
        { text:"1939", correct:true},
    ]

},
{
    question: "Who was the US President during the world war II ?",
    answer:[
      {text:"Winston Churchill",correct:false},
      {text:"Joseph Stalin",correct:false},
      {text:"Franklin D Roosevelt",correct:true},
      {text:"Harry S Truman",correct:false},
      
    ]

},
    {
    question: "When did Greco-Persian Wars end ?",
    answer:[
      {text:"460 BC",correct:false},
      {text:"447 BC Stalin",correct:false},
      {text:"449 BC",correct:true},
      {text:"424 BC",correct:false},
      
    ]

},             
                
                ];
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
