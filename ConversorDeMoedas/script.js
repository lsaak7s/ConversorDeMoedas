const primeiroSelect = document.getElementById("primeiroSelect")

function imgvalueUser() {


    primeiroSelect.addEventListener("change", imgvalueUser);

    buttonConverter.addEventListener("click", imgvalueUser);
    const origem = primeiroSelect.value;

    if (primeiroSelect.value == "dolar") {
        primeiraImg.innerHTML = "Dólar Americano"
        primeiraImg.src = "./assets/0bd85ff79a7dabec33201d95eb1a05fdea133971.png"
    }
    if (primeiroSelect.value == "libra") {
        primeiraImg.innerHTML = "libra"
        primeiraImg.src = "./assets/logo.gif"
    }
    if (primeiroSelect.value == "euro") {
        primeiraImg.innerHTML = "Euro"
        primeiraImg.src = "./assets/logo.gif"
    }
    if (primeiroSelect.value == "real") {
        primeiraImg.innerHTML = "real"
        primeiraImg.src = "./assets/logo.gif"
    }

}


const segundoSelect = document.getElementById("segundoSelect")

function convertervalues() {

    const destino = segundoSelect.value;
    const valor = primeiroSelect(inseriValor.value);

    const valorEmReal = valor * taxas[origem];
    const resultado = valorEmReal / taxas[destino];

    const inseriValor = document.getElementById("inseriValor").value
    const valueinUser = document.getElementById("valueinUser")
    const valueFinal = document.getElementById("valueFinal")

    segundoSelect.addEventListener("change", convertervalues)

    converterButton.addEventListener("click", convertervalues);
    resultadoUser.innerHTML = inseriValor;

    console.log(inseriValor)
    console.log(segundoSelect.value)

    /*to replace img & text*/
    if (segundoSelect.value === "dolar") {
        moedav2.innerHTML = "Dólar Americano"
        imgfinalv2.src = "./assets/0bd85ff79a7dabec33201d95eb1a05fdea133971.png"
    }
    if (segundoSelect.value === "libra") {
        moedav2.innerHTML = "libra"
        imgfinalv2.src = "./assets/logo.gif"
    }
    if (segundoSelect.value === "euro") {
        moedav2.innerHTML = "Euro"
        imgfinalv2.src = "./assets/logo.gif"
    }
    if (segundoSelect.value === "real") {
        segundaImg.innerHTML = "real"
        imgfinalv2.src = "./assets/logo.gif"
    }

    /* Calculos*/
    if (segundoSelect.value === taxas) {
        resultadofinal.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "R$"
        }).format(inseriValor / taxas)
    }
    if (segundoSelect.value === taxas) {
        resultadofinal.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inseriValor / taxas)
    }
    if (segundoSelect.value === taxas) {
        resultadofinal.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inseriValor / taxas)
    }
    if (segundoSelect.value === taxas) {
        resultadofinal.innerHTML = new Intl.NumberFormat("lb", {
            style: "currency",
            currency: "GBP"
        }).format(inseriValor / taxas)
    }
}

const Selectpaizv2 = document.getElementById("Selectpaizv2")

Selectpaizv2.addEventListener("change", convertervalues)

converterButton.addEventListener("click", convertervalues);








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






/*const inseriValor = document.getElementById("inseriValor").value
    const resultadoUser = document.getElementById("resultadoUser");
    const resultadofinal = document.getElementById("resultadofinal");*/






/*
 
   Selectpaizv2.addEventListener("change", convertervalues);
 
    resultadoUser.innerHTML = Selectpaizv1;
 
    console.log(Selectpaizv1.value)*/

/*
function convertervalues() {

    const dolar = 5.2;
    const libra = 7.5;
    const euro = 9.0;
    const real = 0.19;

    
    const inseriValor = document.getElementById("inseriValor").value
    const resultadoUser = document.getElementById("resultadoUser");
    const resultadofinal = document.getElementById("resultadofinal");




    const Selectpaizv2 = document.getElementById("Selectpaizv2")


    if (Selectpaizv2.value == "real") {
        resultadofinal.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "R$"
        }).format(inseriValor / real)
    }


    if (Selectpaizv2.value == "dolar") {
        resultadofinal.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inseriValor / dolar)
    }

    if (Selectpaizv2.value == "euro") {
        resultadofinal.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inseriValor / euro)
    }


    if (Selectpaizv2.value == "libra") {
        resultadofinal.innerHTML = new Intl.NumberFormat("lb", {
            style: "currency",
            currency: "GBP"
        }).format(inseriValor / libra)
    }

    resultadoUser.innerHTML = Selectpaizv2;

    console.log(Selectpaizv2.value)
}








*/



/*
function chang() {
    const moeda = document.getElementById("moeda")
    const imgfinal = document.getElementById("imgfinal")



    if (Selectpaiz.value == "dolar") {
        moeda.innerHTML = "Dólar Americano"
        imgfinal.src = "./assets/0bd85ff79a7dabec33201d95eb1a05fdea133971.png"
    }

    if (Selectpaiz.value == "libra") {
        moeda.innerHTML = "libra"
        imgfinal.src = "./assets/logo.gif"
    }

    if (Selectpaiz.value == "euro") {
        moeda.innerHTML = "Euro"
        imgfinal.src = "./assets/logo.gif"
    }
    convertervalues()

}


Selectpaiz.addEventListener("change", chang);




const Selectpaizv1 = document.getElementById("Selectpaizv1")

Selectpaizv1.addEventListener("change", test1);

*/