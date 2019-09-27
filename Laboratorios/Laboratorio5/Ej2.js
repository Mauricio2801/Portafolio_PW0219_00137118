function SUM_PROM(num){

    SUM_PROM=num.reduce((a, b) => a + b, 0)
    console.log("La suma es: " + SUM_PROM)
    console.log("El promedio es: " + SUM_PROM/(num.length+1))

    }

console.log(SUM_PROM([31.4, 13.5, 3, 1, 0]))