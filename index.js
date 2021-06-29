function saturdayFun(layer="roller-skate") {
  return `This Saturday, I want to ${layer}!`
}
saturdayFun();
    console.log ("This Saturday, I want to bathe my dog!")

let mondayWork = function (office="go to the office") {
  return `This Monday, I will ${office}.`
}
mondayWork();
    console.log ("This Monday, I will work from home")

let wrapAdjective = function(sign="*") {
  return function(programmer="a dedicated programmer") {
    return `You are ${sign}${programmer}${sign}!`
  }
}