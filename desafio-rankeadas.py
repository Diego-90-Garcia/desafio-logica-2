vitorias = int(input('Quantidade de vitótias: '))
derrotas = int(input('Quantidade de derrotas: '))

def calcular_saldo(vitorias, derrotas):
    saldo = vitorias - derrotas
    return saldo

def classificar_nivel(saldo):
    if saldo <= 10:
        nivel = 'Ferro'
    elif saldo <= 20:
        nivel = 'Bronze'
    elif saldo <= 50:
        nivel = 'Prata'
    elif saldo <= 80:
        nivel = 'Ouro'
    elif saldo <= 90:
        nivel = 'Diamante'
    elif saldo <= 100:
        nivel = 'Lendário'
    elif saldo > 100:
        nivel = 'Imortal'
    return nivel

saldo = calcular_saldo(vitorias, derrotas)
nivel = classificar_nivel(saldo)

print(f"O Herói tem de saldo de **{saldo}** está no nível de **{nivel}**")