       var navLinks = document.getElementById("navLinks");
        var head1 = document.getElementById("head1");
        var closing = document.getElementById("close-bar");
        var menulist = document.getElementById("menu-bar");
        var head2 = document.getElementById("head2");
        var header = document.getElementById("header");
        function show() {
            navLinks.style.display = "block";
            closing.style.display = "block";
            menulist.style.display = "none";
            head2.style.display = "block";
            head1.style.display = "none";
            header.style.background = "black";
        }
        function Close() {
            navLinks.style.display = "none";
            closing.style.display = "none";
            menulist.style.display = "block";
            header.style.background = "white";
            head1.style.display = "block";
            head2.style.display = "none";
            return false;
        }

        // -- curesol
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })

// -- swiper slider

        var swiper = new Swiper(".mySwiper", {
            pagination: {
              el: ".swiper-pagination",
              type: "progressbar",
              autoplay: true,

            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",

            },
          });

// javascript design pettern video

let array = [
    "./Projector — Create to captivate.webm"
]
let btns = document.querySelectorAll('.btn');
btns.forEach( function(btn) {
btn.addEventListener('click' , function(e) {
    let source = document.getElementsByTagName('source');
    var video1 = document.querySelector('#video1');
let target =  e.currentTarget.classList;
if(target.contains("second")){
    // video1.textContent = array[0]
    source.src="Projector — Create to captivate.webm";
    console.log(source)
// video1.getElementsByTagName('source')[0].src="Projector — Create to captivate.webm";
 video1.src="Projector — Create to captivate.webm";
// source.setAttribute('src', './Projector — Create to captivate.webm');
video1.load();
video1.play();

}  
})    
})

