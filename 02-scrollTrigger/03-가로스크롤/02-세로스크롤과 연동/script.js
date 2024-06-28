const horizonScroll = document.querySelector('.horizontal-scroll');
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.sec4',
    pin: true,
    markers: true,
    top: 'top top',
    end: () => '+=' + horizonScroll.offsetWidth,
    scrub: 2,
  },
});

tl.from(horizonScroll, {
  autoAlpha: 0,
});
tl.to(horizonScroll, {
  x: () => -(horizonScroll.offsetWidth - innerWidth),
  ease: 'none',
  duration: 30,
});
tl.to('.fake', {
  x: 10,
  delay: 10,
});
// 개별 움직임을 가로 스크롤과 연동
const pic1 = document.querySelector('.pic1');
const pic2 = document.querySelector('.pic2');

gsap.from(pic1, {
  autoAlpha: 0,
  y: 50,
  //스크롤과 연동
  scrollTrigger: {
    trigger: pic1,
    start: 'left 90%',
    markers: true,
    id: 'pic-ani',

    containerAnimation: tl,
    toggleActions: 'play none reverse none',
  },
});
gsap.from(pic2, {
  autoAlpha: 0,
  y: 50,
  //스크롤과 연동
  scrollTrigger: {
    trigger: pic2,
    start: 'left 90%',
    markers: true,
    id: 'pic-ani',

    containerAnimation: tl,
    toggleActions: 'play none reverse none',
  },
});
