var totalCartas = 52;
var palos = "CDTP";
var cartasPalo = totalCartas / palos.lenght;

for (var i=0; i<=palos.lenght; i++){
  for (var j=1; j<=cartasPalo; i++){
    var multiploTres = j%3===0;
    var cartaRoja = palos==="C" || palos==="D";
    var paloCarta= palos[i];
    if (multiploTres && cartaRoja){
      console.log(j + palos[i]);
    }
  }
}
