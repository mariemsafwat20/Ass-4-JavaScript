// // Sign UP
var signupName = document.querySelector("#signupName");
var signupEmail = document.querySelector("#signupEmail");
var signupPassword = document.querySelector("#signupPassword");
var hideParag = document.querySelector(".failed");
var showParag = document.querySelector(".success");
var existParag = document.querySelector(".exist");
var signUp = document.querySelector("#sign");

var users = [];
if(localStorage.getItem("users") != null){
    users = JSON.parse(localStorage.getItem("users"))
}

signUp.addEventListener("click", function(){
    var system = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }
    
    //All inputs is required
    if(signupName.value == "" || signupEmail.value == "" || signupPassword.value == ""){
        existParag.classList.add("d-none");
        showParag.classList.add("d-none");
        hideParag.classList.replace("d-none","d-block");
    }else{
        //Regex
        var patternName = /[A-Za-z0-9]{3,}/;
        var patternEmail =  /^[a-zA-Z0-9?\\.]+\@[a-zA-Z0-9]+(.com)|(.eg)|(.net)|(.org){1}$/;
        var patternPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        
        if(patternName.test(system.name) || patternEmail.test(system.email) || patternPassword.test(system.password)){
            existParag.classList.add("d-none");
            hideParag.classList.add("d-none");
            showParag.classList.replace("d-none","d-block");
        }else{
            existParag.classList.add("d-none");
            showParag.classList.add("d-none");
            hideParag.classList.replace("d-none","d-block");
        }
        
        //check Email = Email
        var test = true;
        if(users.length == 0){
            users.push(system);
            localStorage.setItem("users",JSON.stringify(users));
            test = false;
        }else{
            for(var i=0 ; i < users.length; i++){   
                if(users[i].email == system.email){
                    test = false;
                    showParag.classList.add("d-none");
                    hideParag.classList.add("d-none");
                    existParag.classList.replace("d-none","d-block");
                    console.log("ya mosahl");
                }
            }
        }
        if(test){//true
            console.log("gggg");
            users.push(system);
            localStorage.setItem("users",JSON.stringify(users))
        }
    }

})




















