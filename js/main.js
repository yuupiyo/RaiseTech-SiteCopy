// ドロップダウンメニュー部分
$(function() {
  $('.menu_item').each(function(){
    $(this).hover(
    function(){
      $(this).children('.submenu').slideDown(230);
    },
    function(){
      $(this).children('.submenu').hide();
    }
  );});
});

// ハンバーガーボタンを押した時の挙動部分
$(function() {
  $('.nav_btn').on("click", function(){
    if($('.nav_btn').hasClass('active')) {
      $('.nav_btn').removeClass('active');

      $('.nav_menu').slideUp(230);
      $('.nav_menu').removeClass('open');
      $('.nav_menu').addClass('close');
      

    } else {
      
      $('.nav_btn').addClass('active');

      $('.nav_menu').slideDown(230);
      $('.nav_menu').removeClass('close');
      $('.nav_menu').addClass('open');
    }
  });  
});

// サブメニューホバー時に＋からーに変わる挙動
$(function() {
  $('.menu_item').hover(function(){
    $(this).children('.menu_item-has-children').toggleClass('open');
  });
});

// リサイズした時のナビ部分の挙動
$(function() {
  // $(window).on("load", function() {
  //   $('.nav_menu').addClass('close');
  // });
  $(window).on("load resize", function() {
    if(window.matchMedia("(max-width: 1200px)").matches) {
      $('.nav_menu').removeAttr('style');
      $('.nav_menu').addClass('close');
    } else {
      $('.nav_btn').removeClass('active');
      $('.nav_menu').removeClass('close');
      $('.nav_menu').removeClass('open');
    };
  });
});