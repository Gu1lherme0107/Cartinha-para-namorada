const messages = [
  "COLOQUE SUAS MENSAGENS AQUI",
  "DESSE JEITO"
];

let currentMessage = 0;

document.getElementById('nextButton').addEventListener('click', () => {
  currentMessage = (currentMessage + 1) % messages.length;
  document.getElementById('message').innerText = messages[currentMessage];
});

