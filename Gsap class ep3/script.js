var tl = gsap.timeline()


tl.to('#main',{
    x:800,
    duration:2,
    delay:0.8,
    // opacity:0,
    rotate:360,
    backgroundColor:'red'
})

tl.from('#page1 #box',{
    scale:0,
    delay:0.2,
    duration:0.5,
    rotate:360
})

gsap.from('#page2 #box',{
    scale:0,
    delay:1,
    duration:0.5,
    rotate:360,
    // scrollTrigger:'#page2 #box'
    scrollTrigger:{
        trigger:'#page2 #box',
        scroller:'body',
        markers:true,
        start:'top 60%',
        end:'top 30%',
        scrub:true, //insted of true can give value of 1 to 5
    }
})