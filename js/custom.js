/*global $, console */
$(function () {
    "use strict";
    
    $("body").niceScroll({
        cursorcolor: "#ff4343"
    });
    
    $(".carousel").carousel({
        interval: 6000
    });

    $(".gear-check").click(function () {
        $(".color-box").fadeToggle();
    });

    var colorli = $(".color-box ul li"),
        scrollbtn = $("#scroll-top");
    colorli.eq(0).css("backgroundColor", "#ff4343").end()
        .eq(1).css("backgroundColor", "#008cff").end()
        .eq(2).css("backgroundColor", "#51e9ff").end()
        .eq(3).css("backgroundColor", "#fb00b1");

    colorli.click(function () {
        $("link[href*='them']").attr("href", $(this).attr("data-value"));
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollbtn.show();
        } else {
            scrollbtn.hide();
        }
    });
    scrollbtn.click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 600);
    });
});

$("body").css("overflow", "auto");
$(window).on("load",function() {
    $(".loading-overlay , .loading-overlay .spinner").fadeOut("200");
});
