var tl = gsap.timeline();

gsap.to("#page1 h1", {
  transform: "translatex(-100%)",
  fontWeight:100,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    // markers: true,
    start: "top 0%",
    end:'top -200%',
    scrub:2,
    pin:true
  },
});

// tl.from('#nav h1, #nav h4, #nav h3 ',{
//     y:-80,
//     duration:0.5,
//     delay:0.5,
//     opacity:0,
//     stagger:0.2,
//     // rotate:360,

// })

// tl.from('#left h1',{
// x:-500,
// opacity:0,
// duration:0.8,
// stagger:0.3
// })

// tl.from('#right img',{
// scale:2,
// opacity:0,
// duration:0.8

// })

// gsap.from('#page2 #box',{
// scale:0,
// opacity:0,
// duration:1,
// stagger:0.3,
// scrollTrigger:{
//     trigger:"#page2 #box",
//     scroller:'body',
//     // markers:true,
//     start: 'top 70%'

// }
// })
