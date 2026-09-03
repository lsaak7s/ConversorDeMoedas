//Se Precisa ter interação Guarde em uma Variável
//Primeira moeda
// Aqui pegamos os dois menus pelo ID que está no HTML.
// As variáveis guardam os elementos, não os valores selecionados.
const primeiroSelect = document.getElementById("selectOrigem");
const segundoSelect = document.getElementById("SelectDestino");

// Aqui pegamos os elementos que vão mostrar os nomes das moedas.
const moedav1 = document.getElementById("moedaOrigem");
const moedav2 = document.getElementById("MoedaDestino");

//INPUT Valor do User
// Aqui pegamos o campo onde a pessoa digita o valor.
const inseriValor = document.getElementById("inputOrigem")
// Essa linha está comentada, então ela não executa.
//const valueinUser = document.getElementById("valueinUser");
// Aqui pegamos o elemento que vai receber o resultado da conversão.
const valueFinal = document.getElementById("valueFinal");

// Aqui pegamos a janela de erro e o texto que fica dentro dela.
const modalErro = document.getElementById("modalErro");
const mensagemErro = document.getElementById("mensagemErro");

// Aqui pegamos o botão usado para fechar essa janela.
const fecharModal = document.getElementById("fecharModal");

// Aqui criamos um objeto vazio.
// Neste arquivo, essa variável não é usada depois.
let moedas = {};

