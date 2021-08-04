function choice(array) {
    let max = array.length;
    max = Math.floor(max);
    const index = Math.floor(Math.random() * max);
    return array[index];
}

function remove(items, item) {
    if (items.find(element => element === item)) {
        const removed = items.splice(items.indexOf(item), 1);
        return removed[0];
    }
    return undefined;
}

export {choice, remove};