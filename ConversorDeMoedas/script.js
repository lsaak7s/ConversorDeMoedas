/*Se Precisa ter interação Guarde em uma Variável */
const primeiroSelect = document.getElementById("primeiroSelect1");
/*Primeira moeda*/
const primeiraImg = document.getElementById("primeiraImg");
const moedav1 = document.getElementById("moedav1");
/*Ele estar olhando 👀*/
primeiroSelect.addEventListener("change", imgvalueUser1);

/*Muda a primeira imagem e o texto da moeda */
function imgvalueUser1() {

    if (primeiroSelect.value == "dolar") {
        moedav1.innerHTML = "Dólar Americano"
        primeiraImg.src = "./assets/EUA.png"
    }
    if (primeiroSelect.value == "libra") {
        moedav1.innerHTML = "Libra Esterlina"
        primeiraImg.src = "./assets/LB.png"
    }
    if (primeiroSelect.value == "euro") {
        moedav1.innerHTML = "Euro Europeu"
        primeiraImg.src = "./assets/EUR.png"
    }
    if (primeiroSelect.value == "real") {
        moedav1.innerHTML = "Real Brasileiro"
        primeiraImg.src = "./assets/BR.png"
    }
}

/*Segunda moeda */
const segundoSelect = document.getElementById("segundoSelect2");

/*Segunda moeda*/
const segundaImg = document.getElementById("segundaImg");
const moedav2 = document.getElementById("moedav2");
/*Ele estar olhando 👀*/

segundoSelect.addEventListener("change", imgvalueUser2);
/*Muda a segunda imagem e o texto da moeda */

function imgvalueUser2() {

    if (segundoSelect.value == "dolar") {
        moedav2.innerHTML = "Dólar Americano"
        segundaImg.src = "./assets/EUA.png"
    }
    if (segundoSelect.value == "libra") {
        moedav2.innerHTML = "Libra Esterlina"
        segundaImg.src = "./assets/LB.png"
    }
    if (segundoSelect.value == "euro") {
        moedav2.innerHTML = "Euro Europeu"
        segundaImg.src = "./assets/EUR.png"
    }
    if (segundoSelect.value == "real") {
        moedav2.innerHTML = "Real Brasileiro"
        segundaImg.src = "./assets/BR.png"
    }
}

/*
const real = data.BTCBRL.high
const dolar = data.USDBRL.high
const euro = data.EURBRL.high
const libra = data.GBPBRL.high

*/
/*BUTTON*/
const buttonConverter = document.getElementById("buttonConverter");
buttonConverter.addEventListener("click", convertervalues);
/*INPUT Valor do User*/
const inseriValor = document.getElementById("inseriValor")
/*Função de conversão de valores */
async function convertervalues() {

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json())
    console.log(data)
    
    const taxas = {
        real: data.BTCBRL.high,
        dolar: data.USDBRL.high,
        euro: data.EURBRL.high,
        libra: data.GBPBRL.high
    }
    
    /*Pega o valor do input e transforma em número */
    const valor = Number(inseriValor.value);
    /*Pega o valor dos select e transforma em string */
    const origem = primeiroSelect.value;
    const destino = segundoSelect.value;

    /*Transforma o valor em reais */
    const valorEmReal = valor * taxas[origem];
    /*Dá o resultado da conversão */
    const resultado = valorEmReal / taxas[destino];

    /*Mostra o valor do input e o resultado da conversão */
    const valueinUser = document.getElementById("valueinUser")
    const valueFinal = document.getElementById("valueFinal")
    /*Vai amostra inserido*/
    valueinUser.innerHTML = valor;

    if (destino === "real") {
        valueFinal.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(resultado)
    }
    if (destino === "dolar") {
        valueFinal.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(resultado)
    }
    if (destino === "euro") {
        valueFinal.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(resultado)
    }
    if (destino === "libra") {
        valueFinal.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(resultado)
    }/*Use isso para chamar a função toda vez que tiver uma alteração */
    primeiroSelect.addEventListener("change", convertervalues);
    segundoSelect.addEventListener("change", convertervalues);
}








