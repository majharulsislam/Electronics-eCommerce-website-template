
$( document ).ready(function() {

  // banner slider
  $('.banner_image_slider').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      fade:true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: '',
      prevArrow: '',
      dots: true,
  });

  // feature product slider
  $('.feature_product_items').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      nextArrow: '<div class="newproduct-custom-arrow slick-custom-arrow-right"><i class="fas fa-chevron-right"></i>',
      prevArrow: '<div class="newproduct-custom-arrow slick-custom-arrow-left"><i class="fas fa-chevron-left"></i></div>',
      responsive: [
      {
          breakpoint: 1201,
          settings: {
            vertical: false,
            slidesToShow: 4,
            autoplay: true,
          }
      },
      {
          breakpoint: 992,
          settings: {
            vertical: false,
            slidesToShow: 3,
            autoplay: true,
          }
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          slidesToShow: 2,
          autoplay: true,
        }
      }
      ]
  });
  
// Cart full Product quantity
    $('.product_quantity .number .minusq').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.product_quantity .number .plusq').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });

    //======> Mobile filter triger menu product listing page
      $('.mobile_filter p').on('click',function(){
        $('.product_listing_left_side').toggleClass('active');
        return false;
      });


    // show password
    $(".lock").click(function() {
        input = $(this).parent().find("input");
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });


});

// Load more items for click load more button
$(document).ready(function(){
     // load more 5
    $(".product_listing_products_item .col-md-3").slice(0, 8).show();
    $("#loadmore").on("click", function(e){
      e.preventDefault();
      $(".product_listing_products_item .col-md-3:hidden").slice(0, 4).slideDown();
      if($(".product_listing_products_item .col-md-3:hidden").length == 0) {
        $("#loadmore").text("No More Products").addClass("noContent");
      }
    });
})
// end load more button

// FAQs tab
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove('opentab');
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activatetab", "");
  }
  document.getElementById(cityName).classList.add('opentab');
  evt.currentTarget.className += " activatetab";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
// end FAQs




