// Demo em tela cheia: o mockup cresce até ocupar a tela e mostra as telas do app em sequência.
(function () {
    var CAMINHO = 'assets/products/';
    var TEMPO_TELA = 3400;
    var DURACAO = 520;
    var CURVA = 'cubic-bezier(0.2, 0.8, 0.2, 1)';

    var DEMOS = {
        penduro: {
            nome: 'Pendurô', icone: 'penduro/icon.png', tipo: 'celular', telas: [
                ['penduro/tela.webp', 'Saiba quem deve quanto, com o total a receber no topo'],
                ['penduro/demo-lancar.webp', 'Anote o fiado em 3 toques'],
                ['penduro/demo-cobrar.webp', 'Cobre no WhatsApp com a mensagem pronta'],
                ['penduro/demo-qr.webp', 'Receba na hora pelo QR Code do Pix']
            ]
        },
        yba: {
            nome: 'Yba', icone: 'yba/icon.png', tipo: 'celular', telas: [
                ['yba/tela.png', 'Ache a feira perto de você'],
                ['yba/demo-banca.png', 'Veja os produtos e os pagamentos aceitos em cada banca'],
                ['yba/demo-pedidos.png', 'O feirante recebe e aceita os pedidos pelo app'],
                ['yba/demo-perfil.png', 'Cada banca tem perfil, estoque e localização aproximada']
            ]
        },
        gymapp: {
            nome: 'GymApp', icone: 'gymapp/icon.png', tipo: 'celular', telas: [
                ['gymapp/tela.webp', 'Recebido, em atraso e margem do mês numa tela só'],
                ['gymapp/demo-alunos.webp', 'Todos os alunos e a situação de cada um'],
                ['gymapp/demo-cobrar.webp', 'Cobre pelo WhatsApp com poucos toques'],
                ['gymapp/demo-resultado.webp', 'Veja quanto as cobranças recuperaram']
            ]
        },
        llord: {
            nome: 'llord', icone: 'llord/icon.png', tipo: 'celular', telas: [
                ['llord/demo-dashboard.webp', 'Visão geral do seu portfólio de imóveis'],
                ['llord/demo-documentos.webp', 'Contratos e documentos na nuvem']
            ]
        },
        krovo: {
            nome: 'Krovo', icone: 'krovo/icon.png', tipo: 'web', telas: [
                ['krovo/demo-inicio.jpg', 'Sua obra inteira numa tela'],
                ['krovo/demo-custos.jpg', 'Cada gasto registrado, com o que falta pagar'],
                ['krovo/demo-etapas.jpg', 'Etapas da obra com as datas de cada uma'],
                ['krovo/demo-materiais.jpg', 'Lista de materiais, com a nota fiscal lida por IA']
            ]
        },
        kbot: {
            nome: 'Kbot', icone: 'kbot/icon.png', tipo: 'inteira', telas: [
                ['kbot/demo-conversa.jpg', 'O cliente chama no WhatsApp e o Kbot já localiza o equipamento'],
                ['kbot/demo-triagem.jpg', 'A IA entende o problema e pergunta o que falta'],
                ['kbot/demo-protocolo.jpg', 'O chamado fica registrado, com protocolo'],
                ['kbot/demo-equipe.jpg', 'Sua equipe recebe o caso pronto no painel']
            ]
        },
        alento: {
            nome: 'Alento', icone: 'alento/icon.png', tipo: 'curto', telas: [
                ['alento/tela.png', 'Quantos meses de custo fixo o seu caixa cobre'],
                ['alento/demo-vendas.png', 'Vendas e projetos do mês, com o que está vencido'],
                ['alento/demo-assistente.png', 'Pergunte ao assistente sobre caixa, contas e impostos']
            ]
        },
        churrapp: {
            nome: 'Churrapp', icone: 'churrapp/icon.png', tipo: 'celular', telas: [
                ['churrapp/tela.webp', 'Diga quantos vêm e veja quanto comprar'],
                ['churrapp/demo-lista.webp', 'A lista de compras sai pronta'],
                ['churrapp/demo-pix.webp', 'Divida a conta e mande o Pix de cada um']
            ]
        },
        natalina: {
            nome: 'Natalina', icone: 'natalina/icon.png', tipo: 'celular', telas: [
                ['natalina/tela.webp', 'Monte o amigo secreto com a família'],
                ['natalina/demo-restricoes.webp', 'Diga quem não pode tirar quem'],
                ['natalina/demo-enviar.webp', 'Mande o link de cada pessoa pelo WhatsApp']
            ]
        },
        vjez: {
            nome: 'Vjež', icone: 'vjez/icon.png', tipo: 'celular', telas: [
                ['vjez/demo-inicio.jpg', 'Uma trilha de lições, do alfabeto aos casos'],
                ['vjez/demo-unidade.jpg', 'Cada unidade mostra o próximo passo'],
                ['vjez/demo-licao.jpg', 'Lições curtas, explicadas em português']
            ]
        }
    };

    var menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)');
    var dialogo = document.getElementById('demo');
    var aparelho = dialogo.querySelector('.demo-aparelho');
    var progresso = dialogo.querySelector('.demo-progresso');
    var legenda = dialogo.querySelector('.demo-legenda');
    var demo = null;
    var origem = null;
    var passo = 0;
    var cronometro = null;
    var fechando = false;

    function montarTelas() {
        aparelho.innerHTML = '';
        demo.telas.forEach(function (tela) {
            var imagem = document.createElement('img');
            imagem.src = CAMINHO + tela[0];
            imagem.alt = tela[1];
            aparelho.appendChild(imagem);
        });
    }

    function montarProgresso() {
        progresso.innerHTML = '';
        for (var i = 0; i < demo.telas.length; i++) progresso.appendChild(document.createElement('span'));
    }

    function mostrar(indice) {
        var total = demo.telas.length;
        passo = (indice + total) % total;

        aparelho.querySelectorAll('img').forEach(function (imagem, i) {
            imagem.classList.toggle('ativa', i === passo);
        });
        legenda.textContent = demo.telas[passo][1];

        Array.prototype.forEach.call(progresso.children, function (barra, i) {
            barra.className = i < passo ? 'feita' : i === passo ? 'atual' : '';
        });
        progresso.style.setProperty('--tempo', TEMPO_TELA + 'ms');
        agendar();
    }

    function agendar() {
        window.clearTimeout(cronometro);
        if (menosMovimento.matches) return;
        cronometro = window.setTimeout(function () { mostrar(passo + 1); }, TEMPO_TELA);
    }

    // Diferença entre o mockup na página e o aparelho na tela cheia.
    function deslocamento() {
        var de = origem.getBoundingClientRect();
        var para = aparelho.getBoundingClientRect();
        var escala = Math.min(de.width / para.width, de.height / para.height);
        var x = de.left + de.width / 2 - (para.left + para.width / 2);
        var y = de.top + de.height / 2 - (para.top + para.height / 2);
        return 'translate(' + x + 'px, ' + y + 'px) scale(' + escala + ')';
    }

    function animar(elemento, quadros, opcoes) {
        if (!elemento.animate) return { finished: Promise.resolve() };
        return elemento.animate(quadros, opcoes);
    }

    function abrir(botao) {
        demo = DEMOS[botao.dataset.demo];
        origem = botao.parentElement.querySelector('.app-phone, .app-mockup, .app-figure');
        fechando = false;

        dialogo.dataset.tipo = demo.tipo;
        dialogo.querySelector('.demo-icone').src = CAMINHO + demo.icone;
        dialogo.querySelector('.demo-nome').textContent = demo.nome;
        montarTelas();
        montarProgresso();

        dialogo.showModal();
        document.documentElement.classList.add('demo-aberta');
        mostrar(0);

        if (menosMovimento.matches) return;
        origem.style.visibility = 'hidden';
        animar(aparelho, [{ transform: deslocamento() }, { transform: 'none' }], { duration: DURACAO, easing: CURVA });
        animar(dialogo, [{ backgroundColor: 'rgba(10, 10, 10, 0)' }, { backgroundColor: 'rgba(10, 10, 10, 1)' }],
            { duration: DURACAO, easing: 'ease-out' });
        dialogo.querySelectorAll('.demo-topo, .demo-progresso, .demo-legenda, .demo-seta').forEach(function (parte) {
            animar(parte, [{ opacity: 0 }, { opacity: 1 }], { duration: DURACAO, delay: 180, fill: 'backwards' });
        });
    }

    function concluirFechamento() {
        window.clearTimeout(cronometro);
        document.documentElement.classList.remove('demo-aberta');
        if (origem) origem.style.visibility = '';
        dialogo.close();
        aparelho.innerHTML = '';
        demo = null;
    }

    function fechar() {
        if (fechando || !demo) return;
        fechando = true;
        window.clearTimeout(cronometro);
        if (menosMovimento.matches) {
            concluirFechamento();
            return;
        }
        animar(dialogo, [{ backgroundColor: 'rgba(10, 10, 10, 1)' }, { backgroundColor: 'rgba(10, 10, 10, 0)' }],
            { duration: DURACAO, easing: 'ease-in', fill: 'forwards' });
        dialogo.querySelectorAll('.demo-topo, .demo-progresso, .demo-legenda, .demo-seta').forEach(function (parte) {
            animar(parte, [{ opacity: 1 }, { opacity: 0 }], { duration: 160, fill: 'forwards' });
        });
        animar(aparelho, [{ transform: 'none' }, { transform: deslocamento() }],
            { duration: DURACAO, easing: CURVA, fill: 'forwards' }).finished.then(function () {
                dialogo.getAnimations({ subtree: true }).forEach(function (animacao) { animacao.cancel(); });
                concluirFechamento();
            });
    }

    document.querySelectorAll('.app-demo').forEach(function (botao) {
        botao.addEventListener('click', function () { abrir(botao); });
    });
    dialogo.querySelector('.demo-fechar').addEventListener('click', fechar);
    dialogo.querySelector('.demo-seta--voltar').addEventListener('click', function () { mostrar(passo - 1); });
    dialogo.querySelector('.demo-seta--avancar').addEventListener('click', function () { mostrar(passo + 1); });
    aparelho.addEventListener('click', function () { mostrar(passo + 1); });

    // Esc fecha com a mesma animação do botão.
    dialogo.addEventListener('cancel', function (evento) {
        evento.preventDefault();
        fechar();
    });
    dialogo.addEventListener('keydown', function (evento) {
        if (evento.key === 'ArrowRight') mostrar(passo + 1);
        if (evento.key === 'ArrowLeft') mostrar(passo - 1);
    });
})();
