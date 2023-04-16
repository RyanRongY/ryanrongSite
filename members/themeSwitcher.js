document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.createElement('button');
    themeSwitcher.textContent = 'Toggle Theme';
    themeSwitcher.style.position = 'fixed';
    themeSwitcher.style.top = '10px';
    themeSwitcher.style.right = '10px';
    themeSwitcher.style.zIndex = '1000'; // Add this line to place the button on top of other elements
    document.body.appendChild(themeSwitcher);
  
    themeSwitcher.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
    });
  });
  