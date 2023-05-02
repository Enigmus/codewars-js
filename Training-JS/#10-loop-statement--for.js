function pickIt(arr){
    var odd=[],even=[];
    const ln = arr.length;
    for(let i = 0; i < ln; i++){
      if(arr[i] % 2 == 0)
        even.push(arr[i]);
      else
        odd.push(arr[i]);
    }
    
    
    return [odd,even];
  }