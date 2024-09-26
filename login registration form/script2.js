let Name = document.getElementById("Name");
let Pass = document.getElementById("Pass");
let login = document.getElementById("login");
let L1 = document.getElementById("L1");
let L2 = document.getElementById("L2");
let Uname = localStorage.getItem("uname");
let Confirm = localStorage.getItem("con");

Name.addEventListener("input", function(){
    if (Name.value === "") {
        L1.textContent = "please enter the name";
    } else {
        L1.textContent = "";
    }
});

Pass.addEventListener("input", function(){
    if (Pass.value === "") {
        L2.textContent = "please enter the password";
    } else if (Pass.value.length < 8) {
        L2.textContent = "minimum length of password is 8";
    } else {
        L2.textContent = "";
    }
});

login.addEventListener("click", function(){
    if (Name.value === Uname && Pass.value === Confirm) {
        L2.textContent = "validated";
    } else {
        L2.textContent = "not validated";
    }
});
