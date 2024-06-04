function adicao (p1,p2) {
     let resultado = 0;
     resultado = p1 + p2
     return resultado
}

function subtracao (p1,p2) {
    let resultado = 0;
    resultado = p1 - p2
    return resultado
}

function multiplicacao (p1,p2) {
    let resultado = 0;
    resultado = p1 * p2
    return resultado
}

function divisao (p1,p2) {
    let resultado = 0;
    resultado = p1 / p2
    return resultado
}

function print(mensagem) {
    console.log(mensagem)
}

print (adicao(20,33));
print ("resultado:"+ adicao(8,18));

print(adicao(multiplicacao(5,3),divisao(30,adicao(2,3))));
