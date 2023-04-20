$(function(){
//右边栏返回顶部
 var headerRtop = $(".header").offset().top/2;
 var headTop = $(".head").offset().top; 
 var barRightTop = $(".slider-bar-right").offset().top;
 $(window).scroll(function(){
 /*    if($(document).scrollTop() >= headTop){
        $(".slider-bar-right").fadeIn();
        // css("display","block");
    }else{
        $(".slider-bar-right").fadeOut()
    }
    console.log($(document).scrollTop());
    console.log(headTop); */
 var num = 328-headerRtop;
    $(document).scrollTop() >= headTop ? $(".slider-bar-right").fadeIn():$(".slider-bar-right").fadeOut();
    $(document).scrollTop() >= headerRtop ?
    $(".slider-bar-right").css({position:"fixed",top:num}).children("span").css("display","block")
    :$(".slider-bar-right").css({position:"absolute",top:"328px"}).children("span").css("display","none");
    
    $("span").click(function() {
        $("body,html").stop().animate({
            scrollTop:0
               });
    });
 })
//左侧导航栏
var flag = true; //使用节流阀
 $(window).scroll(function(){
    var  headerLtop = $(".bar").eq(1).offset().top - 10;
    $(document).scrollTop() >= headerLtop ?
    $(".slider-bar-left").fadeIn()
    :$(".slider-bar-left").fadeOut()
    $(".slider-bar-left li").click(function(){
        flag = false;
        $(this).css("backgroundColor"," #E2231A").siblings().css("backgroundColor","aqua")
        var index = $(this).index();
        var num = $(".bar").eq(index).offset().top;
         $("body,html").stop().animate({
           scrollTop:num
         },function(){
            flag = true;
         })
    })
    if(flag == true){
    $(".bar").each(function(i,ele){
        if($(document).scrollTop()>=$(ele).offset().top){
            console.log(i);
            $(".slider-bar-left li").eq(i).css("backgroundColor"," #E2231A").siblings().css("backgroundColor","aqua");
        }
    })
  }
 })

})