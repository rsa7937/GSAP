gsap.registerPlugin(ScrollTrigger);

// 가로 영역 전체가 다 스크롤
const horizonScroll = document.querySelector('.wrap');

// 1. 동작을 정의, 타임라인으로
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: horizonScroll,
    // markers: true,
    start: 'top 0%',
    // 가로의 길이만큼 스크롤이 가능해져서 스크롤 시간이 충분히 길어짐
    // 숙어처럼 사용
    end: () => '+=' + horizonScroll.offsetWidth,
    pin: true,
    scrub: 1,
  },
});

// 스크롤과 연동해서 구현할 동작
tl.to(horizonScroll, {
  // x: '-300vw',
  // 숙어처럼 사용
  x: () => -(horizonScroll.offsetWidth - window.innerWidth),

  // 반드시 !!!! ease : 'none'
  // 가로스크롤 되는 애한테는 ease 효과를 부여하면 안됨 -> 트리거 시점이 밀림
  ease: 'none',
});

const image = gsap.utils.toArray('.pic');
image.forEach((pic) => {
  gsap.from(pic, {
    y: 50,
    autoAlpha: 0,

    //스크롤과 연동
    scrollTrigger: {
      trigger: pic,
      start: 'left 90%',
      markers: true,
      id: 'pic-ani',

      // 반드시!!! 가로 스크롤과 연동되어야 함
      containerAnimation: tl,

      toggleActions: 'play none reverse none',
    },
  });
});
