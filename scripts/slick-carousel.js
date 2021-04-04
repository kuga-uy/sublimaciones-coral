



  if (screen.width >= 1360) {
  $('.slick-carousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      arrows: true,  
    }); 

  } else if (screen.width < 1360) {
    $('.slick-carousel').slick({
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      arrows: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
    });
  }
