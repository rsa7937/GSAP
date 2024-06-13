$(function () {
  // console.log(gsap);

  // 기본 문법
  // gsap.from('대상', {애니메이션 옵션})

  const TL = gsap.timeline();

  TL.from('nav a', { y: -50, duration: 1, autoAlpha: 0, stagger: 0.1 });
  TL.from('.menu', { y: -50, duration: 1, autoAlpha: 0 }, '-=0.5');
  TL.from('.logo', { y: -50, duration: 0.5, autoAlpha: 0, ease: 'bounce.out' }, '+=0.3');
  TL.from('.foot-box', { width: 0 });
  TL.from('.sns-link li', { y: 20, autoAlpha: 0, stagger: 0.1 });
  TL.from('.copyright', { y: 20, autoAlpha: 0 }, '-=0.3');

  TL.from('.bruce-lee-bg', { autoAlpha: 0, scale: 0.9, duration: 5, ease: 'none' }, 1);
  //전체 타임라인의 1초 지점으로 이동, 이 후에 나오는 애니메이션도 여길 기준으로 시간이 조정됨
  TL.from('.bruce-lee', { autoAlpha: 0, scale: 1.2, ease: 'power4.inOut' });

  TL.from('.title h2 strong', { x: -50, autoAlpha: 0, duration: 1 });
  TL.from('.title h2 span', { x: -50, autoAlpha: 0, duration: 1, onComplete: () => Splitting() }, '-=0.8');

  TL.from('.small-bruce-lee', {
    xPercent: 200,
    duration: 0.7,
    ease: 'elastic.out(1, 0.3)',
    //애니메이션 끝나는 시간을 계산해 애니메이션이 끝나고 어떤 액션을 부여할 때 쓰는 onComplete
    onComplete: () => {
      $('.small-bruce-lee').addClass('action');
      moving();
    },
  });
  //애니메이션의 종료라는 라벨링 --> seek
  TL.addLabel('end');

  //로고를 클릭하면 (skip) 종료라는 라벨로 이동
  $('.logo').on('click', () => {
    TL.seek('end');
    $('.small-bruce-lee').addClass('action');
    moving();
  });

  // 괴조음
  // 비디오, 오디오는 get()에 0을 써줘야 인식함(직접 넣는 파일일 경우)
  const screamSound = $('.scream').get(0);
  // 작은 이소룡을 클릭하면 괴조음 플레이
  $('.small-bruce-lee').on('click', () => screamSound.play());

  // 이소룡 움직이기
  const $window = $(window);
  let x = 0;
  let y = 0;

  let mx = 0;
  let my = 0;

  const speed = 0.09;
  //마우스가 움직이면 좌표값을 구한다.
  $window.on('mousemove', (e) => {
    //clientX, pageX, ScreenX 중 하나를 골라서 쓰기도함
    // 화면 크기의 절반을 빼줌
    x = e.pageX - $window.innerWidth() / 2;
    // y = e.pageY - $window.innerHeight() / 2;
  });
  // 대상(이소룡)을 움직이게 하는 함수
  function moving() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    // console.log(mx, my);

    $('.bruce-lee').css({
      // transform: `translate(${mx}px, ${my}px)`,
      transform: `translateX(${mx * 0.08}px)`,
    });

    $('.bruce-lee-bg').css({
      // transform: `translate(${mx}px, ${my}px)`,
      transform: `translateX(${mx * 0.05}px)`,
    });
    $('.title').css({
      // transform: `translate(${mx}px, ${my}px)`,
      transform: `translate(${-mx * 0.03}px, -50%)`,
    });

    requestAnimationFrame(moving);
  }
});
