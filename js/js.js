$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider-ring').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1
      }
    }
  ]
})

$('.slider-prices').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 20000,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        infinite: true,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1
      }
    }
  ]
})

$('.slider-mins').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        infinite: true,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1
      }
    }
  ]
})