const button = document.getElementById("boxBtn");

button.addEventListener("click", function isBoxClicked(){
  button.setAttribute("visible", false);
  console.log("StartBtn box was clicked!");
})