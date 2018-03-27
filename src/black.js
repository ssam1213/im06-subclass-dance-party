var Black = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="https://media1.tenor.com/images/1e482154206ada2e1b2e78c3bd9905ab/tenor.gif?itemid=3432318" class="image" alt="black">');
  this.setPosition(top, left);


};

  Black.prototype = Object.create(MakeDancer.prototype);
  Black.prototype.constructor = Black;
  Black.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step


    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    MakeDancer.prototype.step.call(this);
    //메이크 덴서 대신에 블링크 디스를 쓰겠다.
    this.$node.toggle();
  };
