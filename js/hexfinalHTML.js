$(document).ready(function(){
  //banner-swiper效果
  const swiper = new Swiper('.banner', {
    // Optional parameters
    direction: 'horizontal',
    loop: true, //是否重複
    speed: 1300, //滑動速度
    autoplay:{
      delay:1000 //自動輪播
      },
    effect:'slide',//多種效果 silde/coverflow/cube/flip/fade/cards
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });

  //下拉式選單
  $('.dropdown').click(function(event){
    event.preventDefault();
    $('.dropdown').toggleClass('active');
    $('.dropdown-open').slideToggle();
  })

  //top效果
  $('.top').click(function(event){
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    },2000)   
  })
})