// typical import
import gsap from "gsap";
// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import CSSPlugin from "gsap/CSSPlugin.js"

// この宣言でこの宣言で機能するようになる
gsap.registerPlugin(ScrollTrigger);

/*==================================================
スクロールでばらばらになる
==================================================*/
const area2 = document.querySelector(".area20");
const areaH = area2.offsetHeight;
const panels2 = document.querySelectorAll(".pn20");
const num2 = panels2.length;

panels2.forEach((panel2, i) => {
    gsap.set(panel2, {
        zIndex: num2 - i,
    });
});

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: area2,
        start: "top 25%",
        end: "+=1000",
        scrub: true,
        pin: true,
    }
});

tl.to(".pn21", { y: -areaH * 1.5, duration: 1 })
    .to(".pn22", { y: -areaH * 1.5, duration: 1 })

/*==================================================
すれ違うparallax
==================================================*/
const area3 = document.querySelector(".area30");

gsap.fromTo(".pn32",
    {
        yPercent: 200,
    },
    {
        yPercent: -200,
        ease: "none",
        scrollTrigger: {
            trigger: area3,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    }
);

gsap.fromTo(".pn33",
    {
        yPercent: 400,
    },
    {
        yPercent: -400,
        ease: "none",
        scrollTrigger: {
            trigger: area3,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    }
);

/*==================================================
迫ってくる
==================================================*/
const area5 = document.querySelector(".area50");
const panels5 = document.querySelectorAll(".pn50");
const num5 = panels5.length;

const tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: area5,
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
    }
});

panels5.forEach((panel, i) => {
    gsap.set(panel, {
        zIndex: num - i,
    });
});

gsap.set(".waku50", {
    scale: 0.9,
});

gsap.set(".pn51", {
    scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%",
});

gsap.set(".pn52", {
    scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%",
});

gsap.set(".pn53", {
    scale: 0, width: "100%", height: "75%", left: 0, top: "12.5%",
});

tl5.to(".waku50", { scale: 1.2, duration: 0.5 })
    .to(".pn51", { scale: 1, left: "-37.5%", top: "5%", duration: 1 }, "-=0.5")
    .to(".pn51", { opacity: 0, duration: 0.2 }, "-=0.2")
    .to(".pn52", { scale: 1, left: "62.5%", top: "55%", duration: 1 }, "-=0.5")
    .to(".pn52", { opacity: 0, duration: 0.2 }, "-=0.2")
    .to(".pn53", { scale: 1, duration: 1 }, "-=0.5")