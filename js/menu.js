const paginas = [
["index.html", "Início"],
  ["paginas/integrantes.html", "Quem Somos"],
  ["paginas/sobre.html", "Sobre"],
  ["paginas/faq.html", "FAQ"],
  ["paginas/contato.html", "Contato"],
  ["paginas/cadastro.html", "Cadastro"],
  ["paginas/doacao.html", "Doação"],
  ["paginas/fila.html", "Fila de Espera"]
];

const botao = document.getElementById("botao-menu");
const menu = document.getElementsByClassName("hamburguer");


const raiz = document.body.dataset.raiz || "";
const arquivoAtual = location.pathname.split("/").pop() || "index.html";

paginas.forEach(function (pagina) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = raiz + pagina[0];
  a.textContent = pagina[1];

 if (pagina[0].split("/").pop() === arquivoAtual) {
    a.setAttribute("aria-current", "page");
  }
 
  li.appendChild(a);
  menu.appendChild(li);
});

function alternarMenu() {
  const aberto = menu.classList.toggle("aberto");
  botao.classList.toggle("ativo", aberto);
  botao.setAttribute("aria-expanded", aberto);
  botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
}

botao.addEventListener("click", alternarMenu);

menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", fecharMenu);
});


document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape") {
    fecharMenu();
     }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 900) {
    fecharMenu();
  }
});
