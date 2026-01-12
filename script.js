 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);



  gsap.timeline({
    scrollTrigger: {
        trigger: "#hero-section",
        start: "50% 50%",
        end: "400% 50%",
        scrub: true,
        pin: true,
    }
  })
  .to("#hero-section", {
    backgroundColor: "#000",
  },'one')
  .to("#hero-section img", {
    scale: 1.02,
  },'one')
  .to('#hero-section img',{
    opacity: 0,
  },'two')
  .to('#hero-section .circle',{
    opacity: 0,
  },'two')
  .to('#hero-section h1',{
    fontSize: "18vw",
  },'two')

  gsap.timeline({
    scrollTrigger: {
        trigger: "#section-2",
        start: "top 100%",
        end: "60% top",
        scrub: true,
    }
  }).from('#section-2',{
    scale: 0.7,
  }).to('#section-2',{
    scale: 1,
  })


  gsap.timeline({
    scrollTrigger: {
        trigger: "#section-3",
        start: "20% 80%",
        end: "50% top",
        scrub: true,
    }
  }).from('#section-3 img',{
    x: -500,
    opacity: 0,
    ease: "back.out(3)",
    duration:5
  }).to('#section-3',{
    backgroundColor: "#fff",
    delay : 2
  });


  gsap.timeline({
    scrollTrigger: {
        trigger: "#section-4",
        start: "top 80%",
        end: "100% top",
        scrub: true,
    }
  }).to('#section-4 .text',{
    x:-500
  });


  gsap.timeline({
    scrollTrigger: {
        trigger: "#section-5",
        start: "top 90%",
        end: "70% 30%",
        scrub: true,
    }
  })
  .from('#section-5 div h2',{
    x: 400,
    opacity: 0,
    stagger: 0.3
  })
  .to('#section-5',{
    backgroundColor: "#000",
  });


  gsap.timeline({
    scrollTrigger: {
        trigger: "#section-6",
        start: "10% 80%",
        end: "bottom 20%",
        scrub: true,
        // markers:true
    }
  })
  .to('#section-6 .cards',{
    scale: 0.5,
    opacity: 0,
    stagger: 0.3,
  });
});