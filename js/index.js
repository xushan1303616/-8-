$(function(){
  $('#container').fullpage({
    sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
    verticalCentered:false,
    navigation:true,
    //进入某屏
    afterLoad:function (link,index) {
      $('.section').eq(index.index).addClass('now');
    },
    //离开某屏
    onLeave:function(index,nextIndex,direction){
      var currentSection = $('.section').eq(index.index);
      if(index.index===1 && nextIndex.index ===2){   //从第二屏到第三屏
        currentSection.addClass('leaved')
      }else if(index.index===2 && nextIndex.index ===3){    //从第三屏到第四屏
        currentSection.addClass('leaved')
      }else if(index.index===4 && nextIndex.index ===5){  //从第五屏到第六屏
        currentSection.addClass('leaved');
        $('.screen06 .box').addClass('show')
      }else if(index.index===5 && nextIndex.index ===6){
        $('.screen07 .star img').each(function (i,item) {
          $(this).delay(i*0.25*1000).fadeIn();
        })
      }
    },

    // 点击更多，切换下一页
    afterRender:function () {
      $('.more').on('click',function () {
        $.fn.fullpage.moveSectionDown()
      });

      //  当第四屏购物车结束之后执行收货地址的动画
      $(".screen04 .cart").on('transitionend',function () {
        $('.screen04 .address').show().find('img:last').fadeIn(1000);
        $('.screen04 .text').addClass('show')
      })

      $('.screen08').on('mouseover',function (e) {
        $('.screen08 .hand').css({
          left:e.clientX-300,
          top:e.clientY-50,
        })
      }).find('.again').on('click',function () {
        $('.now,.show,.leaved').removeClass('now').removeClass('show')
          .removeClass('leaved');
        $('.content[style]').removeAttr('style');
        $.fn.fullpage.moveTo(1)

      })
    },
    scrollingSpeed:1000,
  });
});