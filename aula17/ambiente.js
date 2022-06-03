eu = {nome:'Bruno', 
altura:1.81, 
peso:85,
engordar(p=0) {
    console.log('Engordou')
    this.peso += p
}}
eu.engordar(2)
console.log(`Meu nome é ${eu.nome}, eu tenho ${eu.altura}m de altura e peso ${eu.peso}kg.`)
