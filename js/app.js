
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
    $('#display').show( "slow"); //muestro mediante id
    $('.display').addClass("animation")
    $('.imagesImpacto').addClass('imagesEfect');
    $('#more').addClass('moreDisplay');
       
   });
  $("#hide").on( "click", function() {
    $('#display').addClass("d-none").hide("slow"); //oculto mediante id
   
  });
});


/*funicon de titulo impacto*/

var spans = document.querySelectorAll('.word span');
spans.forEach((span, idx) => {
	span.addEventListener('mouseover', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});

/*AHIJADAS*/

