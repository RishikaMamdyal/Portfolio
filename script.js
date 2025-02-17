var textArray = ['Computer Science & Engineering  ','(Artificial Intelligence & Data Science)  ']
var info = document.querySelector('.home .home-container-1 .info')
var index = 0
 setInterval(() => {
    if(index > 1){
        index = 0
    }
    info.innerHTML = textArray[index]
    index = index + 1
 },2500)

var htl = gsap.timeline()

htl.from('.header h2',{
    y:-50,
    opacity:0,
    delay:0.5
})
htl.from('.header .links a',{
    opacity:0,
    stagger:0.5,
    y:-50
},'-=2')

// gsap.from('.home .action button',{
//     opacity:0,
//     y:-100,
//     scrollTrigger:{
//         trigger:'.home .action #btn1',
//         scroller:"body",
//         start:"top 40%",
//         end:"top 30%",
//         scrub:4,
//         markers:true
//     }
// })

gsap.from('.home .home-container-2',{
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:'.home .home-container-2',
        scroller:"body",
        start:"top 40%",
        end:"top 30%", 
        scrub:4,
        // markers:true
    }
})

gsap.from('.about',{
    opacity:0,
    y:-100,
    scrollTrigger:{
        trigger:'.about',
        scroller:"body",
        start:"top 20%",
        end:"top 10%",
        scrub:4,
        // markers:true
    }
})

var atl = gsap.timeline()

atl.from('.about .about-container-1 .about-info',{
    opacity:0,
    x:-40,
    duration:1
})

gsap.from('.about .about-container-1 .skills',{
    opacity:0,
    x:-100,
    scrollTrigger:{
        trigger:'.about .about-container-1 .skills',
        scroller:"body",
        start:"top 20%",
        end:"top 10%",
        scrub:4,
        // markers:true
    }
})

gsap.from('.about .about-container-2 .details',{
    opacity:0,
    x:100,
    scrollTrigger:{
        trigger:'.about .about-container-2 .details',
        scroller:"body",
        start:"top 35%",
        end:"top 25%",
        scrub:4,
        // markers:true
    }
})


gsap.from('.about .about-container-2 .details button',{
    opacity:0,
    y:100,
    scrollTrigger:{
        trigger:'.about .about-container-2 .details button',
        scroller:"body",
        start:"top 80%",
        end:"top 70%",
        scrub:4,
        // markers:true
    }
})

gsap.from('.resume',{
    opacity:0,
    y:-100,
    scrollTrigger:{
        trigger:'.resume',
        scroller:"body",
        start:"top 80%",
        end:"top 70%",
        scrub:4,
        // markers:true
    }
})

gsap.from('.internship',{
    opacity:0,
    y:-100,
    scrollTrigger:{
        trigger:'.internship',
        scroller:"body",
        start:"top 80%",
        end:"top 70%",
        scrub:4,
        // markers:true
    }
})

gsap.from('.internship #ibox1',{
    opacity:0,
    x:-100,
    scrollTrigger:{
        trigger:'.internship #ibox1',
        scroller:"body",
        start:"top 80%",
        end:"top 70%",
        scrub:4,
        // markers:true
    }
})

gsap.from('.internship #ibox2',{
    opacity:0,
    x:100,
    scrollTrigger:{
        trigger:'.internship #ibox2',
        scroller:"body",
        start:"top 80%",
        end:"top 70%",
        scrub:4,
        // markers:true
    }
})

gsap.from('.education',{
    opacity:0,
    y:-100,
    scrollTrigger:{
        trigger:'.education',
        scroller:"body",
        start:"top 80%",
        end:"top 70%",
        scrub:4,
        // markers:true
    }
})

gsap.from('.education .box',{
    opacity:0,
    y:-100,
    scrollTrigger:{
        trigger:'.education .box',
        scroller:"body",
        start:"top 80%",
        end:"top 70%",
        scrub:4,
        // markers:true
    }
})

gsap.from('.projects',{
    opacity:0,
    y:-100,
    scrollTrigger:{
        trigger:'.projects',
        scroller:"body",
        start:"top 80%",
        end:"top 70%",
        scrub:4,
        // markers:true
    }
})

gsap.from('.projects .cards',{
    opacity:0,
    y:-100,
    scrollTrigger:{
        trigger:'.projects .cards',
        scroller:"body",
        start:"top 80%",
        end:"top 70%",
        scrub:4,
        // markers:true
    }
})

gsap.from('.projects .cards .info',{
    opacity:0,
    y:100,
    scrollTrigger:{
        trigger:'.projects .cards .info',
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:4,
        // markers:true
    }
})

gsap.from('.contact ',{
    opacity:0,
    y:-100,
    scrollTrigger:{
        trigger:'.contact ',
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:4,
        // markers:true
    }
})

window.addEventListener('scroll',()=>{
    if(window.scrollY <= 50){
        htl.restart()
    }
})