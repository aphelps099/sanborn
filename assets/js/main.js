// SANBORN DESIGN - Main JavaScript

// Navigation scroll behavior
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Add shadow on scroll
  if (currentScroll > 50) {
    nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
  } else {
    nav.style.boxShadow = 'none';
  }

  lastScroll = currentScroll;
});

// Active navigation link
const currentLocation = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  const href = link.getAttribute('href');

  // Handle root path
  if (currentLocation === '/' && href === '/') {
    link.classList.add('active');
  } else if (currentLocation !== '/' && href !== '/' && currentLocation.includes(href)) {
    link.classList.add('active');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Image lazy loading fallback
if ('loading' in HTMLImageElement.prototype) {
  // Browser supports native lazy loading
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// Load project data (for pages that need it)
async function loadProjects() {
  try {
    const response = await fetch('/data/projects.json');
    const data = await response.json();
    return data.projects;
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
}

// Utility: Generate project card HTML
function createProjectCard(project) {
  return `
    <a href="/work/${project.id}/" class="project-card">
      <img
        src="/assets/images/projects/${project.thumbnail}"
        alt="${project.name}"
        class="project-card-image"
        loading="lazy"
      />
      <div class="label project-card-type">${project.type}</div>
      <h3 class="project-card-title">${project.name}</h3>
      <p class="project-card-location">${project.location}</p>
    </a>
  `;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { loadProjects, createProjectCard };
}
