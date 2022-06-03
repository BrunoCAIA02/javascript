var agora = new Date() //essas duas linhas são para pegar a hora atual
var hora= agora.getHours() //essas duas linhas são para pegar a hora atual
console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 12) {
    console.log(`Bom Dia!`)
}
else if (hora <= 18) {
    console.log(`Boa Tarde!`)
}
else {
    console.log(`Boa Noite!`)
}