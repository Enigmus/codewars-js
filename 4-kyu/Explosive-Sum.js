/* Скорость медленная, решение ни проходит на КодВарс :( */
/* function sum(num) {
    let count = 0;

    function partition(num, limit) {
        if (num > 0) {
            for (let i = Math.min(num, limit); i > 0; i--) {
                partition(num - i, i);
            }
        } else {
            count++;
        }
        return count;
    }

    return partition(num, num);
} */

/** Слишком долго просчитывается :(н */
function sum(num){
    if(num === 1) return 1;
    let temp = [];  //исходный массива
    let c = 0;
    for(let i = 0; i < num; i++)
        temp.push(1);   //заполняем его единицами. Размерность равна num
    //console.log(temp);

    do{ //выполняем цикл, пока в первом элементе не будет значения равного num        
        let min = 0;
        let s = 0;

        for(let i = 0;i < temp.length - 1; i++){            
            if(temp[min] > temp[i]){
                min = i;                    
            }             
        }
        temp[min]++;
        temp[temp.length - 1]--; 

        for(let i = 0; i < min + 1; i++)
            s+=temp[i]
        temp.splice(min + 1);
        for(let j = 0; j < num - s; j++)
            temp.push(1)        
        
        //console.log(temp); 
        c++;
    }while(temp[0] < num)
    return ++c;
}

/* console.log(sum(1)); //1
console.log(sum(2)); //2
console.log(sum(3)); //3
console.log(sum(4)); //5
console.log(sum(5)); //7
console.log(sum(10)); //42  */



/* нашел данное решение в интеренте, потому что не знаю как ускорить тот код, что я написал*/
console.time()
var memo = [];

function sum(n, m = n) {
    if (n == 0) return 1;
    if (n < 0 || m == 0) return 0;
    if (memo[n] && memo[n][m]) return memo[n][m];
    let total = sum(n, m - 1) + sum(n - m, m);
    if (!memo[n]) {
        memo[n] = [];
    }
    memo[n][m] = total;
    return total;
}
sum(1000)

console.timeEnd();