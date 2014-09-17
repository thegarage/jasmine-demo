//= require helpers/spec_helper

describe('example_ajax.js', function() {
  describe('when #ajax_test is clicked', function() {
    beforeEach(function() {
      // setup DOM
      // setFixtures(sandbox({id: 'ajax_test'}));
      loadFixtures('example_ajax.html');

      // setup ajax mock *after* loading fixtures
      jasmine.Ajax.install();

      // trigger event
      $('#ajax_test').click();
    });
    afterEach(function() {
      jasmine.Ajax.uninstall();
    });
    it('perfoms xhr', function() {
      expect(jasmine.Ajax.requests.mostRecent()).not.toBeNull();
    });
    it('performs xhr to /path/to/endpoint', function() {
      expect(jasmine.Ajax.requests.mostRecent().url).toBe('/path/to/endpoint');
    });
  });

  describe('when #ajax_test is clicked and returns successfully', function() {
    beforeEach(function() {
      // setup DOM
      loadFixtures('example_ajax.html');

      // setup ajax mock *after* loading fixtures
      jasmine.Ajax.install();

      spyOn(window, 'alert');

      // trigger event
      $('#ajax_test').click();
      jasmine.Ajax.requests.mostRecent().response({
        status: 200,
        contentType: 'text/plain',
        responseBody: 'ok'
      });
    });
    afterEach(function() {
      jasmine.Ajax.uninstall();
    });
    it('fires alert w/ success message', function() {
      expect(window.alert).toHaveBeenCalledWith("good");
    });
  });

  describe('when #ajax_test is clicked and returns with error', function() {
    beforeEach(function() {
      // setup DOM
      loadFixtures('example_ajax.html');

      // setup ajax mock *after* loading fixtures
      jasmine.Ajax.install();

      spyOn(window, 'alert');

      // trigger event
      $('#ajax_test').click();
      jasmine.Ajax.requests.mostRecent().response({
        status: 404,
        contentType: 'text/plain',
        responseBody: 'ok'
      });
    });
    afterEach(function() {
      jasmine.Ajax.uninstall();
    });
    it('fires alert w/ error message', function() {
      expect(window.alert).toHaveBeenCalledWith("bad");
    });
  });
});
