// Login

var signupEmail = document.querySelector("#signinEmail");
var signupPassword = document.querySelector("#signinPassword");
var requiredInput = document.querySelector(".required");
var incorrectInput = document.querySelector(".incorrect");
var login = document.querySelector("#signUp");

var users = [];
if(localStorage.getItem("users") != null){
    users = JSON.parse(localStorage.getItem("users"))
}

login.addEventListener("click", function (){
    //All inputs is required
    if(signupEmail.value == "" || signupPassword.value == ""){
        incorrectInput.classList.add("d-none");
        requiredInput.classList.replace("d-none","d-block");
    }
   
    //check Email = Email
    var test = true;
    console.log(users);
    for(var i=0 ; i < users.length; i++){   
        if(users[i].email == signupEmail.value){
            if(users[i].password == signupPassword.value){
                test = false;
                localStorage.setItem("name",JSON.stringify(users[i].name));
                window.open("welcome.html", "_blank");
            }
        }
    }

    // Print incorrect email or password
    if(test){//true 
        requiredInput.classList.add("d-none");
        incorrectInput.classList.replace("d-none","d-block");
    }   

})