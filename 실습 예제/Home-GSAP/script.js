window.addEventListener('load', () => {
  //대상을 변수에 저장
  const navLinks = document.querySelectorAll('.container-nav a');
  const imgsNav = document.querySelectorAll('nav img');
  const title = document.querySelector('.home-content h1');
  const verticalLine = document.querySelector('.middle-line');
  const grapesLogo = document.querySelector('.home-content img');
  const homeBtn = document.querySelector('.home-content button');

  // 타임라인 설정
  const TL = gsap.timeline();

  TL.from(imgsNav, { autoAlpha: 0, scale: 1.5, duration: 1, ease: 'bounce.out', repeat: -1, yoyo: true });
  TL.from(title, { autoAlpha: 0, y: -50, delay: 0.2 });
  TL.to(verticalLine, { height: 200 }, '-=0.2');
  TL.from(grapesLogo, { autoAlpha: 0, y: -50 });
  TL.from(homeBtn, { autoAlpha: 0, y: -50 });
  TL.from(navLinks, { autoAlpha: 0, y: -50, rotation: -20, stagger: 0.3 }, '<');
});
