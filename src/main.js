const menuButton = document.querySelector('.mobile-menu-btn');
const menu = document.getElementById('menu-principal');
const mobileLayout = window.matchMedia('(max-width: 980px)');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
}

function isMenuOpen() {
  return menuButton.getAttribute('aria-expanded') === 'true';
}

document.querySelector('.header').classList.add('has-mobile-menu');

menuButton.addEventListener('click', () => setMenu(!isMenuOpen()));
menu.addEventListener('click', (event) => {
  if (mobileLayout.matches && event.target.closest('a')) setMenu(false);
});

document.addEventListener('click', (event) => {
  if (isMenuOpen() && !menu.contains(event.target) && !menuButton.contains(event.target)) {
    setMenu(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && isMenuOpen()) {
    setMenu(false);
    menuButton.focus();
  }
});

mobileLayout.addEventListener('change', () => setMenu(false));
