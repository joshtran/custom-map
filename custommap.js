var words = ["ground", "control", "to", "major", "tom"];

function map(myArr, myFunc) {
  var outputArr =[];
  for (var i = 0; i < myArr.length; i++) {
    outputArr.push(myFunc(myArr[i]));
  }
  console.log(outputArr);
  return outputArr;
}


map(words, function(word) {
  return word.length;
});



