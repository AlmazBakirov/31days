// calling all function
const formbox = document.querySelector("#form");
const field = document.querySelector("#input");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const website = document.querySelector("#website");
const write = document.querySelector("#write");
const submit = document.querySelector("#button");
const message = document.querySelector("#error");

formbox.onsubmit = (e)=>{
  e.preventDefault(); // preventing form from submitting
  if(field.value == ""){
    message.classList.add("active");
  }else{
    validate();
  }
  field.onkeyup = ()=>{
    if(field.value == ""){
      message.classList.add("active");
    }else{
      message.classList.remove("active");
    }
  }
  email.onkeyup = ()=>{
    if(email.value == ""){
      message.classList.add("active");
    }else{
      message.classList.remove("active");
    }
  }
  phone.onkeyup = ()=>{
    if(phone.value == ""){
      message.classList.add("active");
    }else{
      message.classList.remove("active");
    }
  }
  website.onkeyup = ()=>{
    if(website.value == ""){
      message.classList.add("active");
    }else{
      message.classList.remove("active");
    }
  }
  write.onkeyup = ()=>{
    if(write.value == ""){
      message.classList.add("active");
    }else{
      message.classList.remove("active");
    }
  }
  // Functions written to show error if field is empty
  function validate() {
    if(email.value == ""){
      message.classList.add("active");
    }else{
      message.classList.remove("active");
    }
    if(phone.value == ""){
      message.classList.add("active");
    }else{
      message.classList.remove("active");
    }
    if(website.value == ""){
      message.classList.add("active");
    }else{
      message.classList.remove("active");
    }
    if(write.value == ""){
      message.classList.add("active");
    }else{
      message.classList.remove("active");
    }
  }
}
