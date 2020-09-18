
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
        header.style.overflow = "hidden";
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
loginSigninForm();
addingHamberger();
addingEventListenerToLoginForm();




