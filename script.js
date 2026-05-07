// ABRIR E FECHAR O ROBÔ
const botaoRobo = document.getElementById('botaoRobo');
const containerRobo = document.getElementById('containerRobo');
const fecharRobo = document.getElementById('fecharRobo');

// Ao clicar no botão, abre/fecha
botaoRobo.addEventListener('click', () => {
    containerRobo.classList.toggle('aberto');
});

// Ao clicar no X, fecha
fecharRobo.addEventListener('click', () => {
    containerRobo.classList.remove('aberto');
});

// FUNCIONALIDADE DAS OPÇÕES E MENSAGENS
const botoesOpcao = document.querySelectorAll('.btn-opcao');
const inputMensagem = document.getElementById('inputMensagem');
const btnEnviar = document.getElementById('btnEnviar');
const conteudoRobo = document.querySelector('.conteudo-robo');

// Ao clicar nas opções, envia resposta
botoesOpcao.forEach(botao => {
    botao.addEventListener('click', () => {
        const texto = botao.textContent;
        adicionarMensagemUsuario(texto);
        
        setTimeout(() => {
            adicionarMensagemRobo('Ótimo! Você pode falar diretamente pelo WhatsApp: (47) 988184351 😊');
        }, 800);
    });
});

// Enviar mensagem pelo botão ou tecla Enter
btnEnviar.addEventListener('click', enviarMensagem);
inputMensagem.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') enviarMensagem();
});

function enviarMensagem() {
    const texto = inputMensagem.value.trim();
    if(texto === '') return;

    adicionarMensagemUsuario(texto);
    inputMensagem.value = '';

    setTimeout(() => {
        adicionarMensagemRobo('Recebemos sua mensagem! Em breve a Carla Antello entrará em contato com você 😘');
    }, 800);
}

// Funções auxiliares para adicionar mensagens
function adicionarMensagemUsuario(texto) {
    const div = document.createElement('div');
    div.className = 'mensagem usuario';
    div.innerHTML = `<p>${texto}</p>`;
    conteudoRobo.appendChild(div);
    conteudoRobo.scrollTop = conteudoRobo.scrollHeight;
}

function adicionarMensagemRobo(texto) {
    const div = document.createElement('div');
    div.className = 'mensagem robo';
    div.innerHTML = `<p>${texto}</p>`;
    conteudoRobo.appendChild(div);
    conteudoRobo.scrollTop = conteudoRobo.scrollHeight;
}
