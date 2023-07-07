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
    };
    
    // const links = Array.from(burgerMenu.children);
    
    // links.forEach((item) => {
    //   item.addEventListener('click', () => {
    //       closeBurger();
    //   });
    // });
    
  }
}
