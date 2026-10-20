let i =1
  for (i =1; i<=5; i++)
    console.log( `5  x ${i}  = ${5 * i}` );

//First number greather than 10 divisble by 6
let num = 11;
while (true){
  if(num > 10 && num % 6 === 0) {
    console.log(`Found:${num}`);
    break;
  }
  num++;
}