// Aqui criamos a função que carrega as opções de moedas.
// O async permite usar await dentro dela.
async function carregarMoedas() {
    // Aqui fazemos o pedido para a API.
    // O await espera a resposta antes de seguir.
    const response = await fetch(
        "https://economia.awesomeapi.com.br/json/available"
    );

    // Aqui verificamos se o pedido falhou.
    // O ! inverte o valor: se response.ok for false, entramos no if.
    if (!response.ok) {
        // Aqui lançamos um erro e interrompemos essa função.
        throw new Error("Não foi possível carregar a lista de moedas");
    }

    // Aqui lemos o JSON da resposta e transformamos em dados JavaScript.
    const moneyAvailable = await response.json();

    // Aqui apagamos as opções anteriores dos selects.
    // Isso evita duplicar as opções se a função carregar novamente.
    primeiroSelect.innerHTML = "";
    segundoSelect.innerHTML = "";

    // Códigos das moedas que queremos mostrar.
    // Essa lista permite escolher quais códigos podem aparecer.
    // Mais abaixo também verificamos se a API anuncia o par com real.
    const codigosPrincipais = [
        "USD", // Dólar americano
        "EUR", // Euro
        "GBP", // Libra esterlina
        "JPY", // Iene japonês
        "CHF", // Franco suíço
        "CAD", // Dólar canadense
        "AUD", // Dólar australiano
        "CNY", // Yuan chinês
        "ARS", // Peso argentino
        "MXN", // Peso mexicano
        "CLP", // Peso chileno
        "COP", // Peso colombiano
        "UYU", // Peso uruguaio
        "PYG", // Guarani paraguaio
        "PEN", // Sol peruano
        "BOB", // Boliviano
        "NZD", // Dólar neozelandês
        "HKD", // Dólar de Hong Kong
        "SGD", // Dólar de Singapura
        "KRW", // Won sul-coreano
        "INR", // Rupia indiana
        "RUB", // Rublo russo
        "TRY", // Lira turca
        "ZAR", // Rand sul-africano
        "SEK", // Coroa sueca
        "NOK", // Coroa norueguesa
        "DKK", // Coroa dinamarquesa
        "PLN", // Zlóti polonês
        "SAR", // Riyal saudita
        "AED", // Dirham dos Emirados
        "ILS", // Novo shekel israelense
        "THB", // Baht tailandês
        "TWD", // Novo dólar taiwanês
        // Aqui estão os códigos das criptomoedas.
        "BTC",
        "ETH",
        "LTC",
        "XRP",
        "DOGE"
    ];

    // Aqui o Object.entries transforma o objeto numa lista de duplas.
    // Exemplo de uma dupla:
    // ["USD-BRL", "Dólar Americano/Real Brasileiro"]
    // selfMadeReal vai guardar o resultado de toda essa sequência.
    const selfMadeReal = Object.entries(moneyAvailable)
        // Aqui o filter decide quais duplas continuam na lista.
        // [par] pega a primeira parte da dupla, como "USD-BRL".
        .filter(([par]) => {
            // Aqui trocamos "-BRL" por texto vazio.
            // Exemplo: "USD-BRL" vira "USD".
            const codigo = par.replace("-BRL", "");

            // Aqui retornamos true ou false para o filter.
            // endsWith confere se o texto termina com "-BRL".
            // includes confere se o código está na nossa lista.
            // O && exige que as duas condições sejam verdadeiras.
            return (
                par.endsWith("-BRL") &&
                codigosPrincipais.includes(codigo)
            );
        })
        // Aqui transformamos cada dupla que passou no filtro.
        // [par, name] pega o código do par e o nome completo.
        .map(([par, name]) => {
            // Aqui guardamos só a sigla da moeda, sem "-BRL".
            const selfMadeMoney = par.replace("-BRL", "");

            // Aqui o split corta o texto onde encontra a barra.
            // O [0] pega a primeira parte da lista criada.
            // "Dólar Americano/Real Brasileiro" vira "Dólar Americano".
            const nameMoney = name.split("/")[0];

            // Aqui devolvemos um objeto novo para essa moeda.
            // selfMadeMoney é a forma curta de:
            // selfMadeMoney: selfMadeMoney
            // A propriedade name recebe o valor de nameMoney.
            return {
                selfMadeMoney,
                name: nameMoney
            };
        })//Aqui estamos deicando em ordem alfabetica
        // O sort compara dois objetos por vez, chamados a e b.
        // localeCompare compara os nomes para definir a ordem.
        .sort((a, b) => a.name.localeCompare(b.name));

    // O BRL precisa ser inserido porque não existe uma cotação BRL-BRL.
    // Aqui o unshift adiciona o real no começo da lista.
    selfMadeReal.unshift({
        selfMadeMoney: "BRL",
        name: "Real Brasileiro"
    });

    // Aqui passamos por uma moeda de cada vez.
    // moeda recebe o objeto da volta atual, com sigla e nome.
    selfMadeReal.forEach((moeda) => {
        // Aqui criamos uma option nova, ainda fora do select.
        const firstOption = document.createElement("option");

        // Aqui colocamos a sigla no valor interno da option.
        // É esse valor que vamos ler quando a pessoa escolher a moeda.
        firstOption.value = moeda.selfMadeMoney;

        // Aqui colocamos o texto que aparece para a pessoa.
        // Exemplo: "USD — Dólar Americano".
        firstOption.textContent =
            `${moeda.selfMadeMoney} — ${moeda.name}`;

        // Aqui fazemos uma cópia da option para o outro select.
        // A cópia mantém os atributos.
        // O true manda copiar também o conteúdo que está dentro dela.
        const secondOption = firstOption.cloneNode(true);

        // Aqui colocamos a option original dentro do primeiro select.
        primeiroSelect.appendChild(firstOption);

        // Aqui colocamos a cópia dentro do segundo select.
        segundoSelect.appendChild(secondOption);
    });

    // Aqui escolhemos as moedas que começam selecionadas.
    primeiroSelect.value = "BRL";
    segundoSelect.value = "USD";

    // Aqui atualizamos os nomes na página depois de criar as opções.
    updateName();
}
//Toda vez que trocamos o valor do select ele atualiza
// Essa função executa quando é chamada.
// Os eventos no final do arquivo fazem essa chamada ao trocar a moeda.
function updateName() {
    // options reúne as opções do select.
    // selectedIndex informa a posição selecionada.
    // Os colchetes pegam a opção dessa posição.
    // textContent copia o texto dela para o nome mostrado na página.
    moedav1.textContent = primeiroSelect.options[primeiroSelect.selectedIndex].textContent;

    // Aqui fazemos a mesma coisa com a moeda de destino.
    moedav2.textContent = segundoSelect.options[segundoSelect.selectedIndex].textContent;
    

}

// Aqui buscamos quanto uma unidade da moeda vale em reais.
// currencyCode recebe o código passado na chamada, como "USD".
async function findRealFees(currencyCode) {
    // Se a moeda já for real, a taxa é 1.
    // O return devolve esse valor e encerra a função.
    if (currencyCode === "BRL") {
        return 1;
    }

    // Aqui montamos a URL usando o código recebido.
    // Se currencyCode for "USD", o final fica USD-BRL.
    const response = await fetch(
        `https://economia.awesomeapi.com.br/json/last/${currencyCode}-BRL`
    );

    // Aqui verificamos se o pedido falhou.
    // Atenção: a falha também pode ser limite de consultas ou erro
    // do servidor, mesmo que a mensagem abaixo diga "não encontrada".
    if (!response.ok) {
        throw new Error(`Cotação ${currencyCode}-BRL não encontrada`);
    }

    // Aqui lemos o conteúdo JSON da resposta.
    const dados = await response.json();

    // Object.values cria uma lista com os valores do objeto.
    // O [0] pega o primeiro item, pois esse pedido consulta um único par.
    const bigPrice = Object.values(dados)[0];

    // Aqui verificamos se falta o objeto ou se bid tem um valor falso.
    // O || significa "ou".
    // Se bigPrice não existir, a segunda condição nem é avaliada.
    if (!bigPrice || !bigPrice.bid) {
        throw new Error("Moeda não possui cotação em relação ao real");
    }

    // Aqui transformamos o bid de texto em número.
    // O return devolve esse número para quem chamou a função.
    return Number(bigPrice.bid);
}


