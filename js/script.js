$(document).ready(function(){
  $('.navigation-toggler').click(function(){
      $('.navigation-collapse').slideToggle(300);
  });
  
  smallScreenMenu();
  let temp;
  function resizeEnd(){
      smallScreenMenu();
  }

  $(window).resize(function(){
      clearTimeout(temp);
      temp = setTimeout(resizeEnd, 100);
      resetMenu();
  });
});


const subMenus = $('.sub-menu');
const menuLinks = $('.menu-link');

function smallScreenMenu(){
  if($(window).innerWidth() <= 992){
      menuLinks.each(function(item){
          $(this).click(function(){
              $(this).next().slideToggle();
          });
      });
  } else {
      menuLinks.each(function(item){
          $(this).off('click');
      });
  }
}

function resetMenu(){
  if($(window).innerWidth() > 992){
      subMenus.each(function(item){
          $(this).css('display', 'none');
      });
  }
}



// category Page Owl Carousel scripts

    $(".owl-two").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      autoplayTimeout: 4000,
      autoplay: true,
      responsive: {
        0: {
          items: 3,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });

    $(".owl-one").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      autoplayTimeout: 3000,
      autoplay: true,
      responsive: {
        0: {
          items: 3,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });


    $(".category-section").owlCarousel({
      loop: true,
      margin: 10,
      center: true,
      nav: true,
      dots: false,
      autoplayTimeout: 6000,
      autoplay: true,
      responsive: {
        0: {
          items: 3,
        },
        600: {
          items: 4,
        },
        1000: {
          items: 5,
        },
      },
    });

// Category Page Filter Option Click Event


    //function to show filterside bar
function myFunction(){
    document.getElementById("filter_sidebar").style.transition="ease-in-out 0.5s";
    document.getElementById("filter_sidebar").style.display="block";
    document.getElementById("filter_sidebar").style.right="120px";
    document.getElementById("filter_sidebar").style.boxShadow="0px 0px 20px rgba(0, 0, 0, 0.132)";
    
  }

    //function to hide filterside bar
function backFunction(){
    document.getElementById("filter_sidebar").style.transition="ease-in-out 0.5s";
    document.getElementById("filter_sidebar").style.display="none";
    document.getElementById("filter_sidebar").style.right="-3000px";
    document.getElementById("filter_sidebar").style.boxShadow="0px 0px 20px rgba(0, 0, 0, 0.132)";
    
  }

//functions to change the price of main image
function pdtPrice1(){
  document.getElementById("productPrice").innerHTML="699";
  document.getElementById("active").style.border="1px solid #cc0000"
  // document.getElementById("productcutPrice").innerHTML.strike="₹799";

}
function pdtPrice2(){
  document.getElementById("productPrice").innerHTML="799";
  // document.getElementById("productcutPrice").innerHTML.strike="₹899";

}
function pdtPrice3(){
  document.getElementById("productPrice").innerHTML="899";
  // document.getElementById("productcutPrice").innerHTML.strike="₹999";

}
var i = 0;
function addonPlus(){
        document.getElementById('addonNumValue').value = ++i;
    }

function addonMinus(){
      document.getElementById('addonNumValue').value = --i;
  }



  
  