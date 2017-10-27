/*global $, alert, console*/


$(function () {

    "use strict";

    var theHeader = $(".header");

    // Adjust Height Of Header


    theHeader.height($(window).height());

    $(window).resize(function () {

        theHeader.height($(window).height());

        // Adjust Bxslider Item In center

        $(".bxslider").each(function () {

            $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);

        });

    });

    // Links Add Class "Active" And Remove This Class From Siblings

    $(".links li a").click(function () {

        $(this).parent().addClass("active").siblings().removeClass("active");

    });

    // Trigger The Bxslider

    $('.bxslider').bxSlider({

        pager : false

    });

    // Adjust Bxslider Item In center

    $(".bxslider").each(function () {

        $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);

    });

    // Make The Smooth Scroll On Div

    $(".links li a").click(function () {

        $("html, body").animate({

            scrollTop : $("#" + $(this).data("value")).offset().top

        }, 1000);

    });
    
    // Make Auto Slider
    
    $(function autoSlider() {
        
        $(".slider .active").each(function () {

            if (!$(this).is(":last-child")) {
                
                $(this).delay(3000).fadeOut(1000, function () {

                    $(this).removeClass("active").next().addClass("active").fadeIn();
                    
                    autoSlider();

                });
                
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass("active");
                    
                    $(".slider div").eq(0).addClass("active").fadeIn();
                    
                    autoSlider();
                });
            }
        
        });
        
    }());

    // Trigger The MixItUp
    
    $('#Container').mixItUp();
    
    // Adjust The Links
    
    $(".shuffle li").click(function () {
        
        $(this).addClass("selected").siblings().removeClass("selected");
        
    });
    
    // Trigger The NiceScroll 
    
    $("html").niceScroll({
        
        cursorcolor: "#1abc9c",
        cursorwidth: "10px",
        cursorborder: "1px solid #1abc9c"
        
    });
    
});
