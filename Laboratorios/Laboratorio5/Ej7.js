var num = prompt("Ingrese el numero");
	sucesion(num);

		function sucesion(numero){
            var num1 = 0;
            var num2 = 1;
            var num3;
 
            document.write(num1+"");
            document.write(num2+"");
 
            for(var i=3; i <= numero;i++){
                num3 = num1 + num2;
                num1 = num2;
                num2 = num3;
                document.write(num3+"");
            }
        }