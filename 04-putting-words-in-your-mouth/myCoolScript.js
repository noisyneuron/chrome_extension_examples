
//this wrapper here is to ensure jquery has loaded
// and the document has loaded.. 
$(document).ready(function() {
  
  replaceText("you", "SUKANYA");
  replaceText("your", "SUKANYA'S");

  
  function replaceText(oldString, newString) {
    // this first part gets all the text that is in a 'text node' 
    // ie, ignoring html tags etc
    $('body :not(script)').contents().filter(function() {
      
      return this.nodeType === 3;

    }).replaceWith(function() { // this part deals with replacement

      // regular expressions are a powerful tool for string manipulations
      // this regular expressions says find oldString only if its has 'word boundaries' on either side (\b)
      // and find all copies (g), ignoring case (i)
      var reOld = new RegExp("\\b"+oldString+"\\b", "gi");
      return this.nodeValue.replace(reOld,newString);
    });
  }

// these brackets below close the jquery document-ready-checking function
// don't delete them! 
}); 