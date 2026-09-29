let mascarasAtivas = [];

function aplicarMascaras() {
    mascarasAtivas.forEach(function (mascara) {
        mascara.destroy();
    });
    mascarasAtivas = [];

    if (typeof IMask === 'undefined') return;

    const telefone = document.getElementById('telefone');
    const cep = document.getElementById('cep');
    const cpf = document.getElementById('cpf');
    if (!telefone) return;

    mascarasAtivas.push(
        IMask(telefone, { mask: [{ mask: '(00) 0000-0000' }, { mask: '(00) 00000-0000' }] }),
        IMask(cep, { mask: '00000-000' }),
        IMask(cpf, { mask: '000.000.000-00' })
    );
}

function atualizarMascaras() {
    mascarasAtivas.forEach(function (mascara) {
        mascara.updateValue();
    });
}