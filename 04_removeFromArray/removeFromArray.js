function removeOneElementFromArray (arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

const removeFromArray = function(array, ...items) {
    for (let i = 0; i < items.length; i++) {
        array = removeOneElementFromArray(array, items[i]);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
