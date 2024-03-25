// code your solution here
function saturdayFun(entered){
    let theDefault=`This Saturday, I want to ${entered}!`
    if(entered === undefined){
        theDefault = 'This Saturday, I want to roller-skate!'
      return theDefault}
      else{
        return theDefault
      }
}
function mondayWork(entered){
    let MyDefault= `This Monday, I will ${entered}.`
    if(entered === undefined){
        MyDefault = 'This Monday, I will go to the office.'
        return MyDefault
    }else{
        return MyDefault
    }
    

}
function wrapAdjective(flair) {
    return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    };
}