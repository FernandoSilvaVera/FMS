function compare(a, b) {

	var comparison = 0

	//Primero comparamos los puntos

	if (a.puntos < b.puntos)
		comparison = 1
	else if (a.puntos > b.puntos)
 	   comparison = -1

	//En caso de tener los mismos puntos comparamos los gs

	else if(a.gs < b.gs)
		comparison = 1
	else if(a.gs > b.gs)
 	   comparison = -1

	return comparison

}

function getParticipantes(temporada, pais){
	return pais[temporada] !== undefined ? pais[temporada].sort(compare): pais[pais.length-1].sort(compare)
}

function getInfo(temporada, pais){

	var participantes

	switch(pais){
		case "esp":
			participantes = getParticipantes(temporada, ESPANA)
			break;
		case "arg":
			participantes = getParticipantes(temporada, ARGENTINA)
			break;
	}

	return participantes

}

function main(temporada, pais){

	document.getElementById("mcs").innerHTML = ''

	var participantes = getInfo(temporada, pais)
	for(var i=0; i<participantes.length; i++)
		document.getElementById("mcs").innerHTML += '<tr><td>'+(i+1)+'</td><td>' + participantes[i].mc + '</td><td>' + participantes[i].gs + '</td><td>' + participantes[i].puntos + '</td></tr>'

}
