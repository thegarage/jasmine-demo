$(document).on('click', '#dom_test', function() {
  $(this).toggleClass('clicked');

  var counter = $(this).data('counter') || 0;
  counter += 1;
  $(this).data('counter', counter);

  // window.alert('event triggered');
});
