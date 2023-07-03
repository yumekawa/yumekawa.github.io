// JavaScript Document
/*--------------------------------------------------

	ADOBE JP FONT
	
---------------------------------------------------*/
//Source Han Serif Japanese

/*--------------------------------------------------

	header sp
	
---------------------------------------------------*/
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {

  ham.classList.toggle('active');
  nav.classList.toggle('active');

});
/*--------------------------------------------------

	croth fade in,out image
	
---------------------------------------------------*/
/*
(function($) {
 var elInner, duration, defaultIndex, switchImage;
elInner = document.getElementsByClassName('image-crossfader-inner');
duration = 5000;
defaultIndex = 0;
switchImage = function(next) { 
  var current = next ? (next - 1) : elInner.length - 1;
 elInner[current].classList.remove('is-visible');
  elInner[next].classList.add('is-visible');
  next = (++next < elInner.length) ? next : 0;
  setTimeout(switchImage.bind(this, next), duration);
};
window.onload = switchImage.bind(this, defaultIndex);
	
})(jQuery);
*/
/*--------------------------------------------------

	smooth scroll
	
---------------------------------------------------*/
$(function(){
    $(".page_top").hide();
    $(window).on("scroll", function() {		
        if ($(this).scrollTop() > 100) {
            $('.page_top').fadeIn();
        }else{
            $('.page_top').fadeOut();
        }
        scrollHeight = $(document).height(); 
        scrollPosition = $(window).height() + $(window).scrollTop(); 
        footHeight = $("footer").innerHeight();
        if ( scrollHeight - scrollPosition <= footHeight ) {
            $(".page_top").css({
                "position":"absolute",
                "bottom": footHeight + 10
            });
        } else {
            $(".page_top").css({
                "position":"fixed",
                "bottom": "10px"
            });
        }
    });
});
$(function () {
  $('a[href^="#"]').click(function () {
    var adjust = 0;
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
/*--------------------------------------------------

	可視範囲アニメーション
	
---------------------------------------------------*/
$(window).on('scroll',function(){
  $(".js_trigger").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 50 ){
      $(this).addClass('isActive');
    }
  });
 });
/*--------------------------------------------------

	下線を引く
	
---------------------------------------------------*/
$(function() {
    winW = $(window).width();
    spped = 2000;
    $('#horizon1').animate({
        width: winW
    }, spped);
});
/*--------------------------------------------------

	左から右にスライドインするアニメーション
	
---------------------------------------------------*/
function slideAnime(){
  //====左に動くアニメーションここから===
    $('.leftAnime').each(function(){ 
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        //左から右へ表示するクラスを付与
        //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
        $(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
        $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
      }else{
        //左から右へ表示するクラスを取り除く
        $(this).removeClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
      }
    });
  }
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    slideAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    slideAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
/*--------------------------------------------------

	左から右にスライドインするアニメーション
	
---------------------------------------------------*/
// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime(){
    // 背景色が伸びて出現（左から右）
  $('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
    }else{
      $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
    }
  }); 
   // 文字列を囲う子要素
  $('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
    }else{
      $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
    }
  });   
}
// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
/*--------------------------------------------------

	一文字ずつfadeしてでてくるtextアニメーション
	
---------------------------------------------------*/
  function EachTextAnimeControl() {
    $('.eachTextAnime').each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("appeartext");
  
      } else {
        $(this).removeClass("appeartext");
      }
    });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    //spanタグを追加する
    var element = $(".eachTextAnime");
    element.each(function () {
      var text = $(this).text();
      var textbox = "";
      text.split('').forEach(function (t, i) {
        if (t !== " ") {
          if (i < 10) {
            textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
          } else {
            var n = i / 10;
            textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
          }
  
        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);
    });
  
    EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
/*--------------------------------------------------

	Swiper slider
	
---------------------------------------------------*/
let swipeOption = {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,
  pagination: false,
  SimulateTouch: false,
}
new Swiper('.swiper-container', swipeOption);