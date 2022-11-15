/**
 * @param {Array<string>} array
 */
const arr = ['a', 'ab', 'abc', 'cd', 'def', "gh"]

function fack(array){
    if(!array[0]) return

    const data = array.map(c => c.length).sort()
    let maxCount = 0, count = 0, item = 0;

    for(let i=0;i<data.length-1;i++){
        if(data[i+1] === data[i]) count++;
        else if(count > maxCount) {maxCount = count; item=data[i];}
        else count = 0
    }

    return array.filter(c => c.length === maxCount)
}

/**
 * @param {Array<number>} array
 */

function fack2(array){
    if(array.length < 2) return

    return array.sort().slice(-2).reduce((p,c) => p + c, 0)
}
