document.addEventListener("scroll", function () {
  const scrollAmount = window.scrollY; // 현재 스크롤이 어디부터 어디까지 움직일 수 있는지
  const textTop = document.getElementById("textTop");
  const textBottom = document.getElementById("textBottom");

  textTop.style.transform = `translateX(${scrollAmount * 0.5}px)`;
  textBottom.style.transform = `translateX(-${scrollAmount * 0.5}px)`;
});
