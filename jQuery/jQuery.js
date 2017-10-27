/*global $, e, jquery, console, alert, sc*/

$(document).ready(function () {
     
    "use strict";
    
    // Adjust The Header Height
    
    var myHeader = $(".header"),
        
        mySlider = $(".bxslider");
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
        
        // Adjust The BxSlider In Center The Header
        
        mySlider.each(function () {
        
            $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
        });
        
    });
    
    // Links Add Class " active "
    
    $(".links li a").click(function () {
        
        $(this).parent().addClass("active").siblings().removeClass("active");
        
    });
    
    // Adjust The BxSlider In Center The Header
    
    mySlider.each(function () {
        
        $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
    });
    
    // Trigger The Bx Slider
    
    mySlider.bxSlider({
        pager : false
        
    });
    
    
    // Smooth Scroll
    
    $(".links li a").click(function () {
        
        $("html, body").animate({
            
            scrollTop : $("#" + $(this).data("value")).offset().top
        
        }, 1000);
        
        console.log($(this).data("value"));
        
    });
    
    // Our Auto Slider Code
    
    $(function autoSlider() {
       
        $(".slider .active").each(function () {
            
            if (!$(this).is(":last-child")) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                   
                    $(this).removeClass("active").next().addClass("active").fadeIn(1000);
                    
                    autoSlider();
                    
                });
                
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass("active");
                    
                    $(".slider div").eq(0).addClass("active").fadeIn(1000);
                    
                    autoSlider();
                    
                });
                
            }
            
            
        });
        
    });
        
    // Trigger The MixItUp
    
    $("#container").mixItUp();
    
    
});
