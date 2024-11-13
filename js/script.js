// Arquivo js/script.js

// Função para suavizar a rolagem entre as páginas
function smoothScroll(target) {
  const targetElement = document.getElementById(target);
  targetElement.scrollIntoView({ behavior: 'smooth' });
}

// Adicionar event listeners aos links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href').substring(1);
    smoothScroll(target);
  });
});
