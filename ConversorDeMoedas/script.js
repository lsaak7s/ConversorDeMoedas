//Se Precisa ter interação Guarde em uma Variável
//Primeira moeda
const primeiroSelect = document.getElementById("selectOrigem");
const segundoSelect = document.getElementById("SelectDestino");

const moedav1 = document.getElementById("moedaOrigem");
const moedav2 = document.getElementById("MoedaDestino");

//INPUT Valor do User
const inseriValor = document.getElementById("inputOrigem")
//const valueinUser = document.getElementById("valueinUser");
const valueFinal = document.getElementById("valueFinal");

const modalErro = document.getElementById("modalErro");
const mensagemErro = document.getElementById("mensagemErro");

const fecharModal = document.getElementById("fecharModal");

let moedas = {};

async function carregarMoedas() {
    const response = await fetch(
        "https://economia.awesomeapi.com.br/json/available"
    );

    if (!response.ok) {
        throw new Error("Não foi possível carregar a lista de moedas");
    }

    const moneyAvailable = await response.json();

    primeiroSelect.innerHTML = "";
    segundoSelect.innerHTML = "";

    // Códigos das moedas que queremos mostrar.
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
        "BTC",
        "ETH",
        "LTC",
        "XRP",
        "DOGE"
    ];

    const selfMadeReal = Object.entries(moneyAvailable)
        .filter(([par]) => {
            const codigo = par.replace("-BRL", "");

            return (
                par.endsWith("-BRL") &&
                codigosPrincipais.includes(codigo)
            );
        })
        .map(([par, name]) => {
            const selfMadeMoney = par.replace("-BRL", "");
            const nameMoney = name.split("/")[0];

            return {
                selfMadeMoney,
                name: nameMoney
            };
        })//Aqui estamos deicando em ordem alfabetica
        .sort((a, b) => a.name.localeCompare(b.name));

    // O BRL precisa ser inserido porque não existe uma cotação BRL-BRL.
    selfMadeReal.unshift({
        selfMadeMoney: "BRL",
        name: "Real Brasileiro"
    });

    selfMadeReal.forEach((moeda) => {
        const firstOption = document.createElement("option");

        firstOption.value = moeda.selfMadeMoney;
        firstOption.textContent =
            `${moeda.selfMadeMoney} — ${moeda.name}`;

        const secondOption = firstOption.cloneNode(true);

        primeiroSelect.appendChild(firstOption);
        segundoSelect.appendChild(secondOption);
    });

    primeiroSelect.value = "BRL";
    segundoSelect.value = "USD";

    updateName();
}
//Toda vez que trocamos o valor do select ele atualiza
function updateName() {
    moedav1.textContent = primeiroSelect.options[primeiroSelect.selectedIndex].textContent;
    moedav2.textContent = segundoSelect.options[segundoSelect.selectedIndex].textContent;
    

}

async function findRealFees(currencyCode) {
    if (currencyCode === "BRL") {
        return 1;
    }

    const response = await fetch(
        `https://economia.awesomeapi.com.br/json/last/${currencyCode}-BRL`
    );

    if (!response.ok) {
        throw new Error(`Cotação ${currencyCode}-BRL não encontrada`);
    }

    const dados = await response.json();
    const bigPrice = Object.values(dados)[0];

    if (!bigPrice || !bigPrice.bid) {
        throw new Error("Moeda não possui cotação em relação ao real");
    }

    return Number(bigPrice.bid);
}


function mostrarErro(mensagem){
    mensagemErro.textContent = mensagem;
    modalErro.hidden = false;
    converterValores()
}

function esconderErro() {
    modalErro.hidden = true;
    converterValores()
}

fecharModal.addEventListener("click", esconderErro);


async function converterValores() {

    const value = Number(inseriValor.value);
    const origin = primeiroSelect.value;
    const destination = segundoSelect.value;
    // Aqui a verifica se digitaração algo
    if (!value || value <= 0) {
        mostrarErro("Digite um valor maior que zero.");
        return;
    }
    //Aqui ele protege o codigo de erro, assim evita que o codigo Quebre
    try {
        //Aqui ele estar esperando buscar a informação da api, da section
        const feesOrigin = await findRealFees(origin);
        const feesDestination = await findRealFees(destination);
        //Matematica👍
        const calc = (value * feesOrigin) / feesDestination;
        //Aqui ele estar formatando a moeda
        valueFinal.textContent = formatar(calc, destination);
        converterValores()

    }//Se tiver erro o catch manda
    catch {
        mostrarErro(
            "Não foi possível obter a cotação dessa moeda neste momento."
        );
        

    }

}

//Aqui ele formata os valores para parecer com moeda
function formatar(value, selfMade) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: selfMade
    }).format(value);
}
//Aqui são os eventos
primeiroSelect.addEventListener("change", updateName);
segundoSelect.addEventListener("change", updateName);
inseriValor.addEventListener("input", converterValores);
//Aqui ele carrega a function que busca os valores da api
carregarMoedas();
