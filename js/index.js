/*==========================mensagge email error====== */
  let emailForm = document.getElementById("form__email");

let errorMsg = document.getElementById("error__msg");
  
let icon = document.getElementById("icon");

let mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z])+$/;

function checker() {
    icon.style.display = "inline-block";
    if (emailForm.value.match(mailRegex)) {
        icon.innerHTML = '';
        /* errorMsg.style.display = "block"; */
       
    } else if (emailForm.value == "") {
        icon.innerHTML = '';
        icon.innerHTML = '<img src="/images/icon-error.svg" alt="">';
        errorMsg.style.display = "block";
         emailForm.style.border = "2px solid #ff2851";
    } else { 
        icon.innerHTML = '<img src="/images/icon-error.svg" alt="">';
        errorMsg.style.display = "block";
         emailForm.style.border = "2px solid #ff2851";
        
        
    }

}