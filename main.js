import './styles/main.scss';

//menu lateral
    const botaoHamburger = document.getElementById("menu-toggle");
    const menuLateral = document.getElementById("sidebar");
    const botaoFechar = document.getElementById("sidebar-close");
    const menuBackdrop = document.getElementById("sidebar_backdrop");
    
    //listener botão para abrir menu
    botaoHamburger.addEventListener("click", ()=> {
        abrirMenu();
    })

    //listener botão para fechar menu
    botaoFechar.addEventListener("click", ()=> {
        fecharMenu();
    });

    //listener backdrop para fechar menu
    menuBackdrop.addEventListener("click", ()=> {
        fecharMenu();
    });

    //function para abrir
    function abrirMenu() {
        menuLateral.classList.add("sidebar-aberto");
        menuBackdrop.classList.remove("sidebar_backdrop_closed");
        menuBackdrop.classList.add("sidebar_backdrop_open");
    }

    //function para fechar
    function fecharMenu() {
        menuLateral.classList.remove("sidebar-aberto");
        menuBackdrop.classList.remove("sidebar_backdrop_open");
        menuBackdrop.classList.add("sidebar_backdrop_closed");
    }

//modals
    let modalId;
    
    //function abrir modal
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        const backdrop = document.getElementById("modal-backdrop");
        if (modal) {
            modal.classList.add("open");
            backdrop.classList.add("open");
        }
    }
    
    //function fechar modal
    function closeModal() {
        const modal = document.getElementById(modalId);
        const backdrop = document.getElementById("modal-backdrop");
        modal.classList.remove("open");
        backdrop.classList.remove("open");
    }
    
    //listener do card
    document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener('click', function() {
            modalId = this.dataset.modal;    
            openModal(modalId);
        });
    });
    
    //listener do botão de fechar
    document.querySelectorAll('.close-modal').forEach(close => {
        close.addEventListener('click', ()=> {
            closeModal();
        });
    });
    
    //listener do backdrop
    document.getElementById('modal-backdrop').addEventListener('click', ()=> {
        closeModal();
    });

//dark mode
    //function para alternar entre modos
    function darkMode() {
        document.body.classList.toggle('dark-mode');
        document.getElementById('slider').classList.toggle('on');
        document.getElementById('slider-sidebar').classList.toggle('on');
    }
    
    //listener botão versão desktop
    document.getElementById('dark-mode-switch').addEventListener('click', ()=> {
        darkMode();
    });
    
    //listener botão versão mobile
    document.getElementById('dark-mode-switch-sidebar').addEventListener('click', ()=> {
        darkMode();
    });