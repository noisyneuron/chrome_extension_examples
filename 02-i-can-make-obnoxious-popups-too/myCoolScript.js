
//this wrapper here is to ensure jquery has loaded
// and the document has loaded.. 
$(document).ready(function() {
  
  console.log("i'm ready lets go");

  // $('*') says get all elements
  // .click says whenever a click happens on any of these elemnts,
  // execute this callback function I have given you
  // the callback function will be passed a javascript object with relevant data
  // (called 'event' here)
  $('*').click( function(event) {
    event.preventDefault(); // don't do whatever the event was supposed to do

    /* -----be annoying---------*/
    // alert("my lonliness was killing me"); 

    /* -----go to your own spontaneously created page ---------*/
    // var myWindow = window.open("", "_self");
    // myWindow.document.write("<p style='font-size: 40px;'> please go away I'm tired and I want my privacy </p>");

    /* -----popup-popup-popup---------*/
    var myWindow = window.open("", "_blank", "top=500,left=500,width=400,height=400");
    myWindow.document.write("<p style='font-size: 40px;'> lets hang out here instead </p>");
  })

  // these brackets below close the jquery document-ready-checking function
  // don't delete them! 
}); 