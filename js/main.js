$(document).ready(function(){

  var prevSidebar;
  var prevPage;
  var showNav;

  // map
  setTimeout(function(){
    animatePin();
  },500);

  function animatePin(){
    $('.location-pin').animate({
      top: '-=40'
    }, 200, function(){
      $('.location-pin').animate({
        top: '+=40'
      }, 200, function(){
        $('.location-pin').animate({
          top: '-=40'
        }, 200, function(){
          $('.location-pin').animate({
            top: '+=40'
          }, 200)
        })
      })
    })
  }

  $('.rooftop-btn').click(function(){
    $('.isometric-btn').attr('src','images/isometric-btn.png');
    $(this).attr('src','images/rooftop-hover.png');
    $('.map').attr('src', 'images/map-roof.png');
  })

  $('.isometric-btn').click(function(){
    $(this).attr('src','images/isometric-hover.png');
    $('.rooftop-btn').attr('src','images/rooftop-btn.png');
    $('.map').attr('src', 'images/map.png');
  })

  var zoomWidth;
  var zoomHeight;
  var zoomValue = parseInt($('.zoom-slider').val());
  var mapWidth = $('.map').css("width").replace('px','');
  var mapHeight = $('.map').css("height").replace('px','');

  // zoom area
  $('.zoom-out').click(function(){

    $('.zoom-in').prop('disabled', false).css('opacity', '1');
    zoomValue -= 0.2;
    console.log(zoomValue);
    $('.zoom-slider').val(zoomValue);
    if(zoomValue == 1){
      $(this).prop('disabled', true).css('opacity', '0.3');
    }
    zoomWidth = mapWidth * zoomValue;
    zoomHeight = mapHeight * zoomValue;
    $('.map').animate({
      width: zoomWidth,
      marginLeft: $('.map-container').width()/2 - zoomWidth/2,
      marginTop: $('.map-container').height()/2 - zoomHeight/2,
    }, 200);
  })

  $('.zoom-in').click(function(){

    $('.zoom-out').prop('disabled', false).css('opacity', '1');
    zoomValue += 0.2;
    console.log(zoomValue);
    $('.zoom-slider').val(zoomValue);
    if(zoomValue > 1.9){
      $(this).prop('disabled', true).css('opacity', '0.3');
    }
    zoomWidth = mapWidth * zoomValue;
    zoomHeight = mapHeight * zoomValue;
    $('.map').animate({
      width: zoomWidth,
      marginLeft: $('.map-container').width()/2 - zoomWidth/2,
      marginTop: $('.map-container').height()/2 - zoomHeight/2,
    }, 200);
  })

  $('.zoom-slider').on('change',function(){
    zoomValue = parseFloat($(this).val());

    if(zoomValue == 1){
      $('.zoom-out').prop('disabled', true).css('opacity', '0.3');
      $('.zoom-in').prop('disabled', false).css('opacity', '1');
    }else if(zoomValue == 2){
      $('.zoom-out').prop('disabled', false).css('opacity', '1');
      $('.zoom-in').prop('disabled', true).css('opacity', '0.3');
    }else{
      $('.zoom-out').prop('disabled', false).css('opacity', '1');
      $('.zoom-in').prop('disabled', false).css('opacity', '1');
    }

    zoomWidth = mapWidth * zoomValue;
    zoomHeight = mapHeight * zoomValue;
    $('.map').animate({
      width: zoomWidth,
      marginLeft: $('.map-container').width()/2 - zoomWidth/2,
      marginTop: $('.map-container').height()/2 - zoomHeight/2,
    }, 200);
  })

  // nav bar

  // store btn
  $('.store-btn').click(function(){
    showCatList($('.store-list'));
    prevSidebar = "store";
  })

  $('.store-list .close-btn').click(function(){
    closeCatList($('.store-list'));
  })

  $('.store-list .alpha-btn').click(function(){
    $('.store-list').css('background-image', 'url(images/store-alpha.png)');
      $('.store-list .scroll-area img').attr('src', 'images/store-alpha-list.png');
  })

  $('.store-list .cat-btn').click(function(){
    $('.store-list').css('background-image', 'url(images/store-cat.png)');
    $('.store-list .scroll-area img').attr('src', 'images/store-cat-list.png');
  })

  // dining btn
  $('.dining-btn').click(function(){
    showCatList($('.dining-list'));
    prevSidebar = "dining";
  })

  $('.dining-list .close-btn').click(function(){
    closeCatList($('.dining-list'));
  })

  $('.dining-list .alpha-btn').click(function(){
    $('.dining-list').css('background-image', 'url(images/dining-alpha.png)');
  })

  $('.dining-list .cat-btn').click(function(){
    $('.dining-list').css('background-image', 'url(images/dining-cat.png)');
  })

  // attraction btn
  $('.attraction-btn').click(function(){
    showCatList($('.attraction-list'));
    prevSidebar = "attraction";
  })

  $('.attraction-list .close-btn').click(function(){
    closeCatList($('.attraction-list'));
  })

  $('.attraction-list .alpha-btn').click(function(){
    $('.attraction-list').css('background-image', 'url(images/attraction-alpha.png)');
  })

  $('.attraction-list .cat-btn').click(function(){
    $('.attraction-list').css('background-image', 'url(images/attraction-cat.png)');
  })

  $('.scroll-area').click(function(){
    $('.location-flag').show();
    $('.map-radius').hide();
    $('.nav-list').animate({'left': '-313'}, 300, function(){
      $('.step-list').animate({'left': '0'}, 300);
      $('.location-path2').show();
    });
  })

  $('.search-list').click(function(){
    $('.search-content').hide();
    $('.location-flag').show();
    $('.home-content').show();
    $('.nav-bar').animate({'left': '-263'}, 300, function(){
      $('.step-list').animate({'left': '0'}, 300);
      $('.location-path2').show();
    });
    prevSidebar = "search";
  })

  function showCatList(list){
    $('.nav-bar').animate({'left': '-263'}, 300, function(){
      list.animate({'left': '0'}, 300)
    });
    $('.map-radius').animate({
      opacity: 1
    },500);
  }

  function closeCatList(list){
    list.animate({'left': '-313'}, 300, function(){
      $('.nav-bar').animate({'left': '0'}, 300);
    })

    $('.map-radius').animate({
      opacity: 0
    },500);
  }

  // location flag and path
  $('.location-flag1').click(function(){
    $('.location-path1').show();
    $('.location-path2').hide();
    $('.location-path3').hide();
    animateStepList("step1");
  })

  $('.location-flag2').click(function(){
    $('.location-path1').hide();
    $('.location-path2').show();
    $('.location-path3').hide();
    animateStepList('step2');
  })

  $('.location-flag3').click(function(){
    $('.location-path1').hide();
    $('.location-path2').hide();
    $('.location-path3').show();

    animateStepList('step3');
  })

  function animateStepList(img){
    $('.step-list').animate({'left': '-313'}, 300, function(){
      $('.step-list').css('background-image', 'url(images/'+ img +'.png)');
      $('.step-list').animate({'left': '0'}, 300);
    });

  }

  $('.step-list .close-btn').click(function(){
    if(prevSidebar == "store"){
      $('.step-list').animate({'left': '-313'}, 300, function(){
        $('.store-list').animate({'left': '0'}, 300);
      })
      hideFlagPath();
      $('.map-radius').show();
    }else if(prevSidebar == "dining"){
      $('.step-list').animate({'left': '-313'}, 300, function(){
        $('.dining-list').animate({'left': '0'}, 300);
      })
      hideFlagPath();
      $('.map-radius').show();
    }else if(prevSidebar == "attraction"){
      $('.step-list').animate({'left': '-313'}, 300, function(){
        $('.attraction-list').animate({'left': '0'}, 300);
      })
      hideFlagPath();
      $('.map-radius').show();
    }else if(prevSidebar == "ad"){
      $('.home-content').hide();
      $('.poster-content').show();
      $('.step-list').animate({'left': '-313'}, 300);
      $('.nav-bar').animate({'left':'0'}, 300);
      hideFlagPath();
      $('.map-radius').hide();
    }else{
      $('.home-content').hide();
      $('.search-content').show();
      $('.step-list').animate({'left': '-313'}, 300);
      $('.nav-bar').animate({'left':'0'}, 300);
      hideFlagPath();
      $('.map-radius').hide();
    }
  })

  function hideFlagPath(){
    $('.location-flag1').hide()
    $('.location-flag2').hide()
    $('.location-flag3').hide()
    $('.location-path1').hide();
    $('.location-path2').hide();
    $('.location-path3').hide();
  }

  // other btns
  $('.search-btn').click(function(){
    $('.home-content').hide();
    $('.search-content').show();
  })

  $('.promo-btn').click(function(){
    $('.home-content').hide();
    $('.promo-content').show();
  })

  $('.building-btn').click(function(){
    $('.home-content').hide();
    $('.about-content').show();
  })

  $('.about-btn').click(function(){
    $('.home-content').hide();
    $('.about-content').show();
  })

  // sidebar content
  $('.poster-content .back-btn').click(function(){
    if(prevPage == "ad"){
      $('.home-content').show();
      setTimeout(function(){
        animatePin();
      },500);
      if (parseInt($('.nav-bar').css('left')) == 0){
        $('.map-radius').hide();
      }else{
        $('.map-radius').show();
      }
    }else{
      $('.promo-content').show();
    }
    $('.poster-content').hide();

  })

  $('.poster-content .direction-btn').click(function(){
    $('.home-content').show();
    $('.poster-content').hide();
    $('.location-flag1').show()
    $('.location-flag2').show()
    $('.location-flag3').show()

    if(parseInt($('.nav-bar').css('left')) == 0){
      $('.nav-bar').animate({'left': '-263'}, 300, function(){
        $('.step-list').animate({'left': '0'}, 300);
        $('.location-path2').show();
        $('.map-radius').hide();
      });
    }else if(parseInt($('.step-list').css('left')) == 0){

    }else{
      $('.nav-list').animate({'left': '-313'}, 300, function(){
        $('.step-list').animate({'left': '0'}, 300);
        $('.location-path2').show();
        $('.map-radius').hide();
      });
      showNav = true;
    }

    prevSidebar = "ad";

  })

  $('.promo-content .back-btn').click(function(){
    $('.home-content').show();
    setTimeout(function(){
      animatePin();
    },500);
    $('.nav-bar').animate({'left':'0'}, 300);
    $('.promo-content').hide();
  })

  $('.promo-content div').click(function(){
    $('.poster-content').show();
    $('.promo-content').hide();
    prevPage = "promo";
  })

  $('.about-content .back-btn').click(function(){
    $('.home-content').show();
    setTimeout(function(){
      animatePin();
    },500);
    $('.about-content').hide();
  })

  $('.search-content .back-btn').click(function(){
    $('.home-content').show();
    setTimeout(function(){
      animatePin();
    },500);
    $('.search-content').hide();
  })

  // ad slider
  // $('.poster-slider').slick({
  //   arrows: false,
  //   autoplay: true
  // });

  $('.poster-slider').click(function(){
      $('.home-content').hide();
      $('.poster-content').show();
      $('.promo-content').hide();
      hideFlagPath();
      prevPage = "ad";
  })
});
