var Palin = prompt("Escribe la frase que deseas verificar","Oso");
   	verificando(Palin);

   		function verificando(Palin){
		Palin=Palin.toLowerCase().replace(/\s/g,"")
		alreves=Palin.split("").reverse().toString()

      	for (var i = 0; i < ((alreves.length)-1); i++) {
        	alreves=alreves.replace(",","")
      	};

        if(Palin==alreves){
            Resultado="es un Palindromo"
      	}
      	else{
			Resultado="no es un Palindromo"
      }

      	document.write("Tu frase "+Resultado)
		}


