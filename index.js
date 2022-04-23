function positions (firstPlace, secondPlace, lastPlace){

    let athletes = [firstPlace, secondPlace, lastPlace];
    
   if(athletes[2] == "Daniel" ){

       return `1ª - Colocado Manoel\n2ª - Colocado ${athletes[2]}\n3º - Colocado Rafael`

   }else if(athletes[1] == "Daniel") {

       return `1ª - Colocado ${athletes[1]}\n2ª - Colocado Rafael\n3º - Colocado Manoel`

   }else
       return `1ª - Colocado ${athletes[0]}\n2º - Colocado Manoel\n3ª - Colocado Rafael`

   }
   //console.log(positions("Rafael","Daniel","Manoel"));
   //console.log(positions("Daniel","Manoel","Rafael"));
   //console.log(positions("Manoel","Rafael","Daniel"));