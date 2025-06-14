let coins = 0, clickValue = 1, autoClickers = 0;
const coinCount = document.getElementById('coin-count');
const clickBtn = document.getElementById('click-button');
const upgradeClick = document.getElementById('upgrade-click');
const upgradeAuto = document.getElementById('upgrade-auto');
const saveBtn = document.getElementById('save-button');
const autoZone = document.getElementById('autoclickers');

function update() {
  coinCount.innerText = 'Coins: ' + coins;
  upgradeClick.innerText = 'Upgrade Click (+1) – Cost: ' + (clickValue * 10);
  upgradeAuto.innerText = 'Auto Clicker (+1/sec) – Cost: ' + ((autoClickers + 1) * 50);
  autoZone.innerHTML = '';
  for (let i = 0; i < autoClickers; i++) {
    const img = document.createElement('img');
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Mouse-pointer.svg/768px-Mouse-pointer.svg.png';
    autoZone.appendChild(img);
  }
}
clickBtn.onclick = () => { coins += clickValue; update(); }
upgradeClick.onclick = () => {
  let cost = clickValue * 10;
  if (coins >= cost) {
    coins -= cost;
    clickValue++;
    update();
  }
}
upgradeAuto.onclick = () => {
  let cost = (autoClickers + 1) * 50;
  if (coins >= cost) {
    coins -= cost;
    autoClickers++;
    update();
  }
}
setInterval(() => { coins += autoClickers; update(); }, 1000);
saveBtn.onclick = () => localStorage.setItem('clickerSave', JSON.stringify({ coins, clickValue, autoClickers }));
window.onload = () => {
  let save = JSON.parse(localStorage.getItem('clickerSave'));
  if (save) { coins = save.coins; clickValue = save.clickValue; autoClickers = save.autoClickers; update(); }
};