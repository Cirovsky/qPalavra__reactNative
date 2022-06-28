
const compareRiddleHint = (hint) => {
    const riddle = ['G','A','T','O','S']//provisório, para testes
    
    let hits = []
    console.log(hits,riddle,hint)
    for (let index in riddle) {
        if (riddle[index] == hint[index]) {
            console.log(riddle[index], hint[index])
            hits.push({backgroundColor: 'green'})
        }else if(riddle.indexOf(hint[index]) != -1) {
            console.log(hint[index],index,riddle.indexOf(hint[index]) != -1)
            hits.push({backgroundColor: 'yellow'})
        }else{
            hits.push('')
        }
    }
    return hits
}



export {
    compareRiddleHint
}