let count = 1;
// -----------------------------------FUNCTION------------------------------------

function defaultAddQuestionBox() {
    let questionLabel = document.getElementById("add-question-textarea-label");
    let addQuestionNameLabel = document.getElementById("add-question-name-label");
    addQuestionNameLabel.style.position = "absolute";
    addQuestionNameLabel.style.color = "black";
    questionLabel.style.position = "absolute";
    questionLabel.style.color = "black";


}

function addQuestionTransition() {
    let questionTextarea = document.getElementById("add-question-textarea");
    let addQuestionNameInput = document.getElementById("add-question-name-input");
    questionTextarea.addEventListener("focus", () => {
        let questionLabel = document.getElementById("add-question-textarea-label");
        questionLabel.style.position = "static";
        questionLabel.style.color = "#1a73e8";
    })

    questionTextarea.addEventListener("blur", () => {
        let questionLabel = document.getElementById("add-question-textarea-label");
        if (questionTextarea.value == undefined || questionTextarea.value.length == 0) {
            questionLabel.style.position = "absolute";
            questionLabel.style.color = "black";
        }
    })

    addQuestionNameInput.addEventListener("click", () => {
        let addQuestionNameLabel = document.getElementById("add-question-name-label");
        addQuestionNameLabel.style.position = "static";
        addQuestionNameLabel.style.color = "#1a73e8";
    })

    addQuestionNameInput.addEventListener("blur", () => {
        let addQuestionNameLabel = document.getElementById("add-question-name-label");
        if (addQuestionNameInput.value == undefined || addQuestionNameInput.value.length == 0) {
            addQuestionNameLabel.style.position = "absolute";
            addQuestionNameLabel.style.color = "black";
        }
    })
}
function showResponse() {
    
    let showResposeBtn = document.getElementsByClassName("left");
    
    Array.from(showResposeBtn).forEach((element, index) => {
        element.addEventListener("click", () => {

            let answerBox = document.getElementById(`answer-box${index}`);


            if (answerBox.style.display == "block") {
                answerBox.style.display = "none";
                element.innerHTML = "View Answers"
            }
            else {
                answerBox.style.display = "block";
                element.innerHTML = "Hide Answers"

            }
        })
    })
    
}
function loginSigninForm() {
    document.getElementById("login-btn").addEventListener("click", () => {
        document.getElementById("login-box").style.display = "flex";
    })
    document.getElementById("cross").addEventListener("click", () => {
        document.getElementById("login-box").style.display = "none";
    })

    document.getElementById("signup-btn").addEventListener("click", () => {
        document.getElementById("signup-box").style.display = "flex";
    })
    document.getElementById("cross2").addEventListener("click", () => {
        document.getElementById("signup-box").style.display = "none";
    })
}
function addQuestion() {
    let questionTextarea = document.getElementById("add-question-textarea");
    let addQuestionNameInput = document.getElementById("add-question-name-input");
    let string = `<div class="questions">
    <div class="profile">
        <img src="img/avatar.png" alt="" class="profile-image">
        <h3>${addQuestionNameInput.value}</h3>
    </div>
    <div class="content">

        <p class="caption">${questionTextarea.value}</p>

    </div>
    <div class="response">
        <p class="left">View Answers</p>
        
        <p class="right" id="right${count}">Answers(0)</p>
        <div class="clearfix">
        
        </div>
    </div>
    <div class="answer-box" id="answer-box${count}">
        <p>Answers:</p>
        <div id="comment${count}" class="comment"></div>
        
        <div class="add-answer-div">

                        <span class="add-answer">Add Answer</span>
                    </div>
        <div class="add-answer-box" id="add-answer-box${count}">

        <div id="form">
            <div>
                
                <input type="text"  placeholder="Username" id="name${count}">
            </div>
            <div>
                
                <input type="text" placeholder="Answer" id="answer${count}">
            </div>
            <button class="button post-answer-button">
                Post answer
            </button>
        </div>
    </div>


    </div>
    
    
</div>`

    let questionBox = document.getElementById("question-box-area");

    if (addQuestionNameInput.value.length == 0 || questionTextarea.value.length == 0)
        alert("You have to provide the information to add question");

    else
        questionBox.innerHTML += string;

    questionTextarea.value = "";
    addQuestionNameInput.value = "";

    defaultAddQuestionBox();
    count = count + 1;
    showResponse();
    isAnyAnswer();
    addAnswerTransition();
    addAnswer();
    addingHamberger();
    addingEventListenerToLoginForm();

}
function updateNoOfAnswers()
{
    console.log("inside update");
    let comment = document.getElementsByClassName("comment");
    let array,counter,right;
    Array.from(comment).forEach((element,index)=>{
        // console.log(element.innerHTML[53]);
        counter = 0;
        for(var i=0;element.innerHTML[i]!=undefined;i++)
        {
            if(element.innerHTML[i] == '/' && element.innerHTML[i+1] == 'p' )
            {
                counter = counter + 1;
            }

        }
        console.log(counter);
        right = document.getElementById(`right${index}`);
        right.innerHTML = `Answer(${counter})`;
    })
}
function addAnswerTransition() {
    let addAnswerBtn = document.getElementsByClassName("add-answer");

    Array.from(addAnswerBtn).forEach((element, index) => {
        element.addEventListener("click", () => {

            let addAnswerForm = document.getElementById(`add-answer-box${index}`);
            if (addAnswerForm.style.display == "block") {
                addAnswerForm.style.display = "none";

            }
            else
                addAnswerForm.style.display = "block";
        })
    })
}
function isAnyAnswer() {
    
    let comment = document.getElementsByClassName("comment");
    Array.from(comment).forEach((element)=>{
        if(!element.innerHTML.includes(`<div class="answers">`))
        {
            element.innerHTML = `<div style="padding-left:40px;">No Answer yet! </div>`
        }

    })
    
    //     // let answers = document.getElementsByClassName("answers");
    //     // let noOfComments = 0;
    //     // Array.from(answers).forEach(() => {
    //     //     noOfComments = noOfComments + 1;
    //     // })
    //     // let right = document.getElementById(`right${index}`);
    //     // right.innerHTML = `Answer(${noOfComments})`; 
    // })
}
function addAnswer() {
    let postAnswerButton = document.getElementsByClassName("post-answer-button");
    let string="";
    
    Array.from(postAnswerButton).forEach((element,index)=>{
        let name = document.getElementById(`name${index}`);
        let answer = document.getElementById(`answer${index}`);
        let comment = document.getElementById(`comment${index}`);
        element.addEventListener("click",()=>{
    console.log("inside addanswer");
        
        if(name.value.length == 0||answer.value.length == 0)
        {
            alert("You need to add information to add an answer!");
        }
        else{

        
            if(comment.innerHTML.includes("No Answer yet"))
                comment.innerHTML = "";
           comment.innerHTML +=  `<div class="answers">
                     <div class="answer-profile">
                         <img src="img/avatar.png" alt="">
                         <p>${name.value}</p>
                     </div>
                     <div class="answer-content">
                         ${answer.value}
                     </div>
                    </div>`
        updateNoOfAnswers();
        }
            name.value = "";
            answer.value = "";
            
        })
    })
}
function addingHamberger()
{
    let hamberger = document.getElementById("hamberger");
hamberger.addEventListener("click",()=>{
    let header = document.getElementById("header");
    console.log(header);
    if(header.style.height == "60px")
    {
       
        header.style.overflow = "visible";
        header.style.height = "auto";
    }
    else
    {
        header.style.height = "60px";
        header.style.overflow = "hidden"
    }
    
})
}
function addingEventListenerToLoginForm()
{
    let insideLoginButton = document.getElementById("inside-login-button");
insideLoginButton.addEventListener("click",(e)=>{
e.preventDefault();
alert("Sorry the Backend is not working!");
document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("password").value = "";
document.getElementById("login-box").style.display = "none";
})
let insideSignupButton = document.getElementById("inside-signup-button");
insideSignupButton.addEventListener("click",(e)=>{
e.preventDefault();
alert("Sorry the Backend is not working!");
document.getElementById("name2").value = "";
document.getElementById("email2").value = "";
document.getElementById("set-password").value = "";
document.getElementById("confirm-password").value = "";
document.getElementById("signup-box").style.display = "none";
})
}
// ----------------------OPENING OF ADD QUESTION TRANSITION-----------------------

addQuestionTransition();

// -----------------CLOSING OF ADD QUESTION TRANSITION--------------------------
// ----------------------------OPENING OF LOGIN  FORM---------------------------

loginSigninForm();

// ----------------------------CLOSING OF LOGIN  FORM---------------------------



// -------------------------OPENING OF ADDING  QUESTION-------------------------

let addQuestionBtn = document.getElementById("add-question-btn");
addQuestionBtn.addEventListener("click", addQuestion);

// -------------------------CLOSING OF ADDING  QUESTION-------------------------
isAnyAnswer();

showResponse();
addAnswerTransition();
addAnswer();
updateNoOfAnswers();
// -------------------------OPENING OF ADDING  ANSWER-------------------------



// -------------------------CLOSING OF ADDING  ANSWER-------------------------

addingEventListenerToLoginForm();

// adding hamberger 
addingHamberger();



