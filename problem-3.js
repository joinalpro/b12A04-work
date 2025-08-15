function  bestTeam( player1, player2 ) {
     if(typeof player1 !== "object"|| typeof player2 !== "object"){
         return "Invalid"
     }
       
    let team1 = player1.foul + player1.cardY + player1.cardR;

    let team2 = player2.foul + player2.cardY + player2.cardR;

    if(team1 < team2){
        return player1.name
    }
    if(team1 > team2){
        return team2.player2
    }
   
}


console.log(bestTeam({ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
{ name: "Argentina", foul: 7, cardY: 0, cardR: 0 }))