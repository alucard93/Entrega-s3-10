    function positions (firstPlace, secondPlace, lastPlace){

     athletes = ['Rafael', 'Manoel','Daniel'];
    
    if(athletes[2] = lastPlace ){

        return `1ª - Colocado Rafael\n2ª - Colocado Daniel\n3º - Colocado Manoel`

    }else if(athletes[2] = secondPlace) {

        return `1ª - Colocado Daniel\n2ª - Colocado Rafael\n3º - Colocado Manoel`

    }else if(athletes[2] = firstPlace){

        return `1ª - Colocado Daniel\n2º - Colocado Manoel\n3ª - Colocado Rafael`

    }else{

        return `Coloque novamente os atletas`

    }
}
console.log(positions(2,1,0))    // Definidos os valores de cada atleta é só colocar o número
//console.log(positions(1,2,0)) 
//console.log(positions(0,1,2)) 


//Assumidos os valores de Daniel = [2] Obs: posição 2, definida na linha 3 do VSC.
//Assumidos os valores de Manoel = [1] Obs: posição 1, definida na linha 3 do VSC. 
//Assumidos os valores de Rafael = [0] Obs: posição 0, definida na linha 3 do VSC. 
