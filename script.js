// =============================================
//         FUNÇÕES DA TELA DE LOGIN
// =============================================

// Mostra uma página específica dentro da tela de login
function showLoginPage(pageId) {
  // Esconde todas as páginas do login
  document.querySelectorAll('.login-page').forEach(page => {
    page.classList.remove('visible');
    setTimeout(() => {
      page.style.display = 'none';
    }, 600);
  });

  // Mostra a página desejada
  const target = document.getElementById('login-' + pageId);
  if (target) {
    target.style.display = 'block';
    setTimeout(() => {
      target.classList.add('visible');
    }, 50);
  }
}

// Simula o processo de login e libera o site
function simulateLogin(type) {
  const cgmInput = document.getElementById(type === 'student' ? 'student-cgm' : 'resp-cgm');
  const phoneInput = document.getElementById(type === 'student' ? 'student-phone' : 'resp-phone');

  const cgm = cgmInput ? cgmInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';

  if (!cgm || !phone) {
    alert('Por favor, preencha CGM/CPF e Celular para continuar.');
    return;
  }

  // Simulação de envio de código
  alert(`Código de segurança enviado para o celular ${phone}!\n\n(Em ambiente real, um SMS seria enviado)`);

  // Após 1.5 segundos, "loga" e mostra o site
  setTimeout(() => {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
    document.getElementById('main-content').style.display = 'block';

    // Scroll suave para o topo (opcional)
    window.scrollTo({ top: 0, behavior: 'smooth' });

    console.log('Usuário logado com sucesso. Site liberado.');
  }, 1500);
}

// =============================================
//         CÓDIGO ORIGINAL QUE VOCÊ ENVIOU
// =============================================

// Tema dark/light
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  }
});

// Menu mobile
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  if (mobileMenu.classList.contains('active')) {
    menuIcon.classList.replace('fa-bars', 'fa-times');
  } else {
    menuIcon.classList.replace('fa-times', 'fa-bars');
  }
});

// Modal
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    const modalType = card.getAttribute('data-modal');
    
    let content = '';
    
    if (modalType === '1') {
      content = `
        <h2>Educação Infantil</h2>
        <p>Espaço lúdico, seguro e cheio de amor. Aprendizado através do brincar com valores cristãos desde o berçário até o Pré-V.</p>
      `;
    } else if (modalType === '2') {
      content = `
        <h2>Ensino Fundamental</h2>
        <p>Base sólida com robótica, inglês desde cedo, esportes, artes e formação humana completa (1º ao 9º ano).</p>
      `;
    } else if (modalType === '3') {
      content = `
        <h2>Ensino Médio</h2>
        <p>Preparação intensiva para ENEM, vestibulares e vida universitária com foco em valores e excelência acadêmica.</p>
      `;
    }
    
    modalBody.innerHTML = content;
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Galeria simples (imagens estáticas)
const gallery = document.getElementById('gallery');
const galleryImages = [
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/201/600/400',
  'https://picsum.photos/id/237/600/400',
  'https://picsum.photos/id/29/600/400',
  'https://picsum.photos/id/180/600/400',
];
if (gallery) {
  gallery.innerHTML = galleryImages.map(src => `<img src="${src}" alt="Infraestrutura">`).join('');
}

// Formulário fake de matrícula
const formMatricula = document.getElementById('form-matricula');
if (formMatricula) {
  formMatricula.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Solicitação de matrícula enviada com sucesso!\nNossa equipe entrará em contato em breve.');
  });
}

// Smooth scroll para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // Fecha menu mobile se aberto
    if (mobileMenu) {
      mobileMenu.classList.remove('active');
      if (menuIcon) {
        menuIcon.classList.replace('fa-times', 'fa-bars');
      }
    }
  });
});

// Inicia o site com a tela de login visível
document.addEventListener('DOMContentLoaded', () => {
  // Mostra a tela inicial do login
  showLoginPage('home');
  
  // Garante que o conteúdo principal fique escondido no início
  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    mainContent.style.display = 'none';
  }

  console.log("Site Colégio São Cristóvão carregado com sucesso! Tela de login ativa.");
});
