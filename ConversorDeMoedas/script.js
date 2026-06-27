const converterButton = document.getElementById("converterButton");

function convertervalues() {

    const resultadovalor = document.getElementById("resultadovalor");
    const resultadofinal = document.getElementById("resultadofinal");

    const inseriValor = document.getElementById("inseriValor").value

    const dolar = 5.2;
    const euro = 7.5;
    const libra = 9.0;

    const valorEmDolar = inseriValor / dolar

    resultadovalor.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inseriValor)

    resultadofinal.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valorEmDolar)
    
   

    console.log(valorEmDolar)
}


converterButton.addEventListener("click", convertervalues);
