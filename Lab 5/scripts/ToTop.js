/*https://codepen.io/matthewcain/pen/ZepbeR*/
$(document).ready(function() {

    var up = $('#toTop');

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 300) {
            up.addClass('show');
          } else {
            up.removeClass('show');
          }
    });

    up.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300')
    })


});