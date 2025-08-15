function  resultReport( marks ) {
         if(!Array.isArray(marks)){
             return "Invalid"
         }

    let passMark = 40;
    let pass = 0;
    let fail = 0;
    let totalMark = 0;
    let totalLenght = 0;
    for (let mark of marks) {
       
        totalMark += mark;
        totalLenght++
            if(mark >= passMark){
                pass++
               
            }
             if(mark < passMark){
                fail++
               
            }
         
    }
   
    let finalScore = Math.round(totalMark / totalLenght)
       return {pass, fail, finalScore}
}

console.log(resultReport(100))
