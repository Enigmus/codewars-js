/**
 * 
 * @param {Object} suspectInfo 
 * @param {Array} dead 
 * @returns {String} 
 */
function killer(suspectInfo, dead) {
    for (let key in suspectInfo) {
        if (dead.every((el) => suspectInfo[key].includes(el))) return key;
    }
}

console.log(
    killer(
        {
            James: ["Jacob", "Bill", "Lucas"],
            Johnny: ["David", "Kyle", "Lucas"],
            Peter: ["Lucy", "Kyle"],
        },
        ["Lucas", "Bill"]
    )
); // "James"
