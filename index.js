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

  if(dec != ""){
    document.getElementsByClassName("oct")[0].value = parseInt(dec,10).toString(8);
  document.getElementsByClassName("hex")[0].value = parseInt(dec,10).toString(16);
  document.getElementsByClassName("bin")[0].value = parseInt(dec,10).toString(2);
  }
   if (bin!="") {
    document.getElementsByClassName("oct")[0].value = parseInt(bin,2).toString(8);
    document.getElementsByClassName("hex")[0].value = parseInt(bin,2).toString(16);
    document.getElementsByClassName("dec")[0].value = parseInt(bin,2).toString(10);
  }
   if(hex!=""){
    document.getElementsByClassName("oct")[0].value = parseInt(hex,16).toString(8);
    document.getElementsByClassName("bin")[0].value = parseInt(hex,16).toString(2);
    document.getElementsByClassName("dec")[0].value = parseInt(hex,16).toString(10);

  }

   if(oct!=""){
    document.getElementsByClassName("bin")[0].value = parseInt(oct,8).toString(2);
    document.getElementsByClassName("hex")[0].value = parseInt(oct,8).toString(16);
    document.getElementsByClassName("dec")[0].value = parseInt(oct,8).toString(10);

  }

  

}
