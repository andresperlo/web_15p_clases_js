/* Bucles - while - do while - for */
//let contador = 0;
/* 
while (contador < 5) {
  console.log("Hola Mundo");
  contador++;
}

 */
/* do {
  console.log("Hola Mundo");
  contador++;
} while (contador < 5);
 */

/* for (let i = 0; i < 5; i++) {
  console.log("Hola Mundo");
} */

/* for aninadados */

for (let i = 0; i <= 30; i++) {
  for (let j = 1; j <= i; j++) {
    /* 
    
     document.write(`${i > 0 && i <= 9 ? `0${i}` : i}`);
    */
    document.write(`${j}`);
  }
  document.write(`<br>`);
}
