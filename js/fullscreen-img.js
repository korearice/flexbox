// Look for sections that have a fullscreen-img attribute and set this image as
// the body background image whenever this section is displayed.
// TODO insert image with reveal transition
var BGR;

function fullscreen(event) {
  var url = event.currentSlide.getAttribute("fullscreen-img");
  if(url) {
    if(typeof BGR == "undefined")
    {
      // Store background value
      BGR = document.body.style.background;
    }

    // Set image from fullscreen-img attribute as body background
    document.body.style.backgroundImage = "url('" + url + "')";
    var method = event.currentSlide.getAttribute("fullscreen-method");
    var customSize = event.currentSlide.getAttribute("fullscreen-size");
    var customPosition = event.currentSlide.getAttribute("fullscreen-position");
    if(method == "contain") {
      // Put image in 'contain' mode with black background
      // TODO store background color and use it. This is possible by regexping
      // the background property and replacing the 2nd value by the image url.
      // See http://www.w3schools.com/cssref/css3_pr_background.asp
      document.body.style.backgroundColor = "#000000";
      document.body.style.backgroundSize  = "contain";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundAttachment = "fixed";
      document.body.style.backgroundPosition = "center center";
    }
    else if(method == "top") {
      document.body.style.backgroundSize = customSize;
      document.body.style.backgroundPosition = customPosition;
      document.body.style.backgroundRepeat = "no-repeat";
    }
    else {
      document.body.style.backgroundSize = "cover";
    }
  }
  else { 
    if(typeof BGR != "undefined") { 
      document.body.style.backgroundImage = "none";
      document.body.style.background      = BGR;
    } 
  }
}

Reveal.addEventListener('ready', function(event) {
  fullscreen(event);
}, false );

Reveal.addEventListener('slidechanged', function(event) {
  fullscreen(event);
}, false );

