$(function() {
  // On Click
  $('.thumbnails').on('click', function(e) {
    e.preventDefault();
    $('.hero img').attr('src', $(e.target).attr('src')).attr('alt', $(e.target).attr('alt'));
  });
});