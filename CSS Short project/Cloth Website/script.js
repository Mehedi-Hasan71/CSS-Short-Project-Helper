const sendBtn = document.querySelector('.send-btn');
const plane = document.querySelector('.plane');

sendBtn.addEventListener('click', () => {
  sendBtn.classList.add('fly');
  
  // Reset animation after 2 seconds
  setTimeout(() => {
    sendBtn.classList.remove('fly');
  }, 2000);
});
