describe('example_dom.js', function() {
  describe('#dom_test click event', function() {
    beforeEach(function() {
      // setup HTML fixtures
      loadFixtures('generated/example_dom.html')

      spyOn(window, 'alert');

      // perform action
      $('#dom_test').click();
    });
    it('adds the clicked class to the link', function() {
      expect($('#dom_test')).toHaveClass('clicked');
    });
    it('sets data[counter] to 1', function() {
      expect($('#dom_test').data('counter')).toEqual(1);
    });
    it('calls alert', function() {
      expect(window.alert).toHaveBeenCalledWith("event triggered");
    });
  });

  describe('#dom_test click event when already clicked', function() {
    beforeEach(function() {
      spyOn(window, 'alert');

      // setup HTML fixtures
      loadFixtures('generated/example_dom.html');
      $('#dom_test').click();

      // perform action
      $('#dom_test').click();
    });
    it('removes the clicked class to the link', function() {
      expect($('#dom_test')).not.toHaveClass('clicked');
    });
    it('increments data[counter] to 2', function() {
      expect($('#dom_test').data('counter')).toEqual(2);
    })
  });
});
