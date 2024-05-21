
/* TIMER COUNTDOWN 
* ------------------------------------------------------ */
var clTimeCount = function () { 
// Set the date we're counting down to
var countDownDate = new Date("June 13, 2024 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

}

/* Timeline checking
* ------------------------------------------------------ */
var clTimeChecking = function () {
  // Get current time
  var now = new Date().getTime();

    // 27/05/2024 đến ngày 02/06/2024
  var time1 = new Date("May 27, 2024 00:00:00").getTime(); 
    // 16/06/2024 đến ngày 23/06/2024
  var time2 = new Date("June 16, 2024 00:00:00").getTime();
    // 23/06/2024 đến ngày 25/06/2024
  var time3 = new Date("June 23, 2024 00:00:00").getTime();
    // 12h ngày 26/06/2024
  var time4 = new Date("June 26, 2024 12:00:00").getTime();
    // 28/06/2024
  var time5 = new Date("June 28, 2024 00:00:00").getTime();


      function ableTimeline1() {
        var timeline1 = document.getElementById("time-1");
        timeline1.classList.add("timeline-able");
      }
      function ableTimeline2() {
        var timeline2 = document.getElementById("time-2");
        timeline2.classList.add("timeline-able");
      }
      function ableTimeline3() {
        var timeline3 = document.getElementById("time-3");
        timeline3.classList.add("timeline-able");
      }
      function ableTimeline4() {
        var timeline4 = document.getElementById("time-4");
        timeline4.classList.add("timeline-able");
      }
      function ableTimeline5() {
        var timeline5 = document.getElementById("time-5");
        timeline5.classList.add("timeline-able");
      }

      if (now >= time1) {
        ableTimeline1();
      }

      if (now >= time2) {
        ableTimeline2();
      }

      if (now >= time3) {
        ableTimeline3();
      }

      if (now >= time4) {
        ableTimeline4();
      }

      if (now >= time5) {
        ableTimeline5();
      }

}


/* Pre Loading
* ------------------------------------------------------ */
var clPreLoad = function () { 
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    
    window.setTimeout(() => {
      loader.classList.add("loader--hidden");
      
      loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
      });
      
    }, 1000);

  });
}

/* Progress Bar
* ------------------------------------------------------ */
var clProgressBar = function () {
    // When the user scrolls the page, execute myFunction 
    window.onscroll = function() {scrollFunction()};
  
    function scrollFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("progressBar").style.width = scrolled + "%";
    }
}

/* Slick - Works Slider
* ------------------------------------------------------ */
var clWorksSlider = function () {
  $(document).ready(function(){
    $('.works-slider').slick({
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      arrows: false,
      dots: true,

    });
  });
}

/* Slick - Competition Slider
* ------------------------------------------------------ */
var clCompetitionSlider = function () {
  $(document).ready(function(){
    $('.competition-slider').slick({
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: false,
      pauseOnHover: false,
      pauseOnFocus: true,
      arrows: false,
      dots: true,
    });
  });
}

/* Award Counter
* ------------------------------------------------------ */
var clAwardCount = function () {
const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )
const el = document.querySelector( '.award-count-number')
IO.observe( el )
};

/* Menu Mobile Open/Close
* ------------------------------------------------------ */
  function closeNav() {
    document.getElementById("mobileNav").style.width = "0%";
  }
  function openNav() {
    // document.getElementById("mobileNav").style.display = "block";
    document.getElementById("mobileNav").style.width = "100%";
  }



  clPreLoad();
  clProgressBar();
  clTimeCount();
  clCompetitionSlider();
  clWorksSlider();
  clTimeChecking();
  clAwardCount();
  openNav();
  closeNav();