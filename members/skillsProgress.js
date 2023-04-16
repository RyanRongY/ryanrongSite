document.addEventListener('DOMContentLoaded', () => {
    const skills = [
      { name: 'Java', level: 80 },
      { name: 'C++', level: 70 },
      { name: 'Python', level: 75 },
      { name: 'PSpice/LTSpice', level: 60 },
      { name: 'FPGA', level: 50 },
      { name: 'Web Development', level: 65 },
      { name: 'Matlab', level: 55 },
      { name: 'Microsoft Office', level: 90 },
    ];
  
    const skillsSection = document.getElementById('Skills');
    const skillsList = document.createElement('div');
    skillsList.style.display = 'grid';
    skillsList.style.gridTemplateColumns = 'repeat(2, 1fr)';
    skillsList.style.gridGap = '10px';
    skillsSection.appendChild(skillsList);
  
    skills.forEach(skill => {
      const skillItem = document.createElement('div');
      skillItem.textContent = `${skill.name}: `;
      skillItem.style.position = 'relative';
      skillItem.style.padding = '5px 0';
      skillsList.appendChild(skillItem);
  
      const progressBar = document.createElement('div');
      progressBar.style.background = 'rgba(0, 0, 255, 0.5)';
      progressBar.style.width = `${skill.level}%`;
      progressBar.style.height = '5px';
      progressBar.style.transition = 'width 1s';
      skillItem.appendChild(progressBar);
    });
  });
  