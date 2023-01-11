const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados");
const retorno = document.getElementById("teste");

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})

window.addEventListener("keyup", (e)=> {
  console.log(e.key);
  console.log(e.code);

    // if (e.code == "Digit1" || e.code =="Numpad1" ){
    //   console.log("Abrir ");
    //   navPerfil.style.display = "block";
    // }

    if(navPerfil.style.display == "block"){
      if(e.code == "Digit1") {
        linkPerfilDados.click();
      }
    }
    if(e.code == "Digit1"){
      console.log("Abrir navegação secundaário");
      navPerfil.style.display = "block"
    }
      if(e.code == "Backspace") {
        retorno.click();
      }

})


const linkHome = document.getElement("link-home");

document.addEventListener("keyup", (e) => {
  if (e.code == "Backspace"){
    linkHome.click();
  }
})