function renderRoute() {
    const hash = window.location.hash.replace('#', '') || 'home';
    const ancoras = ['como-doar', 'como-ser-voluntario'];
    const rota = ancoras.includes(hash) ? 'projetos' : hash;

    document.getElementById('app').innerHTML = templates[rota] || templates.home;

    if (rota === 'cadastro') {
        renderizarCadastros();
        aplicarMascaras();
    }

    if (ancoras.includes(hash)) {
        document.getElementById(hash).scrollIntoView();
    }
}

function iniciarRoteador() {
    window.addEventListener('hashchange', renderRoute);
    window.addEventListener('DOMContentLoaded', renderRoute);
}