function getObjectURL(file) {
  var url = null;
  if (window.createObjectURL != undefined) { // basic
    url = window.createObjectURL(file);
  } else if (window.URL != undefined) { // mozilla(firefox)
    url = window.URL.createObjectURL(file);
  } else if (window.webkitURL != undefined) { // webkit or chrome
    url = window.webkitURL.createObjectURL(file);
  }
  return url;
}
// layer.open({content: 'test'});
$(function() {
  //鼠标经过头像显示账户信息
  var accountDetailInfo = $('.account-wapper .detail-info');
  $('.account-wapper').on('mouseenter', function() {
    accountDetailInfo.stop().slideDown('fast');
  }).on('mouseleave', function() {
    accountDetailInfo.stop().slideUp('fast');
  });

  //公共广告模块
  var adjSwiper = new Swiper('.adj-swiper-container', {
    // pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    // paginationClickable: true,
    autoplay: 3000,
    loop: true
  });

  //商品详情加号事件
  $('#add_product').on('click', function() {
    $('#add_product_input').val(parseInt($('#add_product_input').val()) + 1);
  });

  /*=====================================
  =            reward module            =
  =====================================*/
  (function() {
    var popMask = $('#mj_reward_pop_mask');
    //弹出打赏弹窗
    $('.mj-reward').on('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      popMask.show();
    });

    //关闭打赏弹窗
    $('.mj-close-reward-pop').on('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      popMask.hide();
    });

    // 打赏弹窗选项卡
    var rewardControls = $('.mj-reward-controls li'),
      rewardContents = $('.mj-reward-main-content .mj-reward-item');
    rewardControls.on('click', function() {
      $(this).addClass('active').siblings().removeClass('active');
      rewardContents.hide().eq($(this).index()).show();
    });

    // 虚拟商城商品选择
    var fictitiousLists = $('.mj-fictitious-list li'),
      entityLists = $('.mj-entity-list li'),
      diamondLists = $('.mj-diamond-list li');
    fictitiousLists.on('click', function(e) {
      console.log(1);
      $(this).addClass('active').siblings().removeClass('active');
    });

    entityLists.on('click', function(e) {
      console.log(1);
      $(this).addClass('active').siblings().removeClass('active');
    });

    diamondLists.on('click', function(e) {
      console.log(1);
      $(this).addClass('active').siblings().removeClass('active');
    });
  })();
  /*=====  End of reward module  ======*/


  /*=====================================
    =            commont module            =
    =====================================*/
  (function() {
    var replyCommontBtn = $('.mj-reply-commont-btn'),
      showCommontBtn = $('.mj-show-commont-btn');
    replyCommontBtn.on('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      if (this.flag) {
        this.flag = false;
        $('.mj-commont-item .mj-reply-commont-wapper').hide();
      } else {
        this.flag = true;
        $('.mj-commont-item .mj-reply-commont-wapper').hide();
        $(this).parent().siblings('.mj-reply-commont-wapper').show();
      }
    });

    showCommontBtn.on('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      if (this.flag) {
        this.flag = false;
        showCommontBtn.removeClass('on');
        $('.mj-commont-item .mj-reply-commont-list-wapper').hide();
      } else {
        this.flag = true;
        $('.mj-commont-item .mj-reply-commont-list-wapper').hide();
        showCommontBtn.removeClass('on');
        $(this).addClass('on');
        $(this).parent().siblings('.mj-reply-commont-list-wapper').show();
      }
    });
  })();
  /*=====  End of commont module  ======*/


  /*=====================================
    =            mall module            =
    =====================================*/
  (function() {
    $('#mj_select_payment_method span').on('click', function() {
      $(this).addClass('active').siblings().removeClass('active');
    });
    $('.mj-show-confirm-mask').on('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      $('#mj_reward_pop_mask').show();
    });
    // 段子评论页面的回复只显示一条
    $('.mj-commont-item .mj-reply-commont-list').css('display', 'none');
    $('.mj-commont-item .mj-reply-commont-list:first-child').css('display', 'block');

  })();
  /*=====  End of mall module  ======*/


  /*=====================================
    =            充值 module            =
    =====================================*/
  (function() {

    //充值金额
    var moneys = $('.mj-add-recharge-wapper span'),
      showMoneys = $('.mj-ad-show-recharge-money'),
      price;
    moneys.on('click', function() {
      $(this).addClass('f5-active').siblings().removeClass('f5-active');
      price = parseInt($('.mj-add-recharge-wapper span.f5-active').data().price).toFixed(2);
      showMoneys.text(price);
    });
    $('.mj-add-recharge-wapper input').on('input', function(e) {
      var val = $(this).val() + '';
      val = val.replace(/[^\d]/g, '');
      $(this).val(val);
      if (val != '') {
        moneys.removeClass('f5-active');
        price = parseInt($(this).val()).toFixed(2);
        showMoneys.text(price);
      } else {
        moneys.eq(0).addClass('f5-active');
        price = parseInt($('.mj-add-recharge-wapper span.f5-active').data().price).toFixed(2);
        showMoneys.text(price);
      }
    });

    //充值方式
    $('.mj-add-choose-recharge-methods span').on('click', function() {
      $(this).addClass('f5-active').siblings().removeClass('f5-active');
    });

  })();
  /*=====  End of 充值 module  ======*/

  /*=====================================
    =            礼物领取 module            =
    =====================================*/
  (function() {
    $('.f6-liwu li a').on('click', function(e) {
      if ($(this).text() == '领取') {
        e.preventDefault();
        e.stopPropagation();
        $('#mj_reward_pop_mask').show();
      }
    });
  })();
  /*=====  End of 礼物领取 module  ======*/


  /*=====================================
    =            个人信息 module            =
    =====================================*/
  (function() {
    var mjAddImgWapper = $('.mj-add-view-img-wapper');
    $('.mj-add-view-img-lists img').on('click', function() {
      $(this).parent().addClass('active').siblings().removeClass('active');
      mjAddImgWapper.attr('src', $(this).data().src);
    });
  })();
  /*=====  End of 个人信息 module  ======*/

  /*=====================================
    =            会员中心 module            =
    =====================================*/
  (function() {
    $('.mj-add-vip-choose span').on('click', function() {
      $(this).addClass('f5-active').siblings().removeClass('f5-active');
    });

    $('.mj-vip-btn').on('click', function() {
      $('#mj_reward_pop_mask').show();
    });
  })();
  /*=====  End of 会员中心 module  ======*/


  // 图片上传预览
  $('.mj-add-image-choose').on('change', function(e) {
    console.log(e.target.files[0]);
    console.log(getObjectURL(e.target.files[0]));
    $(this).parent().css({
      backgroundImage: 'url(' + getObjectURL(e.target.files[0]) + ')'
    });
  });
  $(function() {
    $('.d6 p b:first-child').on('click', function() {
      $('#d6-aaa').show();
      $('#d6-bbb').hide();
    });
    $('.d6 p b:last-child').on('click', function() {
      $('#d6-bbb').show();
      $('#d6-aaa').hide();
    });
  });
});