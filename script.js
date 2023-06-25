const IPED = document.querySelector('#IPED');
const AP = document.querySelector('#AP');
const II = document.querySelector('#II');
const descricao = document.querySelector('.descricao');
const descricaod= document.querySelector('.descricaod');
const descricaot = document.querySelector('.descricaot');
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

    
IPED.addEventListener('click', ()=>{
    descricao.classList.toggle('descricao-act');
})

AP.addEventListener('click', ()=>{
    descricaod.classList.toggle('descricaod-act');
})

II.addEventListener('click', ()=>{
    descricaot.classList.toggle('descricaot-act');
})

