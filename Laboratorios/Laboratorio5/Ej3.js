function Cuenta(num1, almacena){

    let contador=0
		for(let i=0;i<almacena.length;i++){
    		if(almacena[i]==num1)
        		contador++
        }
    		return contador;
		}	

console.log(Cuenta(1, [1, 1, 1, 2, 3, 1]))