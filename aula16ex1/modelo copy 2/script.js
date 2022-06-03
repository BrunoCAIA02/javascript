let num = document.querySelector('input#txtnum')
let lis = document.querySelector('select#seladi')
let valores = []
let res = document.querySelector('div#res')

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function adicionar() {
    if (isNumber(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado.`
        lis.appendChild(item)
        res.innerHTML= ''
    }
    else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione um valor na lista antes de clicar em finalizar')
    }
    else {
        res.innerHTML = ''
        tot = valores.length
        maior = valores[0]
        menor = valores[0]
        soma = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
    }
    res.ineerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} valores cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.`
}
    