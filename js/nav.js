// Shared navigation component
(function () {
  const pages = [
    { href: 'index.html',    label: 'Inicio' },
    { href: 'club.html',     label: 'El Club' },
    { href: 'senior.html',   label: 'Sénior' },
    { href: 'juvenil.html',  label: 'Juvenil' },
    { href: 'contacto.html', label: 'Contacto' },
  ];

  const current = window.location.pathname.split('/').pop() || 'index.html';

  const linksHTML = pages.map(p =>
    `<li><a href="${p.href}" class="${current === p.href ? 'active' : ''}">${p.label}</a></li>`
  ).join('');

  const mobileHTML = pages.map(p =>
    `<a href="${p.href}" class="${current === p.href ? 'active' : ''}">${p.label}</a>`
  ).join('');

  document.getElementById('nav-root').innerHTML = `
    <nav>
      <a href="index.html" class="nav-logo">
        <img src="assets/logo.jpg" alt="Escudo U.D. Nespereira">
        <div class="nav-name">U.D. Nespereira <span>Pazos de Borbén · Pontevedra</span></div>
      </a>
      <ul class="nav-links">${linksHTML}</ul>
      <div class="nav-burger" onclick="toggleMenu()" id="burger">
        <span></span><span></span><span></span>
      </div>
    </nav>
    <div class="mobile-menu" id="mobile-menu">${mobileHTML}</div>
  `;
})();

function toggleMenu() {
  const m = document.getElementById('mobile-menu');
  m.classList.toggle('open');
}
