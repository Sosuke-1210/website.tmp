//プラグイン登録

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
});

//全体設定

//もはやsubtitle-barクラス専用アニメーションのようなもの
$(function () {
  gsap.utils.toArray(".anime_bar").forEach(target => {
    gsap.from(target, {
      scaleX: 0,
      opacity: 0,
      duration: 0.5,
      ease: Power4.out,
      scrollTrigger: {
        trigger: target,
        start: "center 70%",
        toggleActions: "play none none reverse",
        markers: false,
        scrub: false,
      }
    });
  });
});

//垂直引き延ばし（なんで用意したんだっけ）
$(function () {
  gsap.utils.toArray(".anime_verticalexpand").forEach(target => {
    gsap.from(target, {
      scaleY: 0,
      opacity: 0,
      duration: 0.2,
      ease: Power4.out,
      scrollTrigger: {
        trigger: target,
        start: "top 80%",
        toggleActions: "play none none reverse",
        markers: false,
        scrub: false,
      }
    });
  });
});

//【News】

gsap.from(".news_item", {
  x: 40,
  autoAlpha: 0,
  duration: 0.5,
  ease: Power4.out,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".news_item",
    start: "top 70%",
    toggleActions: "play none none reverse",
    markers: false,
    scrub: false
  }
});

//【What's SSC】

const whatsssc_anime = gsap.timeline({
  paused: true,
  scrollTrigger: {
    trigger: "#whatsssc",
    start: "top top+=100",
    end: "bottom+=1500 bottom",
    pin: true,
    scrub: 1,
    toggleActions: "play none none reverse",
    markers: false
  }
});

whatsssc_anime.set("#whatsssc h2", { marginTop: 0 })
  .from("#whatsssc h2", {
    y: -10,
    opacity: 0,
    duration: 1,
    ease: Power4.out
  })
  .from("#whatsssc .subtitle-bar", {
    scaleX: 0,
    opacity: 0,
    duration: 1,
    ease: Power4.out
  }, "<")
  .from("#whatsssc_img1", {
    autoAlpha: 0,
    y: 20,
    scale: 0.9,
    duration: 4,
    ease: Power4.out
  })
  .from("#whatsssc_fig1", {
    autoAlpha: 0,
    x: -10,
    duration: 4,
    ease: Power4.out
  })
  .from("#whatsssc_fig2", {
    autoAlpha: 0,
    x: 40,
    rotate: 20,
    duration: 4,
    ease: Power4.out
  }, "-=2")
  .from("#whatsssc_fig3", {
    autoAlpha: 0,
    y: -100,
    duration: 4,
    ease: Power4.out
  }, "-=2")
  .from("#whatsssc p", {
    autoAlpha: 0,
    x: 30,
    duration: 4,
    ease: Power4.out
  }, "-=1");

gsap.to("#whatsssc", {
  opacity: 0,
  duration: 0.2,
  ease: Power4.out,
  scrollTrigger: {
    trigger: "#whatsssc",
    start: "bottom 40%",
    toggleActions: "play none none reverse",
    markers: false,
    scrub: false
  }
});

//【Activities】

const activities_anime = gsap.timeline({
  paused: true,
  scrollTrigger: {
    trigger: "#activities",
    start: "top top+=100",
    end: "bottom+=1500 bottom",
    pin: true,
    scrub: 1,
    toggleActions: "play none none reverse",
    markers: false
  }
});

activities_anime.set("#activities h2", { marginTop: 0 })
  .from("#activities h2", {
    y: -10,
    opacity: 0,
    duration: 1,
    ease: Power4.out
  })
  .from("#activities .subtitle-bar", {
    scaleX: 0,
    opacity: 0,
    duration: 1,
    ease: Power4.out
  }, "<")
  .from("#activities_img1", {
    autoAlpha: 0,
    x: 20,
    scale: 0,
    duration: 4,
    ease: Power4.in
  })
  .from("#activities_fig1", {
    autoAlpha: 0,
    x: -10,
    duration: 4,
    ease: Power4.out
  })
  .from("#activities_fig2", {
    autoAlpha: 0,
    x: 40,
    y: 20,
    duration: 4,
    ease: Power4.out
  }, "-=2")
  .from("#activities_fig3", {
    autoAlpha: 0,
    y: -50,
    scale: 0.5,
    duration: 4,
    ease: Power4.out
  }, "-=2")
  .from("#activities p", {
    autoAlpha: 0,
    x: 30,
    duration: 4,
    ease: Power4.out
  }, "-=1")
  .from("#activities .button1", {
    autoAlpha: 0,
    x: 30,
    duration: 4,
    ease: Power4.out
  }, "<");

gsap.to("#activities", {
  opacity: 0,
  duration: 0.2,
  ease: Power4.out,
  scrollTrigger: {
    trigger: "#activities",
    start: "bottom 40%",
    toggleActions: "play none none reverse",
    markers: false,
    scrub: false
  }
});

//【And more!】

gsap.from(".andmore_item", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  ease: Power4.out,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".andmore_item",
    start: "top center",
    toggleActions: "play none none reverse",
    markers: false,
    scrub: false
  }
});