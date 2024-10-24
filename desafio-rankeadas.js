let vitorias = 130
let derrotas = 2


function calcularSaldo(vitorias, derrotas) {
    const saldo = vitorias - derrotas
    return saldo
}

function classificarNivel(saldo) {
    let nivel;
    if (saldo <= 10) {
        nivel = 'Ferro'
    } else if (saldo <= 20) {
        nivel = 'Bronze'
    } else if (saldo <= 50) {
        nivel = 'Prata'
    } else if (saldo <= 80) {
        nivel = 'Ouro'
    } else if (saldo <= 90) {
        nivel = 'Diamante'
    } else if (saldo <= 100) {
        nivel = 'Lendário'
    } else {
        nivel = 'Imortal'
    }
    return nivel;
}

const saldo = calcularSaldo(vitorias, derrotas)
const nivel = classificarNivel(saldo)

console.log(`O Herói tem de saldo de **${saldo}** está no nível de **${nivel}**`)
