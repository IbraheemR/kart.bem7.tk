var height;

window.onresize = function() {
  height = document.querySelector(".img").offsetHeight;
}

function scroller() {
  var pos = document.querySelector("body").scrollTop;

  var id = Math.round( (pos)/height ) + 1; // Figureout which image we are looking at

  var text = document.querySelector("#img" + id).innerHTML;
  document.querySelector("#caption").innerHTML =  text;// Load associated caption

  return text;
}
document.querySelector("body").addEventListener("scroll", scroller);
document.querySelector("body").addEventListener("scroll", scroller);

// Init
window.onresize();
scroller();

// Load images 
images = document.getElementsByClassName("img")

for (i=0; i<images.length; i++) {
  var el = images[i];

  var img = $(el).attr("image") || "https://picsum.photos/1200/800/?random";
  $(el).css("background-image", "url("+img+")");
}