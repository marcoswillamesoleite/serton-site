function gerarCardsProjetos() {
    return projetos.map(function (projeto) {
        return `
            <article>
                <span class="badge">${projeto.badge}</span>
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
            </article>
        `;
    }).join('');
}

const templates = {
    home: `
        <section>
            <h2>Quem somos</h2>
            <p>A SertON é uma organização social voltada à inclusão digital, com atuação em comunidades do interior do Nordeste. O nome resulta da junção dos termos "Sertão" e "Online" e representa o propósito central da organização: ampliar o acesso à internet e às tecnologias digitais em regiões historicamente distantes desse tipo de infraestrutura.</p>
            <p>A organização parte do princípio de que o acesso à tecnologia é determinante para a inserção de uma pessoa no mercado de trabalho e para sua capacidade de gerar renda. Por esse motivo, as ações da SertON são direcionadas à formação de jovens e idosos, oferecendo conhecimento técnico e ferramentas para atuação por meio da internet.</p>
        </section>
        <section>
            <h2>Nossa missão</h2>
            <p>Promover o acesso à internet e à formação digital no sertão nordestino, capacitando jovens e idosos para o uso da tecnologia como instrumento de aprendizado, trabalho e geração de renda.</p>
        </section>
        <section>
            <h2>O que fazemos</h2>
            <p>As atividades da SertON abrangem ensino, infraestrutura e apoio institucional, organizadas nas seguintes frentes:</p>
            <ul>
                <li>Aulas de tecnologia para idosos</li>
                <li>Reaproveitamento de computadores antigos</li>
                <li>Laboratórios de informática</li>
                <li>Cursos gratuitos de tecnologia</li>
                <li>Apoio a estudantes de graduação em TI</li>
                <li>Incentivo a competições de projetos e tecnologia</li>
            </ul>
            <p>Conheça cada iniciativa na página de <a href="#projetos">projetos</a>.</p>
        </section>
        <section>
            <h2>Como ajudar</h2>
            <p>Você pode doar equipamentos, recursos ou seu tempo como voluntário. Faça seu <a href="#cadastro">cadastro</a> e faça parte da SertON.</p>
        </section>
    `,
    projetos: `
        <h2>Nossos projetos</h2>
        ${gerarCardsProjetos()}
        <section id="como-doar">
            <h2>Como doar</h2>
            <p>A SertON recebe doações de equipamentos de informática e de recursos financeiros, destinados à manutenção dos laboratórios e à aquisição de materiais para os cursos oferecidos. Interessados em contribuir podem realizar o cadastro na <a href="#cadastro">página de cadastro</a>.</p>
        </section>
        <section id="como-ser-voluntario">
            <h2>Como ser voluntário</h2>
            <p>A atuação voluntária ocorre principalmente na condução de aulas e oficinas, no suporte técnico dos laboratórios e no acompanhamento de estudantes. Pessoas interessadas em atuar como voluntárias podem se cadastrar na <a href="#cadastro">página de cadastro</a>.</p>
        </section>
    `,
    cadastro: `
        <h2>Cadastro</h2>
        <div class="alert alert-sucesso" id="alerta-sucesso" role="status" hidden>Cadastro enviado com sucesso!</div>
        <div class="alert alert-erro" id="alerta-erro" role="alert" hidden>Verifique os campos destacados antes de enviar.</div>
        <div class="alert alert-info">Todos os campos com * são obrigatórios.</div>
        <form id="form-cadastro" novalidate>
            <fieldset>
                <legend>Dados pessoais</legend>
                <label for="nome">Nome completo *</label>
                <input type="text" id="nome" name="nome" required>
                <label for="dataNascimento">Data de nascimento *</label>
                <input type="date" id="dataNascimento" name="dataNascimento" required>
                <label for="email">Email *</label>
                <input type="email" id="email" name="email" required>
                <label for="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone" placeholder="(xx) xxxxx-xxxx" pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}" maxlength="15">
                <label for="cep">CEP</label>
                <input type="text" id="cep" name="cep" placeholder="xxxxx-xxx" pattern="\\d{5}-\\d{3}" maxlength="9">
                <label for="cpf">CPF</label>
                <input type="text" id="cpf" name="cpf" placeholder="xxx.xxx.xxx-xx" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" maxlength="14">
            </fieldset>
            <fieldset>
                <legend>Endereço</legend>
                <label for="endereco">Endereço</label>
                <input type="text" id="endereco" name="endereco" placeholder="Rua, número, bairro">
                <label for="cidade">Cidade</label>
                <input type="text" id="cidade" name="cidade">
                <label for="estado">Estado</label>
                <select id="estado" name="estado">
                    <option value="">Selecione</option>
                    <option value="PB">Paraíba</option>
                    <option value="PE">Pernambuco</option>
                    <option value="CE">Ceará</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="MA">Maranhão</option>
                </select>
            </fieldset>
            <fieldset>
                <legend>Como ser um colaborador</legend>
                <input type="checkbox" id="doador" name="interesse" value="doador">
                <label for="doador">Quero ser doador</label>
                <input type="checkbox" id="voluntario" name="interesse" value="voluntario">
                <label for="voluntario">Quero ser voluntário</label>
            </fieldset>
            <button type="submit">Enviar cadastro</button>
        </form>
        <section id="cadastros-salvos">
            <h2>Cadastros realizados</h2>
            <ul id="lista-cadastros"></ul>
        </section>
    `
};