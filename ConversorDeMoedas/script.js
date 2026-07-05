const primeiroSelect = document.getElementById("primeiroSelect1");

const primeiraImg = document.getElementById("primeiraImg");
const moedav1 = document.getElementById("moedav1");
primeiroSelect.addEventListener("change", imgvalueUser1);

function imgvalueUser1() {

    if (primeiroSelect.value == "dolar") {
        moedav1.innerHTML = "Dólar"
        primeiraImg.src = "./assets/0bd85ff79a7dabec33201d95eb1a05fdea133971.png"
    }
    if (primeiroSelect.value == "libra") {
        moedav1.innerHTML = "Libra"
        primeiraImg.src = "./assets/logo.gif"
    }
    if (primeiroSelect.value == "euro") {
        moedav1.innerHTML = "Euro"
        primeiraImg.src = "./assets/logo.gif"
    }
    if (primeiroSelect.value == "real") {
        moedav1.innerHTML = "Real"
        primeiraImg.src = "./assets/logo.gif"
    }
}


const segundoSelect = document.getElementById("segundoSelect2");

const segundaImg = document.getElementById("segundaImg");
const moedav2 = document.getElementById("moedav2");
segundoSelect.addEventListener("change", imgvalueUser2);

function imgvalueUser2() {

    if (segundoSelect.value == "dolar") {
        moedav2.innerHTML = "Dólar Americano"
        segundaImg.src = "./assets/0bd85ff79a7dabec33201d95eb1a05fdea133971.png"
    }
    if (segundoSelect.value == "libra") {
        moedav2.innerHTML = "libra"
        segundaImg.src = "./assets/logo.gif"
    }
    if (segundoSelect.value == "euro") {
        moedav2.innerHTML = "Euro"
        segundaImg.src = "./assets/logo.gif"
    }
    if (segundoSelect.value == "real") {
        moedav2.innerHTML = "real"
        segundaImg.src = "./assets/logo.gif"
    }
}



const taxas = {
    real: 1.00,
    dolar: 5.19,
    euro: 5.93,
    libra: 6.88
};

/*Transformar o valor inserido em um número*/
const inseriValor = document.getElementById("inseriValor")
const valor = Number(inseriValor.value);

const origem = primeiroSelect.value;
const destino = segundoSelect.value;

/*Transforma o valor em reais */
const valorEmReal = valor * taxas[origem];
/*Dá o resultado da conversão */
const resultado = valorEmReal / taxas[destino];


const valueinUser = document.getElementById("valueinUser")
const valueFinal = document.getElementById("valueFinal")

/*BUTTON*/
const buttonConverter = document.getElementById("buttonConverter");
buttonConverter.addEventListener("click", convertervalues);


function convertervalues() {

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
        valueFinal.innerHTML = new Intl.NumberFormat("lb", {
            style: "currency",
            currency: "GBP"
        }).format(resultado)
    }
}














/*
function convertervalues() {

  

    if (Selectpaizv2.value === "dolar") {
        moedav2.innerHTML = "Dólar Americano"
        segundaImg.src = "./assets/0bd85ff79a7dabec33201d95eb1a05fdea133971.png"
    }

    if (Selectpaizv2.value === "libra") {
        moedav2.innerHTML = "libra"
        segundaImg.src = "./assets/logo.gif"
    }

    if (Selectpaizv2.value === "euro") {
        moedav2.innerHTML = "Euro"
        segundaImg.src = "./assets/logo.gif"
    }
    if (Selectpaizv2.value === "real") {
        moedav2.innerHTML = "real"
        segundaImg.src = "./assets/logo.gif"
    }

    

    const inseriValor = document.getElementById("inseriValor").value
    const resultadoUser = document.getElementById("resultadoinUser")
    const resultadofinal = document.getElementById("resultadofinal")

    resultadoUser.innerHTML = inseriValor;

    console.log(inseriValor)
    console.log(Selectpaizv2.value)

    if (Selectpaizv2.value === "real") {
        resultadofinal.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "R$"
        }).format(inseriValor / real)
    }

    if (Selectpaizv2.value === "dolar") {
        resultadofinal.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inseriValor / dolar)
    }

    if (Selectpaizv2.value === "euro") {
        resultadofinal.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inseriValor / euro)
    }

    if (Selectpaizv2.value === "libra") {
        resultadofinal.innerHTML = new Intl.NumberFormat("lb", {
            style: "currency",
            currency: "GBP"
        }).format(inseriValor / libra)
    }

}*/







