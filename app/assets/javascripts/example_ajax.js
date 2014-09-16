$(document).on('click', '#ajax_test', function() {
  $.ajax('/path/to/endpoint', {
    success: function() {
      alert('good');
    },
    error: function() {
      alert('bad');
    }
  });
});
