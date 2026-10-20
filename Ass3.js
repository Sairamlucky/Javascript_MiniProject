var score = Number(prompt("Enter the score:"));
if (score >= 90){
 grade = "A";
  
}else if (score >= 70){
  grade = "B";
}else if (score >=50) {
  grade =  "c";
}else{
  grade = "F";
}
var status = score >=50 ? "passed" : "Failed";
console.log(`grade: ${grade}`);
console.log(`status: ${status}`);
