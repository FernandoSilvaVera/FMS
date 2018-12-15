var FREESTYLER = [
	{mc: "Chuty",		gs: "2425",		puntos: 16},
	{mc: "Walls",		gs: "2222", 	puntos: 14},
	{mc: "Zasko",		gs: "2019", 	puntos: 9},
	{mc: "Errecé",		gs: "2073", 	puntos: 10},
	{mc: "Force",		gs: "1976", 	puntos: 4},
	{mc: "Blon",		gs: "2138", 	puntos: 11},
	{mc: "Hander",		gs: "2016", 	puntos: 4},
	{mc: "Arkano",		gs: "2060", 	puntos: 10},
	{mc: "Skone",		gs: "2115", 	puntos: 8},
	{mc: "BTA",			gs: "2012", 	puntos: 4}
]

function compare(a, b) {

	var comparison = 0;

	//Primero comparamos los puntos

	if (a.puntos < b.puntos) 
		comparison = 1;
	else if (a.puntos > b.puntos) 
 	   comparison = -1;

	//En caso de tener los mismos puntos comparamos los gs

	else if(a.gs < b.gs)
		comparison = 1;
	else if(a.gs > b.gs)
 	   comparison = -1;

	return comparison;

}

function main(){

	FREESTYLER.sort(compare)

	for(var i=0; i<FREESTYLER.length; i++)
		document.getElementById("mcs").innerHTML += '<tr><td>'+(i+1)+'</td><td>' + FREESTYLER[i].mc + '</td><td>' + FREESTYLER[i].gs + '</td><td>' + FREESTYLER[i].puntos + '</td></tr>';

}
