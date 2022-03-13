$(document).ready(function() {

  $(".product-list").masonry();
  $(".homepage-slide").owlCarousel({
    navigation: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    items: 1,
    responsiveClass:true,
    navigationText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
  });

  $(".product-promotions").owlCarousel({
    navigation: false,
    dots:true,
    slideSpeed: 300,
    paginationSpeed: 400,
    items: 1,
  });


  $(".menu_trigger").on("click", function(){
    $(".off-canvas-menu, .off-canvas-overly").addClass("active");
    return false;
  });
  $(".menu-close, .off-canvas-overly").on("click", function(){
    $(".off-canvas-menu, .off-canvas-overly").removeClass("active");
    return false;
  });
});
