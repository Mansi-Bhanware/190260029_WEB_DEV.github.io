const navSlide = () => {
  const hidenav = document.querySelector('.hidenav');
  const nav = document.querySelector('.navchild');
  const image = document.querySelector('.dp');

  hidenav.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    hidenav.classList.toggle('toggle');
    image.classList.toggle('hideimg');
  });
}
  navSlide();
