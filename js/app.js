
/* creamos un texto de tuna femenina de san marco*/
var uno = "TUNA FEMENINA DE SAN MARCOS";
var a = 0;
var tres = "";


function escribir() {
  var dos = uno.charAt(a)


  a = a + 1


  tres = tres + dos


  document.getElementById("caja").innerHTML = tres


}
setInterval("escribir()", 100)

/*fin de  texto*/

/* inicio de  Scroll*/

$(window).scroll(function(){
  if($ ("#menu").offset().top>160){
    $("#menu").show("slow").addClass("granate");
  } else{
    $("#menu").removeClass("granate");
  }

}
)
$(window).scroll(function(){
  if($ ("#caja").offset().top>160){
    $("#caja").show("slow").addClass("caja");
  } else{
    $("#caja").removeClass("caja");
  }

}
)
/*funcion para mostrar section oculta */

$(document).ready(function(){
  $("#more").on( "click", function() {
    $('#display').show( "6000"); //muestro mediante id
      
    
   });
  $("#hide").on( "click", function() {
    $('#display').addClass("d-none").hide("slow"); //oculto mediante id
   
  });
});

