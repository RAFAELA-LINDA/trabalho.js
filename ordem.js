const usuarios=[
    {nome: "Carlos", idad: 32},
    {nome: "Ana", idade: 28},
    {nome: "Felipe", idade: 40}
];

const ana = usuarios.find(usuario => usuario.nome ==="Ana");
console.log(ana);

const usuariosAcimaDe30 = usuarios.filter(usuario => usuario.idade >
30);
console.log(usuariosAcimaDe30);

const usuariosOrdenadosPoridade = usuarios.sort((a,b)=> a.idade - b.idade);
console.log(usuariosOrdenadosPoridade);
