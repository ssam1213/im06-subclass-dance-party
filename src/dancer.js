// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {
//
//   var dancer = {};
//
//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');
//
//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();
//
  // dancer.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   dancer.$node.css(styleSettings);
  // };
//
//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);
//
//   return dancer;
// };

// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();

  this.setPosition(top, left);

};
  MakeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // var makeDancer = new MakeDancer(top,left, timeBetweenSteps);


  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};
  MakeDancer.prototype.setPosition = function(top, left) {
       // Use css top and left properties to position our <span> tag
       // where it belongs on the page. See http://api.jquery.com/css/
       //
       var styleSettings = {
         top: top,
         left: left
       };
       this.$node.css(styleSettings);

  };
  MakeDancer.prototype.lineUp = function(top, left){
    var lineUpSettings = {
      top: 300,
      left: left
    };
    this.$node.css(lineUpSettings);
  };

  // var test = new MakeDancer(10, 20, 100);
  // console.log('test', test);
  // console.log('test.setPosition', test.setPosition());


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
