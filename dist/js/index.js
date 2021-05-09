function toggleMenu() {
  document.getElementById("nav-menu-items").classList.toggle("hidden");
  document.getElementById("btn-menu-close").classList.toggle("hidden");
  document.getElementById("btn-menu-open").classList.toggle("hidden");
}

document.getElementById("btn-menu-open").addEventListener('click', () => toggleMenu());

document.getElementById("btn-menu-close").addEventListener('click', () => toggleMenu());