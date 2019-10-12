function ordenarAscendente(array=[22, 1, 100000, 2, 4, 5]){
	let a, b;
	for(i=0; i<array.length -1; i++){
		for(j=0; j<array.length -1; j++){
			if (array[j]>array(j+1)){
				a = array[j];
				b = array[j+1];
				array[j] = b;
				array [j+1] = a;
			}
		}
	}

	return console.log(array);
}

