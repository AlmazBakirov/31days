// Function to calculate time remaining until New Year
function getTimeRemaining() {
    const currentTime = new Date();
    const nextYear = new Date(currentTime.getFullYear() + 1, 0, 1);
    const timeRemaining = nextYear - currentTime;
  
    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  
    return {
      total: timeRemaining,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  // Function to initialize countdown
  function initializeCountdown() {
    const countdown = document.getElementById('countdown');
  
    function updateCountdown() {
      const time = getTimeRemaining();
  
      countdown.innerHTML = `${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s`;
  
      if (time.total <= 0) {
        clearInterval(interval);
        countdown.innerHTML = 'Happy New Year 2024!';
      }
    }
  
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
  }
  
  initializeCountdown();
  