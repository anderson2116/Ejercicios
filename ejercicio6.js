function diasFaltan(año, mes) {
     if (año >= 2021 && mes <= 12) {
    
      let fechaFutura = new Date(año, mes - 1);
      return fechaFutura;
    
    } else {
      console.log("ERROR");
    }
    
   }
   let fechaActual = Date.now();
   let dias = Date.parse(diasFaltan(2021, 03)) - fechaActual;
   let total = dias / 86400000;
   console.log(total.toFixed());