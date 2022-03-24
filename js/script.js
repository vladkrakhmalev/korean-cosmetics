$(document).ready(() => {



  //Open stages list
  $('.stages__btn').click(function() {
    $('.stages__list').addClass('_open')
    $('.stages__btn').css('display', 'none')
  })



  //Calc slider
  $("#calc__slider").slider({
      animate: "fast",
      range: "min",    
      value: 12,
      min: 1,
      max: 24,
      create: () => { calculatePrice() },
      change: () => { calculatePrice() },
      slide: () => { calculatePrice() },
  })



  //Calc format
  $('.calc__format-item').click(function() {
    $('.calc__format-item').removeClass('_active')
    $(this).addClass('_active')
    calculatePrice()
  })



  //Calc price
  function calculatePrice() {
    let format = $('.calc__format-item._active').attr('value')
    let mounth = $("#calc__slider").slider("value")
    
    $.post('price.php', '', function (res) {
      data = JSON.parse(res).data
      let price = data[format][mounth] + ' руб.'
      $('.calc__price').text(price)
    })
  }



  //Submit data
  $('form').on('submit', function(e) {
    e.preventDefault()
    let data = $(e.target).serialize()

    $.post('form.php', data, function (res) {
      let result = JSON.parse(res)
      
      if (result.success == "1") {
        $('#result .popup__subtitle').text("Ваши данные успешно отправленны!")
      } else {
        $('#result .popup__subtitle').text("Произошла ошибка. Попробуйте повторить позже.")
      }

      $('#result').addClass('_open')
    })

  })



  //Open popup
  $('._open-popup').click(function(e) {
    e.preventDefault()
    let popup = $(this).attr('href')
    $(popup).addClass('_open')
    $('.body').addClass('_stop-scroll')
  })
  $('.popup__btn-close').click(function() {
    $(this).closest('.popup__wrapper').removeClass('_open')
    $('.body').removeClass('_stop-scroll')
  })



  //Slider 
  let swiper = new Swiper(".gallery__slider", {
    slidesPerView: 1,
    spaceBetween: 15,
    grid: {
      rows: 2,
    },
    pagination: {
      el: ".gallery__dots",
      clickable: true,
    },
    navigation: {
      lockClass: 'gallery__control',
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      560: {
        slidesPerView: 2,
      },
      720: {
        slidesPerView: 3,
      }
    }
  })



  //Input tel
  $('input[type="tel"]').on('input', function() {
    if ($(this).val().length == 1) {
      if ($(this).val() == '9') { $(this).val('+79') }
      if ($(this).val() == '7') { $(this).val('+7') }
    }
  })



   //Animate
   class Animate {
    constructor(section) {
      if (section.length) {
        
        if (section.offset().top <= $(window).scrollTop() + $(window).height() - 300) {
          $.each(section.find('[animate]'), function() {
            $(this).attr('animate', 'end')
            setTimeout(() => {
              section.removeClass('_animate-start')
            },2000)
          })
        }

        $(window).scroll(function() {
          if (section.offset().top<= $(window).scrollTop() + $(window).height() - 250) {
            $.each(section.find('[animate]'), function() {
              $(this).attr('animate', 'end')
            })
          }
          if ($('.footer').offset().top<= $(window).scrollTop() + $(window).height() - 100) {
            $.each($('.footer').find('[animate]'), function() {
              $(this).attr('animate', 'end')
            })
          }
        })

      }
    }
  }
  let anim_1  = new Animate($('.header'))
  let anim_2  = new Animate($('.mainscreen'))
  let anim_3  = new Animate($('.facts'))
  let anim_4  = new Animate($('.provide'))
  let anim_5  = new Animate($('.gallery'))
  let anim_6  = new Animate($('.stages'))
  let anim_7  = new Animate($('.tariffs'))
  let anim_8  = new Animate($('.calc'))
  let anim_9  = new Animate($('.download'))
  let anim_10 = new Animate($('.check'))
  let anim_11 = new Animate($('.footer'))



})