$(document).ready(function(){
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true, //是否重複
        speed: 1300, //滑動速度
        autoplay:{
          delay:1900 //自動輪播
          },
        effect:'cards',//多種效果 silde/coverflow/cube/flip/fade/cards
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        /*navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },*/
      
        // And if we need scrollbar
        /*scrollbar: {
          el: '.swiper-scrollbar',
        },*/
      });
})