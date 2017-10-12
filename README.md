#   Inicio
*   El programa pide al usuario que ingrese una frase.
*   Luego el programa lee la frase del usuario y la almacena en una variable llamada **sentence** Valida por medio de un for letra por letra que no contenga ni números ni espacios en blanco. 
*   **Si** sentence contiene espacios en blanco o números **entonces** el programa se detiene.

*   Pero **Si sentence** 
~~~
               !== "number" && !== " "
~~~

entonces se aplica por medio de un: 
~~~
                  for charCodeAt() 
~~~
para obtener el número Ascii de cada letra y la almacena en una nueva variable llamada **numAscii**.

* Ahora aplicará la formula para cifrar las Mayúsculas:
~~~
             (numAscii[x]-65+33)%26+65 
~~~
y para cifrar las minusculas:
~~~
              (numAscii[x]-97+33)%26+97
~~~

* Estos nuevos valores se almacenaran en una nueva variable llamada **change**.

* Ahora nuevamente recorriendo **change** por medio de un **for** aplicaremos:
~~~
                  String.fromCharCode() 
~~~
para convertir los valores numericos a letras.

* Por medio de 
~~~
                       join("") 
~~~
juntaremos las letras y esta frase cifrada la almacenaremos en la nueva variable **newCipher**.

* Por ultimo mostraremos el resultado: **TEXTO CODIFICADO: "HhHh" + Texto ORIGINAL: "AaAa" al usuario.** 

**Fin.**