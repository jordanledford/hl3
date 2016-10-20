console.log('fuck you volvo');

var possibleResponses = [
  "nope",
  "absolutely not",
  "not yet",
  "no",
  "nah",
  "no way",
  "negative",
  "never",
  "by no means",
  "not at all",
]

var button = document.querySelector(".btn")

possibleResponsesIterator = function(){
  for (var i = 0; i < possibleResponses.length; i++) {
    button.addEventListener("click", function(){
      document.getElementByID("response").innerHTML = possibleResponses[i]
    }
  }
}
// button.addEventListener("click", function(){
//     document.getElementById("response").innerHTML = possibleResponsesIterator;
// });
