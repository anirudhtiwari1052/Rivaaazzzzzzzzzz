let currentOffset = 0;
const windowSize = 3;
const paginationFactor = 220;
const cardContainer = document.getElementById('cardContainer');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

document.addEventListener('DOMContentLoaded', () => {
    const selects = document.querySelectorAll('select');
    const searchButton = document.getElementById('searchButton');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    selects.forEach((select) => {
        select.addEventListener('change', () => {
            console.log(`Selected option: ${select.value}`);
        });
    });

    searchButton.addEventListener('click', () => {
        const event = document.getElementById('eventSelect').value;
        const city = document.getElementById('citySelect').value;
        
        if (event && city) {
            alert(`Searching for ${event} events in ${city}`);
        } else {
            alert('Please select both event and city.');
        }
    });

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateElementsOnScroll() {
        elementsToAnimate.forEach((element) => {
            if (isInViewport(element)) {
                element.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', animateElementsOnScroll);
    animateElementsOnScroll(); // Trigger animation for elements already in view on page load
});

// Function to move the carousel
function moveCarousel(direction) {
  const maxOffset = (paginationFactor * -1) * (cardContainer.children.length - windowSize);

  if (direction === 1 && currentOffset > maxOffset) {
    currentOffset -= paginationFactor;
  } else if (direction === -1 && currentOffset < 0) {
    currentOffset += paginationFactor;
  }

  cardContainer.style.transform = `translateX(${currentOffset}px)`;

  // Disable buttons if at the end or start of the list
  leftBtn.disabled = currentOffset === 0;
  rightBtn.disabled = currentOffset <= maxOffset;
}

// Example static cards
const items = [
  { name: 'Kin Khao', tag: ["Thai"] },
  { name: 'Jū-Ni', tag: ["Sushi", "Japanese", "$$$$"] },
  { name: 'Delfina', tag: ["Pizza", "Casual"] }
];

// Dynamically add cards to the container
items.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card-carousel--card';

  const img = document.createElement('img');
  img.src = 'https://placehold.it/200x200';
  img.alt = 'Placeholder Image';

  const footer = document.createElement('div');
  footer.className = 'card-carousel--card--footer';

  const name = document.createElement('p');
  name.textContent = item.name;

  footer.appendChild(name);

  item.tag.forEach((tag, index) => {
    const tagElement = document.createElement('p');
    tagElement.className = `tag ${index > 0 ? 'secondary' : ''}`;
    tagElement.textContent = tag;
    footer.appendChild(tagElement);
  });

  card.appendChild(img);
  card.appendChild(footer);
  cardContainer.appendChild(card);
});
