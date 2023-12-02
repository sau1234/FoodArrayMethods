

const foodData = require('./data.json');
function listFood(food){
  if(food.length>0){
    return foodData.filter((item) => item.category === food)
  }
  else{
    return foodData
  }
}

console.log(listFood("Protein"));
listFood('Nuts')
listFood()


function sortCalorie(condition){
  if(condition==='asec'){
    return foodData.filter((item) => item.calorie < 100);
  }
  else if(condition==="desc"){
    return foodData.filter((item) => item.calorie > 100)
  }
}
console.log(sortCalorie('asec'))
sortCalorie('desc')

function sort(type){
  if(type==="proteins"){
    return foodData.sort((a, b) => b.protiens - a.protiens)
  }
  else if(type==="cab"){
    return foodData.sort((a, b) => a.cab - b.cab)
  }
}
console.log(sort('proteins'));
sort('cab')