function convertervalues() {

    const converterButton = document.getElementById("converterButton");
    const Selectpaiz = document.getElementById("Selectpaiz")

    const resultadovalor = document.getElementById("resultadovalor");
    const resultadofinal = document.getElementById("resultadofinal");

    const inseriValor = document.getElementById("inseriValor").value

    const dolar = 5.2;
    const libra = 7.5;
    const euro = 9.0;

    if (Selectpaiz.value == "dolar") {
        resultadofinal.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inseriValor / dolar)
    }

    if (Selectpaiz.value == "euro") {
        resultadofinal.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inseriValor / euro)
    }


    if (Selectpaiz.value == "libra") {
        resultadofinal.innerHTML = new Intl.NumberFormat("lb", {
            style: "currency",
            currency: "GBP"
        }).format(inseriValor / libra)
    }

    resultadovalor.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inseriValor)


}

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
converterButton.addEventListener("click", convertervalues);

