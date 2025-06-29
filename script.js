document.addEventListener('DOMContentLoaded', () => {
    // Função para configurar modais
    function setupModal(itemId, modalId) {
        const item = document.getElementById(itemId);
        const modal = document.getElementById(modalId);
        const closeBtn = modal.querySelector('.close-modal');

        item.addEventListener('click', () => {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                modal.style.opacity = '1';
                modal.querySelector('.modal-content').style.transform = 'scale(1)';
            }, 10);
        });

        closeBtn.addEventListener('click', () => closeModal(modal));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    }

    function closeModal(modal) {
        modal.style.opacity = '0';
        modal.querySelector('.modal-content').style.transform = 'scale(0.7)';
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    // Configurar modais para todos os itens
    // Modais de barba
    setupModal('barboterapia-item', 'barboterapia-modal');
    setupModal('baldo-item', 'baldo-modal');
    setupModal('espartana-item', 'espartana-modal');
    setupModal('lenhador-item', 'lenhador-modal');
    setupModal('quadrada-item', 'quadrada-modal');
    setupModal('serrada-item', 'serrada-modal');
    setupModal('Tidy-Carefree-item', 'Tidy-Carefree-modal');
    setupModal('Cavanhaque-item', 'Cavanhaque-modal');
    setupModal('Vaporizador-item', 'Vaporizador-modal');
    
    // Modais de corte
    setupModal('degrade-item', 'degrade-modal');
    setupModal('social-item', 'social-modal');
    setupModal('Navalha-item', 'Navalha-modal');
    setupModal('Tesoura-item', 'Tesoura-modal');
    setupModal('Fade-item', 'Fade-modal');
    setupModal('Freestyle-item', 'Freestyle-modal');
    setupModal('Blindado-item', 'Blindado-modal');
    setupModal('Sombreamento-Nudred-item', 'Sombreamento-Nudred-modal');
    setupModal('V-item', 'V-modal');
    setupModal('Faux-Hawk-item', 'Faux-Hawk-modal');
    setupModal('Pompoador-item', 'Pompoador-modal');
    setupModal('Razor-Part-item', 'Razor-Part-modal');
    setupModal('Americano-item', 'Americano-modal');
    setupModal('Flat-Top-item', 'Flat-Top-modal');
    setupModal('Dimil-item', 'Dimil-modal');
    setupModal('Franja-item', 'Franja-modal');

    // Menu Mobile
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Mudar cor da navbar ao rolar
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(26, 26, 26, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(26, 26, 26, 0.95)';
            navbar.style.boxShadow = 'none';
        }

        if (currentScroll > lastScroll) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    // Observador de interseção para animações de scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observar seções para animação
    document.querySelectorAll('.about, .services, .cta').forEach(section => {
        observer.observe(section);
    });

    // Efeito parallax suave no hero
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });

    // Animação nos cards de serviço
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });

    // Efeito hover nos botões
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            button.style.setProperty('--x', `${x}px`);
            button.style.setProperty('--y', `${y}px`);
        });
    });
});
