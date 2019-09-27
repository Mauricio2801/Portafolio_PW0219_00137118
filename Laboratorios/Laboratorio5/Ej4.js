function numero(){
    let arreglo = [];
    let intento = false;
    for(let i=0; i <20; i++){
        arreglo.push(Math.floor(Math.random()*101));
    }

    var suerte =parseInt(prompt("Adivina un numero entre 1 y 50"))
    arreglo.forEach(element => {
        if(element ==suerte)
        intento = true;
    });
    if (intento)
    console.log("Correcto!!! Felicidades adivinaste")
    else
    console.log("LO siento.... La regaste :(")
}