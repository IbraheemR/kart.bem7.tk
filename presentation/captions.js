var hidden = false;
var height;
var id;

//----------------------------------------------------

function scrollTo(num) {
  if (num < 1) {
    num = 1;
    return false;
  } else if (num > $(".img").length) {
    num = $(".img").length
    return false;
  }
  var target = $("#img" + num);
  $('html, body').animate({
    scrollTop: target.offset().top
  }, 500)
  return true;
}

//----------------------------------------------------

$(window).resize(function() {
  height = $(".img").height();
});

$(window).scroll(function() {
  var pos = $(window).scrollTop();

  id = Math.round( pos/height ) + 1; // Figure out which image we are looking at

  $("#caption").html(
    $("#img" + id).html()
  );// Load associated caption
});

$(window).keydown(function(e) {
  var k = e.keyCode;
  if (k == 72) {//H key pressed, hide the caption bar
    hidden = !hidden;
    if (hidden) {
      $("#caption").hide()
    } else {
      $("#caption").show()
    }
  } else if (k == 32 || k == 40) { //Space bar or down arrow, move to next slide
    e.preventDefault();
    id++; // This will put id out of syn with wher the window is, so the interval below will scroll us
    scrollTo(id);
  } else if (k == 38) { // Up arrow, move to previous slide
    e.preventDefault();
    id--;
    scrollTo(id);
  }
});


//----------------------------------------------------

// Init
$(window).resize();
$(window).scroll();

// Load images 
$(".img").each(function() {
  var img = $(this).attr("image") || "https://picsum.photos/1200/800/?random";
  $(this).css("background-image", "url("+img+")");
});

