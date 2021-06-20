


//smoth scroll
$("a").click(function(event){
if (this.hash !==""){
event.preventdefault();
var gato = this.hash;
$("html,body").animate({
scrolltop: $(gato).offset().top},2000,function(){
window.location.hash=gato;



});
}
});



//tooltip seccion tarjetas 
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


  
  
  
  
  //modal img 1 seccion tarjetas 
  $(document).ready(function () {
    $(".foto-1").click(function () {
        $("#foto-1").modal("show");
    });
});
   //modal img 2 seccion tarjetas 

 $(document).ready(function () {
    $(".foto-2").click(function () {
        $("#foto-2").modal("show");
    });
});

   //modal img 3 seccion tarjetas 

   $(document).ready(function () {
    $(".foto-3").click(function () {
        $("#foto-3").modal("show");
    });
});
 

  //modal img 4 seccion tarjetas 

  $(document).ready(function () {
    $(".foto-4").click(function () {
        $("#foto-4").modal("show");
    });
});