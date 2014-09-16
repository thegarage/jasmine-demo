describe('example_ajax.js', function() {
  describe('when #ajax_test is clicked', function() {
    beforeEach(function() {
      // setup HTML fixture
      setFixtures(sandbox({id: 'ajax_test'}));

      // install Ajax mock
      jasmine.Ajax.install();

      // fire event
      $('#ajax_test').click();
    });
    it('performs request');
  });

  describe('when #ajax_test is clicked and returns successfully', function() {
    it('fires alert w/ success message');
  });

  describe('when #ajax_test is clicked and returns with error', function() {
    it('fires alert w/ error message');
  });
});


// expect(jasmine.Ajax.requests.mostRecent().url).toBe('/path/to/endpoint');
// spyOn(window, 'alert')
// expect(window.alert).toHaveBeenCalledWith("good");
// expect(window.alert).toHaveBeenCalledWith("bad");
