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


function fazerLogin() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const mensagemErro = document.getElementById("mensagem");

  if (email === "" || senha === "") {
    mensagem.style.color = "red";
    mensagemErro.textContent = "Por favor, preencha todos os campos.";
    return;
  }


  if (email === "turmadobem@email.com" && senha === "123456") {
    window.location.href = "index.html";
  }
  else {
    mensagemErro.textContent = "Email ou senha incorretos. Tente novamente.";
  }
}

// PÁGINA DE DOAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-doacao');
    if (!form) return;

    const botoes = form.querySelectorAll('.valor-botao');
    const campo = document.getElementById('valor-doacao');
    const mensagem = document.getElementById('mensagem-doacao');

    const formatar = (n) =>
        n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    function marcar(botaoAtivo) {
        botoes.forEach((b) => {
            b.setAttribute('aria-pressed', String(b === botaoAtivo));
        });
    }

    // O CLIQUE NO VALOR SUGERIDO PREENCHE O CAMPO E MARCA O BOTÃO
    botoes.forEach((botao) => {
        botao.addEventListener('click', () => {
            campo.value = botao.dataset.valor;
            marcar(botao);
            mensagem.textContent = '';
        });
    });

    // DIGITOU OUTRO VALOR, DESMARCA OS BOTÕES
    campo.addEventListener('input', () => marcar(null));

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const valor = parseFloat(campo.value);

        if (!valor || valor < 1) {
            mensagem.textContent = 'Escolha ou digite um valor de pelo menos R$ 1,00.';
            return;
        }

        // INTEGRAÇÃO COM O PAGAMENTO (simulação)
        mensagem.textContent = 'Valor escolhido: ' + formatar(valor) + '. Obrigado por apoiar o projeto!';
    });
});


// PÁGINA DE CONTATO
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');
    if (!form) return;

    const retorno = document.getElementById('retorno-contato');

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();

        // TODO: aqui entra o envio real do formulário para o backend (simulação)
        retorno.textContent = 'Mensagem recebida! Obrigado pelo contato.';
        form.reset();
    });
});

//PÁGINA DE CADASTRO
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-cadastro');
    if (!form) return;

    const retorno = document.getElementById('retorno-cadastro');

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();

        // TODO: aqui entra o envio real para um back-end
        retorno.textContent = 'Cadastro recebido! Em breve você entrará na fila de prioridade.';
        form.reset();
    });
});