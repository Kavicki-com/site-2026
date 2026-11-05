// Esconde o botão flutuante enquanto ele estiver sobre o que está em data-evitar.
(function () {
    var botao = document.querySelector('.whatsapp-float');
    if (!botao) return;

    var alvos = document.querySelectorAll(botao.dataset.evitar);
    var agendado = false;

    function encosta(a, b) {
        return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
    }

    function atualizar() {
        agendado = false;
        var area = botao.getBoundingClientRect();
        var cobre = Array.prototype.some.call(alvos, function (alvo) {
            return encosta(area, alvo.getBoundingClientRect());
        });
        botao.classList.toggle('whatsapp-float--oculto', cobre);
    }

    function agendar() {
        if (agendado) return;
        agendado = true;
        window.requestAnimationFrame(atualizar);
    }

    window.addEventListener('scroll', agendar, { passive: true });
    window.addEventListener('resize', agendar);
    window.addEventListener('load', agendar);
    agendar();
})();
