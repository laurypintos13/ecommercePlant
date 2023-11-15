const formName = document.getElementById("formName");
const formEmail = document.getElementById("formEmail");
const formText = document.getElementById("formText");
const formBtn = document.getElementById("formBtn");

//fondo blanco menu al hacer scroll
window.addEventListener('scroll', function(){
    const header = document.getElementById('header');
    header.classList.toggle("headerScroll", window.scrollY>0)
})
//form validacion
formBtn.addEventListener("click", e=>{
    e.preventDefault();
    let regExpEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const errorFormName = document.getElementById('errorFormName');
    const errorFormEmail = document.getElementById('errorFormEmail');
    const errorFormText = document.getElementById('errorFormText');
    
   
    if(formName.value == ""){
        errorFormName.innerHTML= `Enter your Name`;
    }else{
        errorFormName.innerHTML= "";
    }
    if (formText.value == ""){
        errorFormText.innerHTML= `Enter your query`;
    }else{
        errorFormText.innerHTML= "";
    }
    if(!regExpEmail.test(formEmail.value)){
        errorFormEmail.innerHTML= `No valid email`;
    }else{
        errorFormEmail.innerHTML="";
    }
    if(formName.value != "" && formText.value != "" && regExpEmail.test(formEmail.value)){
        Swal.fire({
                            icon: "success",
                            title: "Thank you!",
                            text: "We will contact you soon.",
                          });
                
                        formName.value = ""
                        formEmail.value = ""
                        formText.value = ""
    }
})

//borrado de form al reiniciar web
if(location.reload){
    formName.value = ""
        formEmail.value = ""
        formText.value = ""
}