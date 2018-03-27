$(document).ready(function() {
  window.dancers = [];
  var windowWidth = $( window ).width();
  var windowHeight = $( window ).height();
  console.log('windowWidth', windowWidth);
  console.log('windowHeight', windowHeight);
  var topbarHeight = $('.topbar').height();

  console.log('topbar', topbarHeight);


  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    console.log(this);


    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000

    );
    console.log('dancer', dancer);
    $('body').append(dancer.$node);

    window.dancers.push(dancer);
    console.log('window', window.dancers);

    var position = dancer.$node.position();
    console.log('position', position);
    for(var i = 0; i < dancers.length - 1; i++){
      // console.log('position.left', position.left );// ok
      console.log('i', dancers[i].$node.position());
    var y = Math.pow(Math.abs(position.left - dancers[i].$node.position().left), 2);
    var x = Math.pow(Math.abs(position.top - dancers[i].$node.position().top), 2);
    if(Math.sqrt(x+y) < 100) {
      // $("#redDot").css({'width': '100px'});
      alert("Too Close!!");
    }
    }

    $(".dancer").mouseover(function(){
    console.log('this', this);
      $(this).css({'width': '100px'});
    });
    // $(".dancer").mouseleave(function(){
    //
    //   $(this).css({'width': '1.15px'});
    // });

  });
  $('.lineupButton').on('click', function(event) {

    console.log(this);
    console.log('da', window.dancers);
    for(var i=0; i<window.dancers.length; i++){
      window.dancers[i].lineUp();
    }
  });

});
