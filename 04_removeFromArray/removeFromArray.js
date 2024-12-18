const removeFromArray = function(list, ...items) {
    finalList = [];
    for (i = 0; i < list.length; i++) {
        if (!(items.includes(list[i]))) {
            finalList.push(list[i]);
        }
    }
    return finalList;
}

// Do not edit below this line
module.exports = removeFromArray;
