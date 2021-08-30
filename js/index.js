    



// swipper Ctor call 
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 700,
      modifier: 1 ,
      slideShadows: true,
    },
    loop:true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
   
  });
  
  // Carsuol ctor call 
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsiveClass:true,
    responsive:{
                    0:{
                        items:1,
                        nav:true
                    },
                    600:{
                        items:2,
                        nav:false
                    },
                    1000:{
                        items:4,
                        nav:true,
                        loop:false
                    }
                }
    })




    // When the user scrolls down 20px from the top of the document, show the button
   var mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}