// Aqui preenchemos e mostramos o modal de erro.
function mostrarErro(mensagem){
    // Aqui colocamos a mensagem recebida dentro do elemento de texto.
    mensagemErro.textContent = mensagem;

    // Aqui tiramos o modal do estado escondido.
    modalErro.hidden = false;

    // Atenção: essa linha chama a conversão novamente.
    // Se o valor continuar inválido, ela chama mostrarErro de novo,
    // criando um ciclo que pode travar a página.
    converterValores()
}

// Aqui escondemos o modal de erro.
function esconderErro() {
    modalErro.hidden = true;

    // Atenção: essa linha tenta converter novamente ao fechar o modal.
    // Se o problema continuar, a mensagem pode reaparecer.
    converterValores()
}

// Aqui esperamos um clique no botão de fechar.
// Passamos a função sem () para executar somente quando clicar.
fecharModal.addEventListener("click", esconderErro);


// Aqui fazemos a conversão entre as moedas escolhidas.
async function converterValores() {

    // Aqui lemos o valor digitado e transformamos em número.
    const value = Number(inseriValor.value);

    // Aqui pegamos a sigla selecionada em cada menu.
    const origin = primeiroSelect.value;
    const destination = segundoSelect.value;

    // Aqui a verifica se digitaração algo
    // !value identifica valores como zero ou NaN.
    // value <= 0 também rejeita números negativos.
    if (!value || value <= 0) {
        // Aqui mostramos a mensagem de valor inválido.
        mostrarErro("Digite um valor maior que zero.");

        // Aqui encerramos esta execução da função.
        return;
    }

    //Aqui ele protege o codigo de erro, assim evita que o codigo Quebre
    // O try tenta executar o bloco.
    // Se ocorrer um erro aqui ou nas chamadas com await,
    // a execução pula para o catch.
    try {
        //Aqui ele estar esperando buscar a informação da api, da section
        // Aqui buscamos quanto a moeda de origem vale em reais.
        const feesOrigin = await findRealFees(origin);

        // Depois buscamos quanto a moeda de destino vale em reais.
        const feesDestination = await findRealFees(destination);

        //Matematica👍
        // Primeiro multiplicamos para transformar a origem em reais.
        // Depois dividimos para transformar os reais na moeda de destino.
        const calc = (value * feesOrigin) / feesDestination;

        //Aqui ele estar formatando a moeda
        // formatar devolve o resultado como texto de dinheiro.
        // textContent coloca esse texto na página.
        valueFinal.textContent = formatar(calc, destination);

        // Atenção: essa linha chama a própria função novamente.
        // Isso repete a conversão e as consultas à API sem parar.
        converterValores()

    }//Se tiver erro o catch manda
    // Aqui tratamos os erros que aconteceram dentro do try.
    // A mensagem é genérica: o erro pode vir da consulta,
    // da formatação ou de outra operação dentro daquele bloco.
    catch {
        mostrarErro(
            "Não foi possível obter a cotação dessa moeda neste momento."
        );
        

    }

}

//Aqui ele formata os valores para parecer com moeda
// value recebe o número e selfMade recebe o código da moeda.
function formatar(value, selfMade) {
    // Aqui criamos um formatador com o padrão brasileiro.
    return new Intl.NumberFormat("pt-BR", {
        // Aqui informamos que queremos mostrar dinheiro.
        style: "currency",

        // Aqui definimos qual moeda será usada.
        // Atenção: códigos como DOGE não são aceitos por esse formatador,
        // porque ele exige um código com três letras.
        currency: selfMade

        // Aqui aplicamos a formatação ao número recebido.
        // O return devolve o texto pronto.
    }).format(value);
}
//Aqui são os eventos
// Quando o primeiro select muda, atualizamos os nomes.
primeiroSelect.addEventListener("change", updateName);

// Quando o segundo select muda, também atualizamos os nomes.
segundoSelect.addEventListener("change", updateName);

// Aqui a conversão acontece a cada alteração no campo.
// Atenção: digitar vários números pode disparar várias consultas.
inseriValor.addEventListener("input", converterValores);

//Aqui ele carrega a function que busca os valores da api
// Aqui iniciamos o carregamento das moedas.
// Se essa função falhar, não há um catch ligado a essa chamada.
carregarMoedas();


