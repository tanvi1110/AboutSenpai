
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()
        tl.to("#nav-bottom", {
            height: "21vh",
        })
        tl.to("#nav-part2 h5", {
            display: "block",
        })
        tl.to("#nav-part2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.6
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to("#nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to("#nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })


    })
}

function page2animate(){
    
    
var rightElems = document.querySelectorAll("#right-elem")

rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        gsap.to(elem.childNodes[3], {
            opacity: 1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave", function () {
        gsap.to(elem.childNodes[3], {
            opacity: 0,
            scale:0
        })
    })
    elem.addEventListener("mousemove", function (dets) {
        gsap.to(elem.childNodes[3], {
            x:dets.x - elem.getBoundingClientRect().x-90,
            y:dets.y - elem.getBoundingClientRect().y-210
        })
    })
})


}

function page3videoAnimation(){
    var page3Center = document.querySelector(".page3-center")
var pagevideo = document.querySelector("#page3 video")

page3Center.addEventListener("click", function () {
    pagevideo.play()
    gsap.to(pagevideo, {
        transform: "scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius: 0,
    })
})
pagevideo.addEventListener("click", function(){
    pagevideo.pause()
    gsap.to(pagevideo, {
        transform: "scaleX(0) scaleY(0)",
        opacity: 0,
        borderRadius: "30px",
    })
})
}

function videoAnimation(){
    var sections = document.querySelectorAll("#sec-right")
    
    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })
    
}


function arrowAnimate(){
    document.addEventListener("DOMContentLoaded", function() {
        var detailsElement = document.querySelector("#uiuxdetails");
        var arrowIcon1 = document.querySelector("#arrow-icon1");
        var arrowIcon2 = document.querySelector("#arrow-icon2");
        
        function toggleArrows() {
            if (detailsElement.hasAttribute("open")) {
                arrowIcon1.style.opacity = 0;
                arrowIcon2.style.opacity = 1;
            } else {
                arrowIcon1.style.opacity = 1;
                arrowIcon2.style.opacity = 0;
            }
        }
        
        // Initial check
        toggleArrows();
        
        // Listen for the toggle event
        detailsElement.addEventListener("toggle", toggleArrows);
    });
}

function page6animate(){
    gsap.from("#btm6-part2 h4", {
        x:0,
        duration:1,
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end : "top 10%",
            scrub: true,
        }
    })
}


function bodyAnimation(){
    var tl = gsap.timeline()
tl.from("#page1",{
    opacity: 0,
    duration: 0.2,
    delay: 0.2
})
tl.from("#page1",{
    transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius: "50px",
    duration: 2,
    ease: "expo.out"
})
tl.from("nav",{
    opacity:0,
    delay:0.2
})
tl.from("#page1 h1, #page1 p, #page1 div",{
    opacity:0,
    stagger: 0.2
})
}

function openImageInNewTab() {
    const imageUrl = document.querySelector('#right-elem img').src;
    window.open(imageUrl, '_blank');
  }
  function openImageInNewTab1() {
    const imageUrl = document.querySelector('.click1 img').src;
    window.open(imageUrl, '_blank');
  }
  function openImageInNewTab2() {
    const imageUrl = document.querySelector('.click2 img').src;
    window.open(imageUrl, '_blank');
  }
  function openImageInNewTab3() {
    // Define the custom folder path and image file name
    const customFolderPath = 'images/achieve/flipkart.jpg';
   
    window.open(customFolderPath, '_blank');
  }
  function openImageInNewTab4() {
    const imageUrl = document.querySelector('.click2 img').src;
    window.open(imageUrl, '_blank');
  }



// locomotiveAnimation()
// bodyAnimation()
// navAnimation()
page2animate()
page3videoAnimation()
videoAnimation()
page6animate()
arrowAnimate()