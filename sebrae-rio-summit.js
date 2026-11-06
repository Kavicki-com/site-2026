// Parallax leve da página do Sebrae Rio Summit.
// data-parallax guarda o deslocamento máximo, em px, de cada elemento.
(function () {
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    var scopes = Array.prototype.map.call(document.querySelectorAll('[data-parallax-scope]'), function (scope) {
        return { el: scope, layers: scope.querySelectorAll('[data-parallax]') };
    });
    var ticking = false;

    function update() {
        ticking = false;
        var viewport = window.innerHeight;
        var scale = window.innerWidth <= 768 ? 0.7 : 1;

        scopes.forEach(function (scope) {
            var rect = scope.el.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > viewport) return;

            // -1 a 1: distância entre o centro da seção e o centro da tela.
            var center = rect.top + rect.height / 2;
            var progress = Math.max(-1, Math.min(1, (center - viewport / 2) / viewport));

            scope.layers.forEach(function (layer) {
                // No celular, data-parallax-mobile limita o primeiro plano para nada cobrir o texto.
                var mobileRange = scale < 1 ? layer.dataset.parallaxMobile : undefined;
                var range = mobileRange !== undefined ? Number(mobileRange) : Number(layer.dataset.parallax) * scale;
                var offset = progress * range;
                layer.style.transform = 'translate3d(0, ' + offset.toFixed(1) + 'px, 0)';
            });
        });
    }

    function requestUpdate() {
        if (ticking || reduced.matches) return;
        ticking = true;
        window.requestAnimationFrame(update);
    }

    function applyPreference() {
        if (!reduced.matches) {
            requestUpdate();
            return;
        }
        scopes.forEach(function (scope) {
            scope.layers.forEach(function (layer) {
                layer.style.transform = '';
            });
        });
    }

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    if (reduced.addEventListener) reduced.addEventListener('change', applyPreference);
    applyPreference();
})();
