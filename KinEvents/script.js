// Apparition avec scroll
  const reveals = document.querySelectorAll(".scroll-reveal");

  const revealOnScroll = () => {
    for (let el of reveals) {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("visible");
      }
    }
  };

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);