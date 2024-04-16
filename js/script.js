let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');



menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


var item=document.querySelectorAll(".controls .block_img")
setInterval(fun, 3000);

function fun(){
    for(let i=0; i<item.length; i++){
        let a=getComputedStyle(item[i])
        if(a.display=="block"){
            if(item.length-1==i){
                item[i].style.display="none";
                item[0].style.display="block";
            } else {
                item[i].style.display="none";
                item[++i].style.display="block";
            }            
        }
    }
}

/*dark*/

function changeMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}




/* sing UP*/
var fio=document.getElementById("fio");
var email=document.getElementById("email");
var on=document.getElementById("on");
var off=document.getElementById("off");
var par1=document.getElementById("par1");
var par2=document.getElementById("par2");
var form=document.getElementById("form");
var sub=document.getElementById("sub");
fio.addEventListener("keyup", ()=>{
    if(fio.value.length>=2){
        fio.style.borderColor="green"
        fio.previousElementSibling.style.color="green"
    } else {
        fio.style.borderColor="red"
        fio.previousElementSibling.style.color="red"
    }
})
email.addEventListener("keyup", ()=>{
    let mail=email.value;
    let s=0;
    for(let i=0; i<mail.length; i++){
        if(mail[i]=="@"){
            s++
        }
    }
    if(s==1 && mail.length>5){
        email.style.borderColor="green"
        email.previousElementSibling.style.color="green"
    } else {
        email.style.borderColor="red"
        email.previousElementSibling.style.color="red"
    }
})

on.addEventListener("click", ()=>{
    document.getElementById("par1").type="text";
    on.style.display="none";
    off.style.display="block";
})
off.addEventListener("click", ()=>{
    document.getElementById("par1").type="password";
    on.style.display="block";
    off.style.display="none";
})

par1.addEventListener("keyup", ()=>{
    if(par1.value.length>=8){
        par1.style.borderColor="green"
        par1.previousElementSibling.style.color="green"
    } else {
        par1.style.borderColor="red"
        par1.previousElementSibling.style.color="red"
    }
})
par2.addEventListener("keyup", ()=>{
    if(par1.value==par2.value){
        par2.style.borderColor="green"
        par2.previousElementSibling.style.color="green"
    } else {
        par2.style.borderColor="red"
        par2.previousElementSibling.style.color="red"
    }
})
var form=document.querySelector("form");
var subb=document.getElementById("sub")
form.addEventListener("input", ()=>{
    if(fio.parentElement.style.borderColor=="greenyellow" && email.parentElement.style.borderColor=="greenyellow" && parol.parentElement.style.borderColor=="greenyellow" && parol2.parentElement.style.borderColor=="greenyellow"){    
        subb.type="submit";
        subb.style.backgroundColor="#ffa500";
    } else {
        subb.style.backgroundColor=gold;
    }
})