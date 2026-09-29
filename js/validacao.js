const formatos = {
    email: { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, msg: 'Digite um e-mail válido.' },
    telefone: { regex: /^\(\d{2}\) \d{4,5}-\d{4}$/, msg: 'Use o formato (xx) xxxxx-xxxx.' },
    cep: { regex: /^\d{5}-\d{3}$/, msg: 'Use o formato xxxxx-xxx.' },
    cpf: { regex: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, msg: 'Use o formato xxx.xxx.xxx-xx.' }
};

function limparErro(campo) {
    campo.classList.remove('campo-erro', 'campo-ok');
    const proximo = campo.nextElementSibling;
    if (proximo && proximo.classList.contains('msg-erro')) {
        proximo.remove();
    }
}

function mostrarErro(campo, mensagem) {
    campo.classList.add('campo-erro');
    const aviso = document.createElement('small');
    aviso.className = 'msg-erro';
    aviso.textContent = mensagem;
    campo.insertAdjacentElement('afterend', aviso);
}

function validarCampo(campo) {
    const valor = campo.value.trim();
    limparErro(campo);

    if (campo.required && valor === '') {
        mostrarErro(campo, 'Este campo é obrigatório.');
        return false;
    }

    const formato = formatos[campo.id];
    if (formato && valor !== '' && !formato.regex.test(valor)) {
        mostrarErro(campo, formato.msg);
        return false;
    }

    if (valor !== '') {
        campo.classList.add('campo-ok');
    }
    return true;
}