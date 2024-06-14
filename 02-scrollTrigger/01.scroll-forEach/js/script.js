// 직접 배열이 됨, 배열로 만들수 있는 method -> toArray
//밑에 있는 2줄은 서로 의미가 같음
// const pic = document.querySelectorAll('.pic');
const pic = gsap.utils.toArray('.pic');
// console.log(pic);

//item(= .pic)에 동작 설정
pic.forEach((item) => {
  gsap.from(item, {
    y: 'random(100, 150)',
    duration: 'random(0.5, 1)',
    skewY: 'random(-10,10)',
    opacity: 0,

    scrollTrigger: {
      trigger: item,
      markers: true,
      start: 'top 60%', // trigger scroller(viewport)
      end: 'bottom 40%',
      toggleClass: 'active',
      toggleActions: 'play none reverse none', //Enter, Leave, EnterBack, LeaveBack
    },
  });
});
