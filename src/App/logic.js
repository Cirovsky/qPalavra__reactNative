import database from "../database"
    
const sortition = parseInt(Math.random()*(database.length))
const riddle = Array.from(database[sortition])
const jackpot = '#228B22'
const goodTry = '#DAA520'

const checkRiddleGuess = (hint) => {
    var checkRiddle = riddle.slice()
    let hits = []
    for (let index in riddle){
        if (riddle[index] == hint[index]) {
            hits.push({ backgroundColor: jackpot })
            checkRiddle.splice(checkRiddle.indexOf(hint[index]),1)
        } else if (checkRiddle.indexOf(hint[index]) != -1) {
            checkRiddle.includes(hint[index])?
            hits.push({ backgroundColor: goodTry })

            : hits.push({})
            checkRiddle.splice(checkRiddle.indexOf(hint[index]),1)
        } else {
            hits.push({})
        }
    }
    return hits
}
export {
    checkRiddleGuess,
    jackpot,
}