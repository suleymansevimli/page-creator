$(function() {
    $( "#paragraph" ).draggable();
    $( "#head" ).draggable();
    $( "#image" ).draggable();

    $( "#headWrap" ).droppable({
      accept: "#head",
      drop: function( event, ui ) {
         $( this )
        .find( "h1" )
        .html( "Head Dropped !" );
      }
    });
    $( "#imageWrap" ).droppable({
      accept: "#image",
      drop: function( event, ui ) {
         $( this )
        .find( "div" )
        .html( "<img height=\"400\" width=\"400\" src=\"img/wood-home.jpg\"/>" )
      }
    });
    $( "#prgWrap" ).droppable({
      accept: "#paragraph",
      drop: function( event, ui ) {
         $( this )
        .find( "p" )
        .html( "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." )
      }
    });

});
