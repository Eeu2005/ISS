
const nome = document.querySelector("#nome");
const formularioNome = document.querySelector(".formulario-nome");
const email = document.querySelector("#email");
const formularioemail = document.querySelector(".formulario-email");


nome.addEventListener("focus", () => {
  formularioNome.classList.add("formulario-nome-active");
})
nome.addEventListener("blur", () => {
  if (nome.value == "") {
    formularioNome.classList.remove("formulario-nome-active");
  }
});
email.addEventListener('focus',()=>{
    formularioemail.classList.add('formulario-email-active')
    } )
    email.addEventListener('blur',()=>{
        if(email.value=='')  {
        formularioemail.classList.remove('formulario-email-active')
    }});

    


