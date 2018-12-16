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

function getInfo(temporada, pais, dar_temporada){

	var participantes
	var temporadas

	switch(pais){
		case "esp":
			participantes	= getParticipantes(temporada, ESPANA)
			temporadas		= ESPANA.length
			break;
		case "arg":
			participantes	= getParticipantes(temporada, ARGENTINA)
			temporadas 		= ARGENTINA.length
			break;
	}

	return dar_temporada ? temporadas : participantes

}

function main(temporada, pais){

	document.getElementById("mcs").innerHTML = ''
	document.getElementById("temporadas").innerHTML = ''

	var participantes	= getInfo(temporada, pais, false)
	var temporadas		= getInfo(temporada, pais, true)

	for(var i=0; i<participantes.length; i++)
		document.getElementById("mcs").innerHTML += '<tr><td>'+(i+1)+'</td><td>' + participantes[i].mc + '</td><td>' + participantes[i].gs + '</td><td>' + participantes[i].puntos + '</td></tr>'

	for(var i=0; i<temporadas; i++){
		document.getElementById("temporadas").innerHTML += '<option id="'+i+'">' +(i+1)+ '</option>'
		document.getElementById(i).setAttribute("onclick", "main("+i+", '"+pais+"')")
	}

	document.getElementById("temporadas").selectedIndex = temporada;

}
