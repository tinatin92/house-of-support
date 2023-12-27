document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetElement = document.querySelector(this.getAttribute('href'));
      
      // Calculate the scroll position, considering the target 100px higher
      const scrollPosition = targetElement.offsetTop - 150;

      // Scroll into view with the updated position
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    });
  });
});

$(document).ready(function () {
  $(".mainpage_postslider *[tabindex]").focus(function (event) {
    event.preventDefault();

    event.stopPropagation();

    if ($(event.target).prop("tabindex") < 0) return;

    const slide = $(event.target).parents(".slick-slide");

    slide[0].scrollIntoView({ block: "center" }); 
  });
  $('.mainpage_postslider.slick-cloned *[tabindex]').each(

    function(i,el)

    {

       $(el).prop('tabindex',-1);

    }

  )

  $(".mainpage_postslider").slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
   /*  autoplay: true, */
  });

  $(".organization-image__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: $(".partners-slider__arrows"),
    responsive: [
      {
        breakpoint: 993,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $(".photo-gallery-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: $(".photo-gallery__arrows"),
    responsive: [
      {
        breakpoint: 768,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $(".team-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: $(".team-slider__arrows"),
    responsive: [
      {
        breakpoint: 993,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });

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
          if (!$this.hasClass("move")) {
            $this.addClass("move");
          }
        }
      });
    });
  });
/*    $("#donation-button").click(function (e) {
     e.preventDefault();
     var donationButton = $(this);
    $(".donation-invisiable").addClass("open");

    if (donationButton.hasClass('opened')) {
      // This is the second click
      $(".donation-input input").addClass('red');
    }else{
    donationButton.addClass('opened');
    }
 

    if ($(".donation-input input[type='text']").val() !== "" &&
            $(".donation-input input[type='email']").val() !== "" &&
            $("#donation").val() !== "") {
            // Perform form submission
            //alert('Form submitted!');
            // Uncomment the line below to actually submit the form
            donationButton.addClass('yellow')

             $("#donationForm").submit();
        } else {
          $(".donation-input input").addClass('red')
        }

        
  });  */

  $("#donation-button").click(function (e) {
    e.preventDefault();
    var donationButton = $(this);

    // Check if the donation button has the 'opened' class
    if (donationButton.hasClass('opened')) {
        // This is the second click
        $(".donation-input input").addClass('red');
        $("#donation").addClass('red');
        $('.warning').addClass('open')
    } else {
        // This is the first click
        $(".donation-input input").removeClass('red');
        $("#donation").removeClass('red');
        $(".donation-invisiable").addClass("open");
        donationButton.addClass('opened');
    }
    if ($(".donation-input input[type='text']").val() !== "" &&
    $(".donation-input input[type='email']").val() !== "" &&
    $("#donation").val() !== "") {
      $(".donation-input input").removeClass('red');
      $("#donation").removeClass('red');
      $('.warning').removeClass('open')
    // Perform form submission
    donationButton.addClass('yellow');
    $("#donationForm").submit();
}
});

$('#contactbutton').click(function(e){
    e.preventDefault();

    if($('#contactname').val() !== "" &&
    $('#contactmail').val() !== "" &&
    $('#contactmessage').val() !== "") {
      $('.warning').removeClass('open');
      $('#contactname').removeClass('red');
      $('#contactmail').removeClass('red');
      $('#contactmessage').removeClass('red');

      $("#contactform").submit();
     
    }else{
      $('.warning').addClass('open');
      $('#contactname').addClass('red');
      $('#contactmail').addClass('red');
      $('#contactmessage').addClass('red');
    }
})


  $(".burgerarrov").click(function () {
    $(this).parent().toggleClass("burgeropen"),
      $(this).parent().toggleClass("rotate");
  });
  Fancybox.bind("[data-fancybox]", {});
  Fancybox.bind('[data-fancybox="video"]', {});
  Fancybox.bind('[data-fancybox="text-page__images"]', {});
  Fancybox.bind('[data-fancybox="photo-gallery_images"]', {});

  $(".faq-box").click(function () {
    $(this).toggleClass("active");
  });

  const openModal = $(".team-slider__text");
  const closeModal = $(".modal-button");
  const modalBackground = $(".modal-background");
  const teamModal = $(".team-modal");

  openModal.click(function () {
    $(this).parent().toggleClass("open");
  });
  closeModal.click(function () {
    teamModal.css("display", "none");
    window.location.reload();
  });
  modalBackground.click(function () {
    teamModal.css("display", "none");
    window.location.reload();
  });

  $('.burger-menuicon').click(function(){
    $('.burger-menu').addClass('open')
  });

  $('.menu-button').click(function(){
    $('.burger-menu').removeClass('open')
  })

$('.burger-nav__button').click(function(){
  $(this).closest('.burger-open').toggleClass('open')
})
 
});

/* const openButton = document.querySelector('[data-open-modal]');
const closeButton = document.querySelector('[data-close-modal]');
const modal = document.querySelector('[data-modal]');

openButton.addEventListener('click', function(){

  modal.showModal();
});
closeButton.addEventListener('click', function(){
  modal.close()
})

modal.addEventListener('click', function(e){
  const dialogDimensions = modal.getBoundingClientRect();
  if(
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modal.close()
  }
}) */
function initMap() {
  const myLatlng = { lat: 41.72067159144, lng: 44.80369845458358 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatlng,
  });
  // Create a marker with an SVG icon
  const marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: {
      path:
        "M12 2C7.28 2 3.11 6.18 3.11 11a8.53 8.53 0 0 0 5 7.75c.1.48.23.96.39 1.45l2.32 4.79c.2.41.66.41.86 0l2.32-4.79c.16-.49.29-.97.39-1.45A8.53 8.53 0 0 0 20.89 11 10 10 0 0 0 12 2zm0 14a3.2 3.2 0 0 1-3.2-3.2h6.4A3.2 3.2 0 0 1 12 16z",
      fillColor: "blue",
      fillOpacity: 1,
      strokeWeight: 0,
      scale: 2,
    },
  });
  // Create the initial InfoWindow.
  let infoWindow = new google.maps.InfoWindow({
    content: "Click the map to get Lat/Lng!",
    position: myLatlng,
  });
  infoWindow.open(map);
  // Configure the click listener.
  map.addListener("click", (mapsMouseEvent) => {
    // Close the current InfoWindow.
    infoWindow.close();
    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2),
    );
    infoWindow.open(map);
  });
}
window.initMap = initMap;