document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const cellSize = 20;
    let snake = [{ x: 10, y: 10 }];
    let food = getRandomFoodPosition();
    let dx = 0;
    let dy = 0;
    let intervalId = null;
    let speed = 200;
  
    function getRandomFoodPosition() {
      return {
        x: Math.floor(Math.random() * (window.innerWidth / cellSize)),
        y: Math.floor(Math.random() * (window.innerHeight / cellSize))
      };
    }
  
    function update() {
      const newHead = { x: snake[0].x + dx, y: snake[0].y + dy };
      snake.unshift(newHead);
  
      if (newHead.x === food.x && newHead.y === food.y) {
        food = getRandomFoodPosition();
      } else {
        snake.pop();
      }
  
      if (isSnakeCollision() || isSnakeOutOfBound(newHead)) {
        clearInterval(intervalId);
        alert('Game Over!');
        location.reload();
        return;
      }
  
      render();
    }
  
    function render() {
      gameBoard.innerHTML = '';
  
      snake.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.left = segment.x * cellSize + 'px';
        snakeElement.style.top = segment.y * cellSize + 'px';
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
      });
  
      const foodElement = document.createElement('div');
      foodElement.style.left = food.x * cellSize + 'px';
      foodElement.style.top = food.y * cellSize + 'px';
      foodElement.classList.add('food');
      gameBoard.appendChild(foodElement);
    }
  
    function handleKeyPress(event) {
      switch (event.key) {
        case 'ArrowUp':
          if (dy !== 1) {
            dx = 0;
            dy = -1;
          }
          break;
        case 'ArrowDown':
          if (dy !== -1) {
            dx = 0;
            dy = 1;
          }
          break;
        case 'ArrowLeft':
          if (dx !== 1) {
            dx = -1;
            dy = 0;
          }
          break;
        case 'ArrowRight':
          if (dx !== -1) {
            dx = 1;
            dy = 0;
          }
          break;
      }
    }
  
    function isSnakeCollision() {
      const [head, ...body] = snake;
      return body.some(segment => segment.x === head.x && segment.y === head.y);
    }
  
    function isSnakeOutOfBound(head) {
      return (
        head.x < 0 ||
        head.x * cellSize >= window.innerWidth ||
        head.y < 0 ||
        head.y * cellSize >= window.innerHeight
      );
    }
  
    document.addEventListener('keydown', handleKeyPress);
  
    intervalId = setInterval(update, speed);
  });
  