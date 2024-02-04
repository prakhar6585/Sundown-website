var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");
var elems = document.querySelectorAll(".elem");
var menu = document.querySelector("nav h3");
var full = document.querySelector('#full-scr');
var navimg = document.querySelector('nav img');
var minicircle = document.querySelector("#minicircle");
var loader = document.querySelector("#loader");
var flag = 0;

setTimeout(() => {
  loader.style.top = "-100%";
}, 4000);

function imageOnHover() {
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  })
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    })
  });
}

function swiperJs() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
  });
}

function menuHover() {
  menu.addEventListener('click', function () {
    if (flag == 0) {
      full.style.top = 0;
      navimg.style.opacity = 0;
      flag = 1;
    }
    else {
      full.style.top = "-100%";
      navimg.style.opacity = 1;
      flag = 0;
    }
  });
}

function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    minicircle.style.transform = `translate(${dets.clientX - 10}px , ${dets.clientY - 10}px)`;
    minicircle.style.transform = skew(150);
  })
}

function firstAnim() {
  var tl = gsap.timeline();

  tl.to("#nav-part2 h4", {
    y: '0',
    ease: Expo.easeInOut,
    stagger: .1,
  })

  tl.to("#left h3", {
    y: '0',
    duration: 1,
    ease: Expo.ease,
    stagger: .2,
  })

  tl.to("#right h1", {
    y: '0',
    duration: 1,
    stagger: .1,
    ease: Expo.ease,
  })

  tl.to("#video video", {
    y: '0',
    ease: Expo.easeIn,
  })
}

function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },

    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });

}

setTimeout(() => {
  firstAnim();
}, 4500);

locomotiveAnimation();
circleMouseFollower();
imageOnHover();
swiperJs();
menuHover();












