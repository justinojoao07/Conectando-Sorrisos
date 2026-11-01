const botao = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

// ANIMAÇÃO DO MENU 
function alternarMenu() {
  const aberto = menu.classList.toggle("aberto");
  botao.classList.toggle("ativo", aberto);
  botao.setAttribute("aria-expanded", aberto);
  botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
}

function fecharMenu() {
  menu.classList.remove("aberto");
  botao.classList.remove("ativo");
  botao.setAttribute("aria-expanded", "false");
  botao.setAttribute("aria-label", "Abrir menu");
}

botao.addEventListener("click", alternarMenu);

// FECHA CLICANDO NO LINK
menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", fecharMenu);
});

// FECHA COM ESC
document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape") {
    fecharMenu();
  }
});

// SE A TELA AUMENTAR VOLTA AO NORMAL
window.addEventListener("resize", function () {
  if (window.innerWidth > 900) {
    fecharMenu();
  }
});