$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    console.log(this);
    // get the maker function for the kind of dancer we're supposed to make

    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($("body").height() * Math.random())/1.02,
      ($("body").width() * Math.random())/1.02,
      Math.random() * 900

    );
    console.log('dancer', dancer);
    $('body').append(dancer.$node);

    // var blue = new dancerMakerFunction(
    //   $("blue").css('border', function(){
    //     return Math.ceil((cssRandom * 3) + 1);
    //   })
    //
    // );
    //
    // $('body').append(blue.$node);

    window.dancers.push(dancer);
    console.log('window', window.dancers);


    // var dancer2 = new dancerMakerFunction(
    //   $("blue").css('border') * Math.random(),
    //   $("blue").css('border') * Math.random(),
    //   Math.random() * 1000
    // );
    //
    // $('blue').append(dancer2.$node);
    $(".dancer").mouseover(function(){
      console.log('this', this);
      $(this).css({'width': '100px'});
    });
    $(".dancer").mouseleave(function(){
      console.log('this', this);
      $(this).css({'width': '2px'});
    });

  });
  $('.lineupButton').on('click', function(event) {

    // var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    console.log(this);
    console.log('da', window.dancers);
    for(var i=0; i<window.dancers.length; i++){
      window.dancers[i].lineUp();
    }
  });

});
