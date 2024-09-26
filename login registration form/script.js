let uname=document.getElementById("name");
let mail=document.getElementById("mail");
let pass=document.getElementById("pass");
let con=document.getElementById("confirm");
let reg=document.getElementById("reg");
let l1=document.getElementById("l1");
let l2=document.getElementById("l2");
let l3=document.getElementById("l3");
let l4=document.getElementById("l4");

uname.addEventListener("input",function(){
    if(uname.value==""){
        l1.textContent="please enter your name";
    }else{
        l1.textContent="";
    }
});

mail.addEventListener("input",function(){
    if(mail.value==""){
        l2.textContent="please enter your mail";
    }else{
        l2.textContent="";
    }
});

pass.addEventListener("input",function(){
    if(pass.value==""){
        l3.textContent="please enter the password";
    }else if(pass.value.length<8){
        l3.textContent="minimum length of password is 8";
    }else{
        l3.textContent="";
    }
});

con.addEventListener("input",function(){
    if(con.value==""){
        l4.textContent="please enter your password";
    }else if(con.value!=pass.value){
        l4.textContent="password does not match";
    }else{
        l4.textContent="";
    }
});

reg.addEventListener("click",function(){
    if(uname.value=="" || mail.value=="" || pass.value=="" || con.value==""){
     l4.textContent="please enter the details";
    }else if(con.value!=pass.value){
        l4.textContent="password does not match";
    }else{
        localStorage.setItem("uname",uname.value);
        localStorage.setItem("con",con.value);
        location.href="login.html";


    }
});







