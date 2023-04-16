document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    const typedName = document.getElementById('typedName');
    const nameText = typedName.textContent;
    let currentIndex = 0;
  
    typedName.textContent = '';
  
    function typeWriter() {
      if (currentIndex < nameText.length) {
        typedName.textContent += nameText.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeWriter, 100);
      }
    }
  
    setTimeout(typeWriter, 1000);
  });
  