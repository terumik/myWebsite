$(function() {


// execute functions when the page was loaded
  $(document).ready(function(){
    if(window.matchMedia("(max-width:320px)").matches){
      console.log("Page has been loaded: ~320px");
    }
    else if(window.matchMedia("(max-width:768px)").matches){
      console.log("Page has been loaded: 321px~768px");
    }
    else {
      console.log("Page has been loaded: 769px~");
    }

// execute functions when the page was resized
    function matchFunction(){
      if(window.matchMedia("(max-width:320px)").matches){
        console.log("Page has been changed ~320px");
      }
      else if (window.matchMedia("(min-width:321px) and (max-width: 768px)").matches) {
        console.log("Page has been changed between 321px to 768px");
      }
      else if (window.matchMedia("(min-width:769px)").matches) {
        console.log("Page has been changed more than 769px");
      }
    }

    window.matchMedia("(max-width:320px)").addListener(matchFunction);
    window.matchMedia("((min-width:321px) and (max-width: 768px))").addListener(matchFunction);
    window.matchMedia("(min-width:769px)").addListener(matchFunction);
  });

});
