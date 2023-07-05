const burgerButton = document.querySelector('.burger__btn');
const burgerMenu = document.querySelector('.burger__menu');

export const useBurger = (): void => {
  if (burgerButton && burgerMenu) {
    burgerButton.addEventListener('click', (event) => {
      event.stopPropagation();
      openBurger();
    });
    
    const openBurger = (): void => {
      burgerButton.classList.toggle('transform');
      burgerMenu.classList.toggle('open');
      // document.body.classList.toggle('noscroll');
      // overlay.classList.toggle('active');
    };
    
    // const links = Array.from(burgerMenu.children);
    
    // links.forEach((item) => {
    //   item.addEventListener('click', () => {
    //       closeBurger();
    //   });
    // });
    
    // const closeBurger = (): void => {
    //   burgerButton.classList.remove('transform');
    //   burgerMenu.classList.remove('open');
    //   document.body.classList.remove('noscroll');
    //   // overlay.classList.remove('active');
    // };
  }
}


// Close burger menu on click any place
// body.addEventListener('click', (event) => {
//   const target = event.target;
//   const isMenu = target == burgerMenu || burgerMenu.contains(target);
//   const isHamburger = target == burgerButton;
//   const isOpenMenu = burgerMenu.classList.contains('open');
  
//   if (!isMenu && !isHamburger && isOpenMenu) {
//       closeBurger();
//   }
// })