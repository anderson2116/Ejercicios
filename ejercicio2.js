function numeroPrimo(numero) {
    let contar = 0;
    for (i = 1; i <= numero; i++) {
      if (numero % i == 0) {
        contar = contar + 1;
      }
    }
    if (contar == 2) {
      console.log("El numero: " + numero + " es primo");
    } else {
      console.log("El numero: " + numero + " no es primo");
    }
   }
    
   numeroPrimo(365);