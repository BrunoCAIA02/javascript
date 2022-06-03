function Tabuada() {
    let pegar_numero = window.document.getElementById('txtn')
    let numero = Number(pegar_numero.value)
    let tab = document.getElementById('seltab')
    if (numero == 0 || numero < 0) {
        window.alert('Não conseguimos calcular a tabuada de zero e de números negativos!')
    }
    else {
        tab.innerHTML = '' // Limpar a tabuada 
        for (m=1; m<=10; m++) {
            let item = document.createElement('option')
            item.text = `${numero} x ${m} = ${numero*m}` 
            tab.appendChild(item) //Adiciona o item.text acima à tabuada, que no caso é tab
    } 
    
}}          