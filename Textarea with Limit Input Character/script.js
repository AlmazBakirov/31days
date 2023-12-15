// calling all functions
const eInput = document.querySelector("form textarea"),
counter = document.querySelector("form .limit"),
maxLength = eInput.getAttribute("maxlength"),
title = document.querySelector(".box .title");
eInput.onkeyup = ()=>{
    counter.innerText = maxLength - eInput.value.length; // getting value of the user entered word

    if(counter.innerText > 0){
        eInput.classList.remove("error");
        counter.classList.remove("active");
        title.classList.remove("active");
    }else{
        eInput.classList.add("error");
        counter.classList.add("active");
        title.classList.add("active");
    }
}