const nome = document.querySelector("#nome");
const formularioNome = document.querySelector(".formulario-nome");
const email = document.querySelector("#email");
const formularioemail = document.querySelector(".formulario-email");

nome.addEventListener("focus", () => {
  formularioNome.classList.add("formulario-nome-active");
});
nome.addEventListener("blur", () => {
  if (nome.value == "") {
    formularioNome.classList.remove("formulario-nome-active");
  }
});
email.addEventListener("focus", () => {
  formularioemail.classList.add("formulario-email-active");
});
email.addEventListener("blur", () => {
  if (email.value == "") {
    formularioemail.classList.remove("formulario-email-active");
  }
});

var emailvalor =localStorage.setItem(emailvalor,email.value)
let resultado = localStorage.getItem(emailvalor)

function cheacagem() {
  console.log(nome.value, "", email.value);
  if (email.value == "" || nome.value == "") {
    alert("preencha os campos");
    console.log(resultado)
  } else {
    alert("cadastrado");
 
  }
}
function lettersOnly(evt) {
  if (!/[" "a-záéíóúàèìòùãõâêîôûäëïöüç]/i.test(evt.key)) return false;
}