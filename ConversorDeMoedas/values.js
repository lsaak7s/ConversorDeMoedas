const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json())
console.log(data)

const taxas = {
    real: data.BTCBRL.high,
    dolar: data.USDBRL.high,
    euro: data.EURBRL.high,
    libra: data.GBPBRL.high
}


function limpo() {
    taxas.real = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(resultado)
    console.log(resultado)
}

    