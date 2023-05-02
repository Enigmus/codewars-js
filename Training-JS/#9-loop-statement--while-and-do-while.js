function padIt(str,n){
    let i = true;
    while(n > 0){
        if(i){
            str = '*' + str;
            i = false
        }else{
            str += '*';
            i = true;
        }
        n--
    }
    return str;
  }


  console.log(padIt('str',3));