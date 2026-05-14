$(function() {
  //hover(引数1(マウスが乗った時),引数2(マウスが離れた時));
  $("a").hover(function(){
    $(this).css("color","#f00")
  }, function(){
    $(this).css("color","#0000FF")
  })
});