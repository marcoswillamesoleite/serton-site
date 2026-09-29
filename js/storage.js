const CHAVE_CADASTROS = 'serton_cadastros';

function obterCadastros() {
    const dados = localStorage.getItem(CHAVE_CADASTROS);
    return dados ? JSON.parse(dados) : [];
}

function salvarCadastro(cadastro) {
    const cadastros = obterCadastros();
    cadastros.push(cadastro);
    localStorage.setItem(CHAVE_CADASTROS, JSON.stringify(cadastros));
}