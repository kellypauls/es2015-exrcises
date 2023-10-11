
function choice(array) {
    let item = Math.floor(Math.random() * array.length);
    return array[item]
}

function remove(item, items){
    for (let i=0; i< items.length; i++){
        if (items[i] === item){
            return[...items.slice(0,i), ...items.slice(i+1)]
        }
    }

}

export default {choice, remove}