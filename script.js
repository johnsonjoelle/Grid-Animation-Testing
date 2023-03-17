const content = document.getElementById('content');
const grid = document.getElementById('grid');

content.onclick = () => {
  grid.classList.add('content-active');
}