$(document).ready(function(){
    var banner = {
        padre: $('#banner'),
        numeroSlides: $('#banner').children('.slide').length,
        posicion: 1
    }

    var info = {
        padre: $('#info'),
        numeroSlides: $('#info').children('.slide').length,
        posicion: 1
    }

    banner.padre.children('.slide').first().css({
        'left':0
    });
    info.padre.children('.slide').first().css({
        'left':0
    });
    var altoBanner = function(){
        var alto = banner.padre.children('.slide').outerHeight();
         
        banner.padre.css({
            'height':alto+'px'
        });
    }
    var altoInfo = function(){
        var alto = info.padre.children('.slide').outerHeight();
         
        info.padre.css({
            'height':alto+'px'
        });
        
    }
    altoBanner();
    altoInfo();

    $(window).resize(function(){
        altoBanner();
    });
});