describe('black', function() {

  var black, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    black = new Black(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(black.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(black.$node, 'toggle');
    black.step();
    expect(black.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(black, 'step');
      expect(black.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);


      expect(black.step.callCount).to.be.equal(1);


      clock.tick(timeBetweenSteps);
      expect(black.step.callCount).to.be.equal(2);
    });
  });
});
