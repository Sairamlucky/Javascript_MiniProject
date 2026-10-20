function RectangleArea(length,width){
    return length * width
};
console.log("standard function Area (Default 5x4):",RectangleArea(5,4));

const arrowArea = (length,width) => {
  return length * width
};
console.log("Arrow Function Area (Custom 10x3):",arrowArea(10,3)
);
//function scope
function  showMessage(){
  var text = "Im a great learner";
  console.log(text);
};
showMessage();
console.log(secret); //not accessef dor outside