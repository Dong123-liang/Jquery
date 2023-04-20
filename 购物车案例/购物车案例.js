$(function() {
    // 1. 全选 全不选功能模块
    // 就是把全选按钮（checkall）的状态赋值给 三个小的按钮（j-checkbox）就可以了
    // 事件可以使用change
    $(".checkall").change(function() {
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
        if ($(this).prop("checked")) {
            // 让所有的商品添加 check-cart-item 类名
            $(".cart-item").addClass("check-cart-item");
        } else {
            // check-cart-item 移除
            $(".cart-item").removeClass("check-cart-item");
        }
        getSum();
    });

    $(".j-checkbox").change(function() {
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
        getSum();
    });
//+增加数量
    $(".increment").click(function(){
        var num = $(this).siblings(".itxt").val();
        num++;
        $(this).siblings(".itxt").val(num);
        var price = $(this).parents(".p-num").siblings(".p-price").html();
        price = price.substr(1);
        priceAll = (price * num).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + priceAll);
        getSum();
    })
//-减少数量
   $(".decrement").click(function(){
    var num = $(this).siblings(".itxt").val();
    num--;
    if(num < 1){
        num = 1;
    }
    $(this).siblings(".itxt").val(num);
    var p = $(this).parents(".p-num").siblings(".p-price").html();
    p = p.substr(1);
    $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * num).toFixed(2));
    getSum();
   })
// 小计模块 
   $(".itxt").change(function(){
    var n =$(this).val();
    var p = $(this).parents(".p-num").siblings(".p-price").html();
    p = p.substr(1);
    $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * n).toFixed(2));
    getSum();
   })


 //计算总计
getSum();
/* function getSum(){
    var count= 0;
    var money = 0;
    $(".itxt").each(function(i,ele){
        count += parseInt($(ele).val());
    });
    $(".amount-sum em").text(count);
    $(".p-sum").each(function(i,ele){
        money += parseFloat($(ele).text().substr(1));
    });
    $(".price-sum em").text("￥" + money.toFixed(2));
    } */
   function getSum() {
        var count = 0; // 计算总件数 
        var money = 0; // 计算总价钱
        //遍历所有带有checked的选择框 并为他计算总件数
        $('.j-checkbox:checked').each(function(index, ele) {
            count += parseInt($(ele).parents('.p-checkbox').siblings('.p-num').find('.itxt').val())
        });
        $(".amount-sum em").text(count);
        //遍历所有带有checked的选择框 并为他计算总价钱
        $('.j-checkbox:checked').each(function(index, ele) {
            money += parseFloat($(ele).parents('.p-checkbox').siblings('.p-sum').text().substr(1))
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
 
    }
//删除当前商品模块
$(".p-action a").click(function() {
    // 删除的是当前的商品 
    $(this).parents(".cart-item").remove();
    getSum();
});
//删除复选框选中的商品    
    $(".remove-batch").click(function(){
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });
//清空购物车，全删    
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    })
})  