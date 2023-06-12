/*
    Entre 0h e 11h = Bom dia
    Entre 12h e 17h = Boa tarde
    Entre 18h e 23h = Boa noite

    If pode ser usado sozinho
    Todo Else precisa de um If
    Vários Else Ifs podem ser utilizados
    Somente um Else na checagem
*/
const hora = 2;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite')
} else {
    console.log('Olá')
}