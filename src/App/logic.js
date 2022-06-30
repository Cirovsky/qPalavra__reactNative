import database from "../database"
    
const sortition = parseInt(Math.random()*(database.length))
const riddle = Array.from(database[sortition])
const jackpot = '#228B22'
const goodTry = '#DAA520'
const miss = '#4F4F4F'

const checkRiddleGuess = (guess) => {
    var checkRiddle = riddle.slice()
    let hits = []
    
    for (let index in riddle){
        if (riddle[index] == guess[index]) {
            if (index != guess.indexOf(guess[index]) && 
            hits[guess.indexOf(guess[index])]["backgroundColor"] == goodTry ){
                hits[guess.indexOf(guess[index])]["backgroundColor"] = miss
            }          
            hits.push({ backgroundColor: jackpot })
            checkRiddle.splice(checkRiddle.indexOf(guess[index]),1)
        } else if (checkRiddle.indexOf(guess[index]) != -1) {
            checkRiddle.includes(guess[index])?
            hits.push({ backgroundColor: goodTry })
            : hits.push({backgroundColor: miss})
            checkRiddle.splice(checkRiddle.indexOf(guess[index]),1)
        } else {
            hits.push({backgroundColor: miss})
        }
    }
    return hits
}
export {
    checkRiddleGuess,
    jackpot,
}