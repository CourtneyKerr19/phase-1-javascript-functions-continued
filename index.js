function saturdayFun(activity = "roller-skate") {
    return "This Saturday, I want to " + activity + "!"; 
}

function mondayWork(activity = "go to the office") {
    return "This Monday, I will " + activity + ".";
} 

// Function that returns a function to wrap an adjective in a highlight
function wrapAdjective(highlight = "*") {
    return function(adjective) {
      return `You are ${highlight}${adjective}${highlight}!`;
    }
  }
  
  module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
  };