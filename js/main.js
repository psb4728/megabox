var bannerSwiper = new Swiper('.banner-swiper-container', {
  autoplay: {
    delay: 5000,
    loop: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// movie chart slide
var movieSwiper = new Swiper('.movie-swiper-container', {
  slidesPerView: 4,
  spaceBetween: 18,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    // when window width is >= 300px
    300: {
      slidesPerView: 1.6,
      spaceBetween: 18
    },
    // when window width is >= 400px
    400: {
      slidesPerView: 1.6,
      spaceBetween: 18
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    // when window width is >= 960px
    900: {
      slidesPerView: 3,
      spaceBetween: 18
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 18
    }
  }
});

// movie chart tab menu
var movBtn = $('.movie-tit > ul > li');
var movCon = $('.movie-chart > div');

movCon.hide().eq(0).show();

movBtn.click(function(e) {
  e.preventDefault();
  var target = $(this);
  var index = target.index();

  movBtn.removeClass('active');
  target.addClass('active');
  movCon.css('display','none');
  movCon.eq(index).css('display','flex');
});

// notice tab menu
var tabMenu = $('.notice');

tabMenu.find('ul > li > ul').hide();
tabMenu.find('li.active > ul').show();

function tabList(e) {
  e.preventDefault();
  var target = $(this);
  target.next().show().parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();
}

tabMenu.find('ul > li > a').click(tabList).focus(tabList);