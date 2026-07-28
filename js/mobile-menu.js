(function () {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  const bar1 = document.getElementById('bar1');
  const bar2 = document.getElementById('bar2');
  const bar3 = document.getElementById('bar3');
  let open = false;

  function setOpen(value) {
    open = value;
    menu.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
    bar1.classList.toggle('rotate-45', open);
    bar1.classList.toggle('translate-y-2', open);
    bar2.classList.toggle('opacity-0', open);
    bar3.classList.toggle('-rotate-45', open);
    bar3.classList.toggle('-translate-y-2', open);
  }

  btn.addEventListener('click', () => setOpen(!open));

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('click', (e) => {
    if (open && !menu.contains(e.target) && !btn.contains(e.target)) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && open) setOpen(false);
  });
})();
