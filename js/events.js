function inicializarEventos() {
    const app = document.getElementById('app');

    app.addEventListener('submit', function (evento) {
        if (evento.target.id === 'form-cadastro') {
            evento.preventDefault();
            processarEnvio(evento.target);
        }
    });

    app.addEventListener('input', function (evento) {
        if (evento.target.classList.contains('campo-erro')) {
            validarCampo(evento.target);
        }
    });

    document.querySelector('nav').addEventListener('click', function (evento) {
        if (evento.target.tagName === 'A') {
            document.getElementById('menu-toggle').checked = false;
        }
    });
    document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape') {
        const modalToggle = document.getElementById('modal-toggle');
        if (modalToggle && modalToggle.checked) {
            modalToggle.checked = false;
            }
        }
    });
}