function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.onclick = closeMenu;

  if (sidebar.style.left === '0px') {
    closeMenu();
  } else {
    sidebar.style.left = '0px';
    document.body.appendChild(overlay);
    overlay.style.display = 'block';
  }
}

function closeMenu() {
  document.getElementById('sidebar').style.left = '-250px';
  const overlay = document.querySelector('.overlay');
  if (overlay) overlay.remove();
}
