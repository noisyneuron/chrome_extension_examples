
//this wrapper here is to ensure jquery has loaded
// and the document has loaded.. ie its ready!
$(document).ready(function() {

  // REPLACE ALL IMAGES WITH BILL MURRAY IMAGES
  function replaceImages() {
    // find each <img> element, and apply the inner function on it
    $('img').each( function(index, image) { 
      // fillmurray.com lets you put a width and height 
      // in the url to get a bill murray image, like so:
      // http://fillmurray.com/200/300

      // lets get a different height and width for each image
      // by using the index number
      var width = 200 + index;
      var height = 300 + index;
      image.src = "http://fillmurray.com/"+width+"/"+height;
    })
  }

  // blur and upside all image
  function blurImages() {
    $('img').addClass('blur');
  }




  // replaceImages();
  blurImages();

// these brackets below close the jquery document-ready-checking function
// don't delete them! 
}); 