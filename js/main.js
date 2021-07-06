//import Filterizr from "filterizr";

//Change the window shown by toggling the active class
$('.main-menu a').on( 'click',function(){
    var activeClass = $( this ).attr( 'href').substring(1);
    
    setTimeout( function(){
        $('.content.active').removeClass('active');

        $('.' + activeClass ).addClass('active');

        $('html,body').animate({
            scrollTop:$($('.' + activeClass)).offset().top
        },500)

    },300);

    if ( activeClass === 'portfolio') {
        setTimeout( function(){
            $('.filter-controls li')[0].click();
        },300);
    }
})

var type = window.location.hash.substring(1);
if (type){
    $('.content.active').removeClass('active');
    $('.' + type).addClass('active');
};

$('.filter-controls li').on('click', function (){
    if (! $(this).hasClass('active')){
        $('.filter-controls li.active').removeClass('active');
        $(this).addClass('active');
    }
});

var options = {  };    
var filterizr = new Filterizr('.filter-container', options);

$('.popup-link').magnificPopup({
    type: 'image'
});