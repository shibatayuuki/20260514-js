$(function() {
  // jQueryを記述
  //$("p").fadeOut();

  //速度指定
  //$("p").fadeOut(5000);

  //終了後の処理を指定
  $("p").fadeOut(2000,function(){
    alert("フェイドアウトしました");
  })
});