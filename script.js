    // Theme toggle
    const toggleBtn = document.getElementById('theme-toggle');
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });

    // Scroll-to-top
  const scrollTopBtn = document.getElementById('scroll-top');
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  scrollTopBtn.addEventListener('click', () => {
    header.scrollIntoView({ behavior: 'smooth' });
  });

    // Carousel autoplay
    const track = document.querySelector('.carousel-track');
    const leftBtn = document.querySelector('.carousel-btn.left');
    const rightBtn = document.querySelector('.carousel-btn.right');
    const projectCount = track.children.length;
    let index = 0;
    let autoplayInterval;

    function updateCarousel() {
      const width = track.children[0].offsetWidth + 20;
      track.style.transform = `translateX(-${index * width}px)`;
    }

    rightBtn.addEventListener('click', () => {
      index = (index + 1) % projectCount;
      updateCarousel();
    });

    leftBtn.addEventListener('click', () => {
      index = (index - 1 + projectCount) % projectCount;
      updateCarousel();
    });

    function startAutoplay() {
      autoplayInterval = setInterval(() => {
        index = (index + 1) % projectCount;
        updateCarousel();
      }, 3000);
    }

    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }

    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    startAutoplay();