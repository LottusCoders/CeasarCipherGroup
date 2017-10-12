var option=prompt("Elija una opciones "+"\n" + "1. Cifrar "+"\n" + "2. Decifrar");
//validamos que ingrese la opcion correcta, si es correcta evaluamos la frase que no contenga números ni espacios
  if (option!=="1" && option!=="2") {
      } else {
        var phrase = prompt("Ingrese su frase por favor");
      }
 for(var i=0; i<phrase.length;i++) {
    if (phrase.charCodeAt(i) === " ".charCodeAt()||isNaN(phrase[i]) === false) {
        alert("No ingrese números ni espacios en blanco");
         var option=null;
            }
      }
      
                                    //FUNCION PARA CIFRAR
function cipher(phrase){
  var strLet ="";                                  //Creamos el string vacio donde se almacenara losnuevos valores.
 
  for(i=0;i<phrase.length;i++){                    //Recorremosla frase ingresada,Si esta en el rango de MAYUSCULA.
      var asc = phrase.charCodeAt(i)               //Obtenemos el codigo ASCII de cada letra
      if(asc>=65 && asc<=90){                      //Rango para solo las mayusculas
         var newAsc = (asc-65 +33)%26 + 65;        // Aplicamos la formula para obtener la nueva position ASCII.
         var newlet= String.fromCharCode(newAsc);  //Desciframos  ese nuevo codigo a letra.
         strLet += newlet;                         //Almacenamos letra por letra dentro del nuevo String.
      }                                            //en caso contrario si es MINUSCULA.
      else if(asc>=97 && asc<=122) {
        var newAscm = (asc-97 +33)%26 +97;         //en este caso la formula cambia porque el rango es otro.
        var newLetm = String.fromCharCode(newAscm);//Desciframos  ese nuevo codigo a letra.
          strLet += newLetm;                      //Almacenamos letra por letra dentro del nuevo String.
      }  
  } return strLet;                                  //Retornamos el nuevo string con las letras enncriptadas.
}

                                       //FUNCION PARA DESCIFRAR

function decipher(phrase){
  var strLet ="";                                  //Creamos el string vacio donde se almacenara losnuevos valores.
  for(i=0;i<phrase.length;i++){                    //Recorremosla frase ingresada,Si esta en el rango de MAYUSCULA.
      var asc = phrase.charCodeAt(i)               //Obtenemos el codigo ASCII de cada letra
      if(asc>=65&& asc<=90){                      //Rango para solo las mayusculas
         var newAsc = (asc+65 -33)%26 + 65;        // Aplicamos la formula para obtener la nueva position ASCII.
         var newlet= String.fromCharCode(newAsc);  //Desciframos  ese nuevo codigo a letra.
         strLet += newlet;                         //Almacenamos letra por letra dentro del nuevo String.      
      }                                            //en caso contrario si es MINUSCULA.
      else if(asc >=97 && asc <= 122){
        var newAscm = (Asc+97 +33)%26 +97;         //en este caso la formula cambia porque el rango es otro.
        var newLetm = String.fromCharCode(newAscm);//Desciframos  ese nuevo codigo a letra.
          strLet += newLetm;                      //Almacenamos letra por letra dentro del nuevo String.
      }
  }return strLet;                                  //Retornamos el nuevo string con las letras enncriptadas.
}

//Una vez validado todo pasamos a realizar la opcion que el usuario haya escogido y lo mostramos por medio de un alert()
  if(option=== "1"){
       alert("Texto Original : "+phrase+"\n"+"Texto Cifrado : "+cipher(phrase));
   } else if(option==="2"){
       alert("Texto Original : "+phrase+"\n"+"Texto Descifrado : "+decipher(phrase));
   }