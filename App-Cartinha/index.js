const messages = [
  "Little pompom, você é tipo Wi-Fi, quando não está por perto, tudo fica sem sinal. Mas, sério, sem você minha vida é um 3G bem fraquinho. Eu te amo !",
  "Pompom, me faz um favor e fica comigo sempre, porque eu já te avisei, não tem plano B. A vida sem você é igual o filme ano um, ruim pra krl",
  "Xuxuxuxoso, você é tipo uma piada ruim: eu fico tentando entender e, no fim, me apaixono mais ainda.",
  "Pompom, você é tipo aquele bug que aparece na minha vida e eu fico tentando corrigir, mas não tem jeito, não dá pra melhorar o que já está perfeito! E se tem algo que não vou tentar corrigir é te amar",
  "Você me ajuda a seguir em frente, mais do que o ChatGPT me ajuda com os bugs do meu código.",
  "T̪͔̪̠̭̳̤̳E̫̠͕̩̠͍̙͎M̺̱̥̦̯̙̩̬ ̫͕̗̪̫͔̳̪U̺̪̼̤̙̘͇̼M̦̦̟̪͙̠̠ͅ ̩̬̼͍̮̼̥̜E͖̫̣̖̘̼͚ͅA̳̝̬̞͇͈͕ͅS̫̟̼̞̦̣͎͈T͖̻͚̰͕̝̺͇E͔͎̼̻̺̰̯̱R͍̭͖̱̗̘̙̟ ̣̬̜̖̬̪͖͕E͚͍̜̮͇̠͍̥G̳͔͇͔̗̗͎ͅG̙̯̣̝̹̜̭ͅ ̠̩͇̳̞̻͚̹P͕̜̣̳̤̝̰͔O̩̬̰͇̱̻͉̘R̪͈̭̬̳͚̪̠ ͙̦̼̻͙̳͖͍A̞̫̱̱̖͙̹ͅQ̩̼̪̰̰̬̤̭U̗͖͖͍̟̦ͅͅI̞͚̻̬̯̝̙̬!͉̤͚̹͎͇̣̣ ͍̤̠̯̜͉̱̗mas veja as cartinhas primeiro🥰",
  "Feliz aniversário, meu amor! Você é meu orgulho diário, meu motivo para seguir em frente todos os dias e a minha futura esposa! Eu vou casar com você, e você vai ser a minha esposa troféu que vai gastar dinheiro no salão junto com a nossa filha! Anota o que eu estou te dizendo!",
  "Agora estou sem mais ideias do que escrever ksksks"
];

let currentMessage = 0;

document.getElementById('nextButton').addEventListener('click', () => {
  currentMessage = (currentMessage + 1) % messages.length;
  document.getElementById('message').innerText = messages[currentMessage];
});

