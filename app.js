// Navigation works as native hash links even without JavaScript.
const nav = document.querySelector('nav');
const links = [...nav.querySelectorAll('a[href^="#"]')];
const sections = links.map(link => document.getElementById(link.hash.slice(1)));
let pending = false;

function updateNav() {
  const offset = nav.getBoundingClientRect().height + 20;
  document.documentElement.style.setProperty('--nav-offset', `${offset}px`);
  let active = sections[0].id;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= offset + 3) active = section.id;
  }
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) active = sections.at(-1).id;
  for (const link of links) {
    const isActive = link.hash === `#${active}`;
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  pending = false;
}
function scheduleUpdate() {
  if (!pending) { pending = true; requestAnimationFrame(updateNav); }
}
window.addEventListener('scroll', scheduleUpdate, { passive: true });
window.addEventListener('resize', scheduleUpdate);
document.querySelector('.older-news').addEventListener('toggle', scheduleUpdate);
updateNav();
