// ------------------------------
// 1. Efecto de escritura
// ------------------------------
const typingText = document.getElementById('typing-text');
const words = ['Desarrollador Full Stack', 'Ingeniero Informático', 'Apasionado por la Tecnología'];
let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;

function type() {
  if (wordIndex >= words.length) wordIndex = 0;
  currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex++;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// ------------------------------
// 2. Modal de proyectos
// ------------------------------
const projectModal = document.getElementById('projectModal');
const projectModalLabel = document.getElementById('projectModalLabel');
const projectModalImage = document.getElementById('projectModalImage');
const projectModalDescription = document.getElementById('projectModalDescription');
const projectModalTechnologies = document.getElementById('projectModalTechnologies');
const projectModalLink = document.getElementById('projectModalLink');
const projectModalGitHub = document.getElementById('projectModalGitHub');

const projects = {
  1: {
    title: 'Bouquet Verde',
    image: 'assets/img/logo1.png',
    description: 'Aplicación web para gestión y control de florería, con autenticación de usuarios y administración de pedidos en línea.',
    technologies: 'Laravel, MySQL, Bootstrap',
    link: 'https://bouquet-verde-proyectofinal.onrender.com/login',
    github: 'https://github.com/evers23/Bouquet-Verde-ProyectoFinal'
  },
  2: {
    title: 'Planner Book',
    image: 'assets/img/logo2.png',
    description: 'Plataforma académica para la gestión de cursos, tareas y notas, diseñada para optimizar la comunicación entre profesores y estudiantes.',
    technologies: 'Node.js, React, MongoDB',
    link: 'https://plannerbook.onrender.com',
    github: 'https://github.com/everms/Planner-Book'
  }
};

document.querySelectorAll('.view-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const projectId = btn.getAttribute('data-project-id');
    const project = projects[projectId];
    if (project) {
      projectModalLabel.textContent = project.title;
      projectModalImage.src = project.image;
      projectModalImage.alt = project.title;
      projectModalDescription.textContent = project.description;
      projectModalTechnologies.textContent = 'Tecnologías: ' + project.technologies;
      projectModalLink.href = project.link;
      projectModalGitHub.href = project.github;
    }
  });
});

// ------------------------------
// 3. Back to Top Button
// ------------------------------
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove('d-none');
  } else {
    backToTopBtn.classList.add('d-none');
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
