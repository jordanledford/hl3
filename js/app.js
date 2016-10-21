// console.log('fuck you volvo');

var possibleResponses = [
  "nope",
  "absolutely not",
  "not even close",
  "not yet",
  "noooooooo",
  "negatory",
  "not even remotely",
  "no",
  "nah",
  "no way",
  "negative",
  "never",
  "by no means",
  "not at all",
]

var counter = 0

var button = document.querySelector(".btn");

console.log(possibleResponses[counter])

var possibleResponsesIterator = function(){
  for (var counter = 0; counter < possibleResponses.length; counter++) {
    document.getElementById("response").innerHTML = possibleResponses[counter];
  }
}
$('.btn').on('click', possibleResponsesIterator);
