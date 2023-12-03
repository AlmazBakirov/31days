document.getElementById('changeBtn').addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 1000000); // Adding random number to prevent caching
    const imageUrl = `https://source.unsplash.com/user/c_v_r/1600x900?random=${randomNumber}`;
  
    document.body.style.backgroundImage = `url('${imageUrl}')`;
  });
  