function riddleWord(riddle, hint) {
    const riddle2 = riddle
    let checkRiddle = ['*', '*', '*', '*', '*']

    riddle = turnArray(riddle)
    hint = turnArray(hint)

    for (let index in riddle) {
        if (riddle[index] == hint[index]) {
            checkRiddle.splice(index, 1, riddle[index])
        } else if(hint.indexOf(riddle[index] != -1)) {//define se função closeEnough será chamada
            closeEnough(riddle, riddle[index], hint, checkRiddle)//função closeEnough retornará quais letra estão presentes em outros indexs
        }

    }

    isWon(checkRiddle,riddle2)

}

function turnArray(palavra) {
    let array = []
    for (let i in palavra) {
        array.push(palavra[i])
    }
    return array
}


function closeEnough(riddle, letra, chute, confere) {

    //> variáveis com posições da letra na riddle
    const posCha1 = riddle.indexOf(letra)
    const posChaFim = riddle.lastIndexOf(letra)
    const posCha2 = riddle.lastIndexOf(letra, posChaFim - 1)

    //> variáveis com posições da letra no chute
    const posChute1 = chute.indexOf(letra)
    const posChuteFim = chute.lastIndexOf(letra)
    const posChute2 = chute.lastIndexOf(letra, posChuteFim - 1)

    if (posChute1 != -1) {

        if (posCha1 == posChaFim) {
            aplicarSplice(posChute1, confere, letra)
        } else if (posCha1 != posChaFim && posChute1 == posChute2) {
            aplicarSplice(posChute1, confere, letra)
            aplicarSplice(posChuteFim, confere, letra)
        } else if (posCha1 != posChaFim && posCha1 == posCha2 && posChute1 != posChute2) {
            aplicarSplice(posChute1, confere, letra)
            aplicarSplice(posChute2, confere, letra)
        } else if (posCha1 != posChaFim && posCha1 != posCha2 && posChute1 != posChute2) {
            aplicarSplice(posChute1, confere, letra)
            aplicarSplice(posChute2, confere, letra)
            aplicarSplice(posChuteFim, confere, letra)
        }
    }
}

//>retorna confere e número de tentativas
//> se zero, ele retornará que o usuário perdeu
//>> pausar a possibilidade de novas inserções no front-end até um nova riddle
function isWon (confere,riddle){
    console.log(confere)
    if (confere.indexOf('*') == -1){
        console.log('você acertou!')
        tentativas = 5
        
    }else if (tentativas == 0){
            console.log(`Que pena, você perdeu!!, a palavra é '${riddle}'.`)
    }else if (confere.indexOf('*') != -1 && tentativas > 0){
            tentativas--
    }
}

//aplicarSplice evita aplicar o splice no elemento da array diferente de '*'
function aplicarSplice(posicao, confere, letra){
    confere[posicao] == '*'? confere.splice(posicao, 1, `|${letra}|`) : ''

}
/*==========================Contador=========================*/
//>será o número de tentativas disponíveis ao usuário
//>o número de tentativas zerará provisoriamente toda vez que for advinhado a riddle
let tentativas = 5

/*======================Testes/Variáveis=====================*/

//>> riddle será inserida através de função que sorteia palavra em banco de dados
//>> a riddle irá mudar a cada 24 horas
//>> riddles terão 5 letras
const riddle1 = 'gatos'
const riddle2 = 'aguas'
const riddle3 = 'barco'


//>> chutes serão substituídos por função que receberá POST do front-end
//>> no final, os chutes são serão lançados se a palavra do chute estiver no banco de dados
//> os chutes serão dosados pela variávei tentativa
//>>dúvida: como encerrar as tentativas?

const chuteA1 = 'testa'
const chuteA2 = 'artes'
const chuteA3 = 'marte'
const chuteA4 = 'batom'
const chuteA5 = 'ratos'
const chuteA6 = 'gatos'

const chuteB1 = 'adaga'
const chuteB2 = 'aguas'

const chuteC1= 'prata'
const chuteC2= 'prato'
const chuteC3= 'carro'
const chuteC4= 'caldo'
const chuteC5= 'palco'
const chuteC6= 'parco'

riddleWord(riddle1, chuteA1)
riddleWord(riddle1, chuteA2)
riddleWord(riddle1, chuteA3)
riddleWord(riddle1, chuteA4)
riddleWord(riddle1, chuteA5)
riddleWord(riddle1, chuteA6)

riddleWord(riddle2, chuteB1)
riddleWord(riddle2, chuteB2)

riddleWord(riddle3, chuteC1)
riddleWord(riddle3, chuteC2)
riddleWord(riddle3, chuteC3)
riddleWord(riddle3, chuteC4)
riddleWord(riddle3, chuteC5)
riddleWord(riddle3, chuteC6)