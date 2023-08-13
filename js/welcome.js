var Welcome = document.querySelector("#username");
var logOut = document.querySelector(".log");

if(localStorage.getItem("name") != null){
    Welcome.innerHTML = "Welcome " + JSON.parse(localStorage.getItem("name"));
}else{
    location.assign("login.html")
}

logOut.addEventListener("click", function (){
    localStorage.removeItem("name");
})
