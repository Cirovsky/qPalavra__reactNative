import database from "../database"
    
const sortition = parseInt(Math.random()*(database.length))
const riddle = Array.from(database[sortition])
console.log(riddle)
console.log(database.length)

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

            : hits.push(null)
            checkRiddle.splice(checkRiddle.indexOf(hint[index]),1)
        } else {
            hits.push(null)
        }
    }
    return hits
}

export {
    checkRiddleHint
}