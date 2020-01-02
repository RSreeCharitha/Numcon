document.getElementById("clear").addEventListener("click", function(){
  document.getElementsByClassName("bin")[0].value="";
  document.getElementsByClassName("dec")[0].value="";
  document.getElementsByClassName("hex")[0].value="";
  document.getElementsByClassName("oct")[0].value="";
});

//document.getElementById("get").addEventListener("click", compute);


function compute() {
  var bin = document.getElementsByClassName("bin")[0].value;
  var hex = document.getElementsByClassName("hex")[0].value;
  var oct = document.getElementsByClassName("oct")[0].value;
  var dec = document.getElementsByClassName("dec")[0].value;

  document.getElementsByClassName("oct")[0].value = parseInt(dec,10).toString(8);
  document.getElementsByClassName("hex")[0].value = parseInt(dec,10).toString(16);
  document.getElementsByClassName("bin")[0].value = parseInt(dec,10).toString(2);

}
