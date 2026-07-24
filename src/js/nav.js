// MENU RESPONSIVO
export function initMenuToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        // Liga/desliga a classe active no container .nav-menu
        navMenu.classList.toggle('active');

        // Atualiza acessibilidade
        const isExpanded = navMenu.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Fecha o menu ao clicar em qualquer link da navegação
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}