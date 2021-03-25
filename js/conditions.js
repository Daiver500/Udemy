if (10 === 10) {
  console.log("Right reply");
}

const number = 100;

if (number > 101) {
  console.log("No");
} else {
  console.log("Yes");
}

if (number === 200) {
  console.log("Not right");
} else if (number > 500) {
  console.log("No!!!");
} else if (number > 1000) {
  console.log("Foooo!!!");
} else {
  console.log("You are not good!");
}

const purple = "purple";

switch(purple) {
  case "red":
    console.log("wrong color");
    break;
  case "yellow":
    console.log("you are yellow");
    break;
  case "purple":
    console.log("here you are good");
    break;
  default:
    console.log("mission impossible");
    break;
}

