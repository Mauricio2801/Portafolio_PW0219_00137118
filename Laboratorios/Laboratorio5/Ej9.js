function Circulo(){
    radio = parseInt(prompt("Ingrese el radio: "))
    let Circulo = -1

	if (radio >= 0)
		Circulo = Math.PI * Math.pow(radio, 2);
	return Circulo

}

console.log(Circulo());