var height;

$(window).resize(function() {
  height = $(".img").height();
});

$(window).scroll(function() {
  var pos = $(window).scrollTop();

  var id = Math.round( (pos)/height ) + 1; // Figureb out which image we are looking at

  $("#caption").html(
    $("#img" + id).html()
  );// Load associated caption
});

// Init
$(window).resize();
$(window).scroll();

// Load images 
$(".img").each(function() {
  var img = $(this).attr("image") || "https://picsum.photos/1200/800/?random";
  $(this).css("background-image", "url("+img+")");
});