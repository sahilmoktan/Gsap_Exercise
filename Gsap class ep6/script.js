var tl = gsap.timeline();

function time(){
  var a = 0
  setInterval(function(){
    a= a+ Math.floor(Math.random()*15)
    if(a<100){

      document.querySelector('#loader h1').innerHTML =a+'%'
      // console.log(a)
    }else{
      a=100
      document.querySelector('#loader h1').innerHTML =a+'%'
    }
      

a++
  },150)
}


tl.to('#loader, h1',{
  // scale:1.5,
  delay:0.5,
  duration:2,
  onStart:time()

})

tl.to('#loader',{
  top:'-100vh',
  delay:0.5,
  duration:2
})



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

tl.from('#nav h1, #nav_p2 h2, #nav_p2 span' ,{
    y:80,
    duration:1,
    delay:0.5,
    // opacity:0,
    stagger:0.2,
    // rotate:360,

})

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
