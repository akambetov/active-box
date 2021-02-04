$(function () {
  const header = $('#header')

  // FIXED HEADER
  $(window).on('scroll load resize', function () {
    const intro = $('#intro')
    // const introH = intro.height() //высота без padding
    let introH = intro.innerHeight() //высота с padding
    let scrollPos = $(this).scrollTop() //Скрол с верху
    
    scrollPos >= introH ? 
      header.addClass('fixed') : 
      header.removeClass('fixed')
    
    // console.log(scrollPos)
  })
  
  // SMOOTH SCROLL  
  function scrollDistance (scrollToElem, elemOffset) {
    if ($(window).width() > 767)
      return elemOffset - 70
    else if(scrollToElem === '#features' && $(window).width() <= 414)
      return 491
    else if(scrollToElem === '#features' && $(window).width() <= 767)
      return 377
    else if($(window).width() <= 767)
      return elemOffset - 60
  }
  
  $('[data-scroll]').on('click', function (e) {
    e.preventDefault()
    // this.getAttribute('data-scroll')
    let scrollToElem = $(this).data('scroll')
    let elemOffset = $(scrollToElem).offset().top // отсупт с верху до родительского элемента + margin-top элемента
    $('body, html').animate({
      scrollTop: scrollDistance(scrollToElem, elemOffset)
    }, 750)
    $('#nav').removeClass("show") // Убрать содержимое Burger после клика на ссылку
  })

  // BURGER - Nav Toggle
  $('#navToggle').on('click', function (e) {
    e.preventDefault()
    $('#nav').toggleClass("show") // Показать скрыть содержимое Burger при клике на Burger
  })
});

// REVIEWS http://kenwheeler.github.io/slick/
const slider = $('#reviewsSlider')
slider.slick ({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  dots: true
});