
let heroi = "Murphy"
let nivelDoHeroi = 3400
let nivel

if( nivelDoHeroi <1000 ){
	nivel = "ferro"
}
else if( nivelDoHeroi >= 1001 && nivelDoHeroi <= 2000){
	nivel = "bronze" 
}
else if( nivelDoHeroi >= 2001 && nivelDoHeroi <= 5000){
	nivel = "prata"
}
else if( nivelDoHeroi >= 5001 && nivelDoHeroi <= 7000){
	nivel = "ouro"
}
else if( nivelDoHeroi >= 7001 && nivelDoHeroi <= 8000){
	nivel = "platina"
}
else if( nivelDoHeroi >= 8001 && nivelDoHeroi <= 9000){
	nivel = "ascendente"
}
else if( nivelDoHeroi >= 9001 && nivelDoHeroi <= 10000){
	nivel = "imortal"
}
else {
	nivel = "radiante"
}
console.log("O heroi de nome " + heroi + " está no nível " +   nivel)