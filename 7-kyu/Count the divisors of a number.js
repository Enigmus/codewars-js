function getDivisorsCnt(n){
    let c = 0;
  for(let i = 1; i <= n; i++){
    if(n % i === 0)
      c++
  }
  return c
}



console.log(getDivisorsCnt(1),); // 1
console.log(getDivisorsCnt(10)); // 4
console.log(getDivisorsCnt(11)); // 2
console.log(getDivisorsCnt(54)); // 8