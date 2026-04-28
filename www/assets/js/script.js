
const menuButton = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.nav-menu');

menuButton?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

// Na mobile klik w "Oferta" rozwija dropdown zamiast nawigować
document.querySelectorAll('.nav-item > a').forEach(link => {
  link.addEventListener('click', e => {
    if (menuButton && getComputedStyle(menuButton).display !== 'none') {
      e.preventDefault();
      link.closest('.nav-item').classList.toggle('dropdown-open');
    }
  });
});

document.querySelectorAll('.nav-menu a:not(.nav-item > a)').forEach(link => {
  link.addEventListener('click', () => {
    menu?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('dropdown-open'));
  });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
