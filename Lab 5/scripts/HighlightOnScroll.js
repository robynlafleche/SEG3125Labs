/*https://www.youtube.com/watch?v=8oRPdU-mf58*/

$(document).ready(function(){
    $('.navbar ul li a').click(function(event) {
        $('.navbar ul li a').removeClass('active');
        $(this).addClass('active');
        thisAttrHref = $(this).attr('href');
        thisAttrHrefOffset = $(thisAttrHref).offset().top;
        $('html, body').animate({scrollTop:thisAttrHrefOffset});
        event.preventDefault();

    });
})

$(window).scroll(function() {
    $('.navSection').each(function() {
        navSectionTop = $(this).offset().top;
        if($(document).scrollTop() > navSectionTop) {
            thisId = $(this).attr('id');
            $('.navSection').removeClass('active');
            ActiveID = $(this).addClass('active').attr('id');
        }
    });

    $('.navbar ul li').each(function() {
        thisChildren = $(this).children('a');
        thisChildrenHref = $(this).children('a').attr('href');
        if(thisChildrenHref === '#'+ActiveID) {
            $('.navbar ul li a').removeClass('active');
            $(thisChildren).addClass('active');
        }
    });
});