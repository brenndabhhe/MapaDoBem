let points = 0;

function addPoints(value) {
  points += value;
  document.getElementById('heroPoints').textContent = points;
  alert(`Você ganhou ${value} pontos de herói! 🌟`);
}
