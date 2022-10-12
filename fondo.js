const fondo = document.getElementById("main")
fondo.addEventListener("scroll", colorFondo)

colorFondo(){
  fondo.style.background = "#aaa"
}