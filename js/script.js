// Efeito de onda nas seções ao rolar
document.addEventListener("scroll", function() {
    const projetosSection = document.getElementById("projetos");
    const contatoSection = document.getElementById("contato");

    if (window.scrollY > projetosSection.offsetTop - window.innerHeight + 150) {
        projetosSection.classList.add("onda");
    }
    if (window.scrollY > contatoSection.offsetTop - window.innerHeight + 150) {
        contatoSection.classList.add("onda");
    }
});
