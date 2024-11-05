//Loads the intialization fns once page loads
$( document ).ready(function() {
    init();
});

//listens to for Enter presses in the textbox field
$(document).on("keypress", "input", function(e){
	if(e.which == 13){
		newCard();
		return false;
	}
});

//listens for clicks on the squares and toggles their colors
$(document).on( "click","td", function() {
   var classID=$(this).attr("class");
    if(classID.includes("popout"))
        toggleLines(this);

    else
        squareToggle(this);
  } );

  //Button click listener
  $(document).on( "click","button", function() {
        newCard();
   } );

   //Light/dark mode switcher
   $(document).on( "click","#checkbox", function() {
    darkModeSwitch();
} );