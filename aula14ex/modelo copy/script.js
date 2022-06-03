function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp') 
    let res = document.getElementById('res')
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (i == 0 || f == 0 || p == 0) {
        window.alert('[ERRO]!, Faltam Dados!')
    } else {
        res.innerHTML = 'Contando... <br>'
        if (i < f){
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
        }
            res.innerHTML += `\u{1F3C1}`
    }
        else {
            for (let c = i; c >= f; c -= p ) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
            
    }
}
              