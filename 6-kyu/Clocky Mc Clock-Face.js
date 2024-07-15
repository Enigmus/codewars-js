var whatTimeIsIt = function (angle) {
  if (angle === 0) angle = 360;
  let clock = Math.floor(angle / 30);
  let minute = Math.floor((angle % 30) * 2);
  return `${clock === 0 ? "12" : clock < 10 ? "0" + clock : clock}:${
    minute < 10 ? 0 : ""
  }${minute}`;
};

console.log(whatTimeIsIt(0)); //"12:00"

console.log(whatTimeIsIt(90)); //"03:00"

console.log(whatTimeIsIt(180)); //"06:00"

console.log(whatTimeIsIt(270)); //"09:00"

console.log(whatTimeIsIt(360)); //"12:00"

console.log(whatTimeIsIt(28.441646017239375));
