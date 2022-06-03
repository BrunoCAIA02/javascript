let num = [1, 2, 3, 4, 8, 12, 50, 44, 37]

// for (pos=0; pos<num.length; pos++) {
    //console.log(`A posição ${pos} tem o valor ${num[pos]}`)
//} 
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

pos = num.indexOf(28)
if (pos == -1) {
    console.log('O número não está dentro da array.')
} else {console.log(`o valor está na posição ${pos}`)
}

