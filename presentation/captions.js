var height;

$(window).resize(function() {
  height = $(".img").height();
})

$("body").scroll(function() {
  var pos = $("body").scrollTop();

  id = Math.round((pos)/height ) + 1; // Figureout which image we are looking at
  
  $("#caption").html(
    $(".img#" + id).html() //Associated caption
  );
})

// Init
$(window).resize();
$("body").scroll();

$(".img").each(function() { // Load images 
  var img = $(this).attr("image") || "https://picsum.photos/1200/800/?random";
  $(this).css("background-image", "url("+img+")");
});