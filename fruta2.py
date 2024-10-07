let frutas = [];

function adicionarFruta(nome, preco, quantidade) {
    const fruta = { nome, preco, quantidade };
    frutas.push(fruta);
}

function listarFrutas() {
    console.log("Frutas disponíveis:");
    frutas.forEach(fruta => {
        console.log(`Nome: ${fruta.nome}, Preço: R$${fruta.preco}, Quantidade: ${fruta.quantidade}`);
    });
}

function atualizarEstoque(nome, quantidade) {
    const fruta = frutas.find(f => f.nome === nome);
    if (fruta) {
        fruta.quantidade += quantidade;
        console.log(`Estoque atualizado: ${fruta.nome} agora tem ${fruta.quantidade} unidades.`);
    } else {
        console.log('Fruta não encontrada.');
    }
}

function venderFruta(nome, quantidade) {
    const fruta = frutas.find(f => f.nome === nome);
    if (fruta) {
        if (fruta.quantidade >= quantidade) {
            fruta.quantidade -= quantidade;
            console.log(`Venda realizada: ${quantidade} ${fruta.nome}(s) vendida(s).`);
        } else {
            console.log('Estoque insuficiente.');
        }
    } else {
        console.log('Fruta não encontrada.');
    }
}

adicionarFruta('Maçã', 3.00, 50);
adicionarFruta('Banana', 2.00, 30);
listarFrutas();
atualizarEstoque('Maçã', 20);
listarFrutas();
venderFruta('Banana', 5);
listarFrutas();
