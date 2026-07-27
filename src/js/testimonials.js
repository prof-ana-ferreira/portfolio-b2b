/* ===================================================
   TESTIMONIALS - API FETCH & CENTERED CAROUSEL
   =================================================== */

const cardsContainer = document.getElementById('testimonials-cards');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const avatarImages = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80'
];

async function loadTestimonials() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Erro ao carregar os dados');

    const users = await response.json();
    const firstFiveUsers = users.slice(0, 5);

    cardsContainer.innerHTML = '';

    firstFiveUsers.forEach((user, index) => {
      const cardHTML = createCardHTML(user, index);
      cardsContainer.insertAdjacentHTML('beforeend', cardHTML);
    });

    // Após renderizar, inicializa a centralização e observador
    initCarouselFocus();

  } catch (error) {
    console.error(error);
  }
}

function createCardHTML(user, index) {
  const avatarUrl = avatarImages[index] || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`;

  return `
    <article class="testimonial-card">
      <div class="card-company">
        <span class="company-name">${user.company.name}</span>
      </div>

      <p class="card-text">
        "${user.company.catchPhrase}. ${user.company.bs}."
      </p>

      <div class="card-author">
        <img src="${avatarUrl}" alt="Foto de ${user.name}" class="author-avatar" loading="lazy" />
        <div class="author-info">
          <h4 class="author-name">${user.name}</h4>
          <span class="author-role">Co-founder / ${user.address.city}</span>
        </div>
      </div>
    </article>
  `;
}

/**
 * Gerencia a ativação visual do card que estiver no centro
 */
function updateActiveCard() {
  const cards = document.querySelectorAll('.testimonial-card');
  const containerCenter = cardsContainer.getBoundingClientRect().left + cardsContainer.offsetWidth / 2;

  let closestCard = null;
  let minDistance = Infinity;

  cards.forEach((card) => {
    const cardBox = card.getBoundingClientRect();
    const cardCenter = cardBox.left + cardBox.width / 2;
    const distance = Math.abs(containerCenter - cardCenter);

    if (distance < minDistance) {
      minDistance = distance;
      closestCard = card;
    }
  });

  cards.forEach(card => card.classList.remove('active'));
  if (closestCard) {
    closestCard.classList.add('active');
  }
}

/**
 * Inicializa a posição no centro e os eventos de scroll
 */
function initCarouselFocus() {
  const cards = document.querySelectorAll('.testimonial-card');
  
  // Centraliza no 3º card (índice 2) sem mover o scroll vertical da página
  if (cards.length >= 3) {
    const targetCard = cards[2];
    
    // Calcula a posição exata de scroll horizontal no container interno
    const containerWidth = cardsContainer.offsetWidth;
    const cardOffsetLeft = targetCard.offsetLeft;
    const cardWidth = targetCard.offsetWidth;

    // Rola APENAS o container do carrossel para a posição do card central
    cardsContainer.scrollLeft = cardOffsetLeft - (containerWidth / 2) + (cardWidth / 2);
  }

  updateActiveCard();

  // Atualiza a classe active conforme o usuário rola o carrossel
  cardsContainer.addEventListener('scroll', updateActiveCard);
}

// Botões Prev / Next rolam até o card adjacente
nextBtn.addEventListener('click', () => {
  cardsContainer.scrollBy({ left: 340, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  cardsContainer.scrollBy({ left: -340, behavior: 'smooth' });
});

loadTestimonials();