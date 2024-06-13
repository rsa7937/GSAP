window.addEventListener('load', () => {
  // 대상을 변수에 저장
  const listEl = document.querySelectorAll('.pic-list li');
  const imgBox = document.querySelector('.img-box');
  const img = imgBox.querySelector('img');

  console.log(listEl, imgBox, img);

  //기본 세팅 : .imgBox를 작게, 안 보이게
  gsap.set(imgBox, { scale: 0.8, autoAlpha: 0 });

  //대상.forEach(funciton(){})
  //대상.forEach(()=>{})

  //대상.forEach((요소, 인덱스)=>{})
  // 매개 변수에 들어가는 단어는 작성자 마음대로

  //마우스가 li에 들어오면 각각 할 동작
  listEl.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      // 이미지 조립
      img.src = `img/newjeans${index + 1}.webp`;

      // .imgBox를 원래 크기대로, 보이게
      // rotate도 따로 추가해본거
      gsap.to(imgBox, { scale: 1, autoAlpha: 1, rotate: 'random([-5, -10, -15, -20, 5, 10, 15, 20])' });
    });
  });
  //마우스가 li에 나가면 각각 할 동작
  listEl.forEach((item) => {
    item.addEventListener('mouseleave', () => {
      gsap.to(imgBox, { scale: 0.2, autoAlpha: 0, rotate: 'random([-5, -10, -15, -20, 5, 10, 15, 20])' });
    });
  });

  let x = 0;
  let y = 0;

  let mx = 0;
  let my = 0;

  let speed = 0.08;
  // li 영역에서 마우스가 움직이면 할 동작
  listEl.forEach((item) => {
    item.addEventListener('mousemove', (e) => {
      console.log(e);

      // const imgBoxX = e.pageX;
      // const imgBoxY = e.pageY;

      // console.log(imgBoxX, imgBoxY);

      // imgBox.style.left = imgBoxX + 'px';
      // imgBox.style.top = imgBoxY + 'px';

      x = e.pageX;
      y = e.pageY;
    });
  });

  // 부드럽게 움직이는 효과는 따로 해본거

  function moving() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    imgBox.style.left = mx + 'px';
    imgBox.style.top = my + 'px';

    requestAnimationFrame(moving);
  }

  moving();
});
