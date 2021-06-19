


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

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
