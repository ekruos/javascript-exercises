const getTheTitles = function(arr) {
    let array = [];
    for (let item of arr) {
        array.push(item.title);
    }
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
