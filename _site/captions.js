var vmin;

$(window).resize(function() {
  vmin = Math.min($(window).width(), $(window).height());
})

$("body").scroll(function() {
  var pos = $("body").scrollTop();

  var id = Math.round((pos)/vmin ) + 1; // Figureout which image we are looking at
  
  $("#caption").html(
    $(".img#" + id).html() //Associated caption
  );
})

// Init
$(window).resize();
$("body").scroll();