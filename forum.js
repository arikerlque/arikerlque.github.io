document.getElementById('post-form').onsubmit = (e) => {
  e.preventDefault();
  const val = document.getElementById('post-input').value;
  const container = document.getElementById('posts-container');
  const p = document.createElement('p');
  p.textContent = val;
  container.appendChild(p);
  document.getElementById('post-input').value = '';
};