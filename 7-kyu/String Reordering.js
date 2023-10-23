/**
 * @param {Array} list 
 * @returns {String}Возвращайте значения в виде предложения, разделенного строками, в порядке целочисленного эквивалента их ключей (в порядке возрастания).
 * @example Input:
            List = [
                    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
                ]
            Output:
            'Vatsan took his dog for a spin'
 */
function sentence(list) {
    let obj = Object.assign(...list);
    let keys = Object.keys(obj).sort((a, b) => a - b);
    let str = "";
    for (let i = 0; i < keys.length; i++) {
        if (i < keys.length - 1) {
            str += obj[keys[i]] + " ";
        } else {
            str += obj[keys[i]];
        }
    }

    return str;
}

let list = [
    { 4: "dog" },
    { 2: "took" },
    { 3: "his" },
    { "-2": "Vatsan" },
    { 5: "for" },
    { 6: "a" },
    { 12: "spin" },
];

console.log(sentence(list)); //'Vatsan took his dog for a spin'
