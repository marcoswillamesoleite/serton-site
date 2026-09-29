function renderizarCadastros() {
    const lista = document.getElementById('lista-cadastros');
    if (!lista) return;

    const cadastros = obterCadastros();
    lista.innerHTML = '';

    if (cadastros.length === 0) {
        const vazio = document.createElement('li');
        vazio.textContent = 'Nenhum cadastro realizado neste navegador.';
        lista.appendChild(vazio);
        return;
    }

    cadastros.forEach(function (cadastro) {
        const item = document.createElement('li');
        item.textContent = cadastro.nome + ' - ' + cadastro.email + ' (' + cadastro.data + ')';
        lista.appendChild(item);
    });
}

function processarEnvio(form) {
    const campos = form.querySelectorAll('input:not([type="checkbox"])');
    let formularioValido = true;

    campos.forEach(function (campo) {
        if (!validarCampo(campo)) {
            formularioValido = false;
        }
    });

    document.getElementById('alerta-sucesso').hidden = !formularioValido;
    document.getElementById('alerta-erro').hidden = formularioValido;

    const alerta = formularioValido ? 'alerta-sucesso' : 'alerta-erro';
    document.getElementById(alerta).scrollIntoView({ behavior: 'smooth' });

    if (formularioValido) {
        const interesses = Array.from(
            form.querySelectorAll('input[name="interesse"]:checked')
        ).map(function (caixa) {
            return caixa.value;
        });

        salvarCadastro({
            nome: form.elements.nome.value.trim(),
            email: form.elements.email.value.trim(),
            interesses: interesses,
            data: new Date().toLocaleDateString('pt-BR')
        });

        form.reset();
        campos.forEach(limparErro);
        renderizarCadastros();
        atualizarMascaras();
    }
}