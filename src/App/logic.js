
    const riddle = ['A', 'D', 'A', 'G', 'A']//provisório, para testes
const checkRiddleHint = (hint) => {
    var checkRiddle = riddle.slice()
    let hits = []
    for (let index in riddle){
        if (riddle[index] == hint[index]) {
            hits.push({ backgroundColor: 'green' })
            checkRiddle.splice(checkRiddle.indexOf(hint[index]),1)
        } else if (checkRiddle.indexOf(hint[index]) != -1) {
            checkRiddle.includes(hint[index])?
            hits.push({ backgroundColor: 'yellow' })
            : hits.push('')
            checkRiddle.splice(checkRiddle.indexOf(hint[index]),1)
        } else {
            hits.push('')
        }
    }
    return hits
}

export {
    checkRiddleHint
}