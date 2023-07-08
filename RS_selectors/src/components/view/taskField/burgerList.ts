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
  }
}
