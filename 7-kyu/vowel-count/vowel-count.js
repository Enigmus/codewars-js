const getCount = (str) =>
  str.split('').reduce((acc,el)=>(['a', 'e', 'i', 'o', 'u'].includes(el)) ? acc + 1 : acc,0);