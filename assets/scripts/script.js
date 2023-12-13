/* document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
}); */
$(document).ready(function () {


  $(".mainpage_postslider").slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  });

  $('.organization-image__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: $('.partners-slider__arrows'),
  });

  $('.photo-gallery-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: $('.photo-gallery__arrows')
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $("header").addClass("header-scroll");
    } else {
      $("header").removeClass("header-scroll");
    }

    const $element = $("header");

    if ($(window).scrollTop() === 0) {
      $element.removeClass("header-scroll");
    }

    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();

    $(".count").each(function () {
      var $this = $(this);
      var elementTop = $this.offset().top;

      if (elementTop <= scrollTop + windowHeight) {
        if (!$this.hasClass("counted")) {
          $this.addClass("counted");

          var countTo = $this.attr("data-count");

          $({ countNum: $this.text() }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 4000,
              easing: "linear",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              },
            }
          );
        }
      }
      $(".circles").each(function () {
        var $this = $(this);
        var elementTopCircle = $this.offset().top;

        if (elementTopCircle <= scrollTop + windowHeight) {
           if(!$this.hasClass("move")){
            $this.addClass("move")
           }
        }
      });
    });

   
  });

  $(".burgerarrov").click(function () {
    $(this).parent().toggleClass("burgeropen"),
      $(this).parent().toggleClass("rotate");
  });

  Fancybox.bind('[data-fancybox="video"]', {});
  Fancybox.bind('[data-fancybox="text-page__images"]', {});
  Fancybox.bind('[data-fancybox="photo-gallery_images"]', {});

});
