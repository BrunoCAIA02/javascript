var idade = 35
if (idade >= 18 && idade <= 65) {
    console.log(`Você tem ${idade} anos. O voto é Obrigatório!`)
}
else if (idade <18 && idade >=16 || idade > 65) {
        console.log(`Você tem ${idade} anos. O voto é Opcional!`)
    }
else if (idade <16) {
        console.log(`Você tem ${idade} anos. Você não vota!`)
        }
