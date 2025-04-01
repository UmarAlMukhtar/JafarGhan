document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS animation library
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: "ease-in-out",
  });

  // Mobile Menu Toggle
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileMenu) {
    mobileMenu.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking a nav link
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      navMenu.classList.remove("active");

      // Active link highlighting
      navLinks.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Scroll Event for Header
  const header = document.querySelector("header");
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Back to Top button visibility
    const backToTop = document.getElementById("back-to-top");
    if (window.scrollY > 300) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }

    // Active menu based on scroll position
    updateActiveMenuOnScroll();
  });

  // Theme Toggle
  const themeIcon = document.getElementById("theme-icon");
  const body = document.body;

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }

  themeIcon.addEventListener("click", function () {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
      themeIcon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "dark");
    } else {
      themeIcon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "light");
    }
  });

  // Language Toggle
  const languageBtn = document.getElementById("language-btn");
  const currentLang = document.getElementById("current-lang");

  // Check for saved language preference
  const savedLanguage = localStorage.getItem("language") || "en";
  setLanguage(savedLanguage);

  if (languageBtn) {
    languageBtn.addEventListener("click", function () {
      const currentLanguage = document.documentElement.getAttribute("lang");
      const newLanguage = currentLanguage === "en" ? "ml" : "en";
      setLanguage(newLanguage);
      localStorage.setItem("language", newLanguage);
    });
  }

  function setLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);
    currentLang.textContent = lang.toUpperCase();

    // Update text content based on language
    const translations = {
      "nav-home": {
        en: "Home",
        ml: "ഹോം",
      },
      "nav-about": {
        en: "About",
        ml: "എന്നെക്കുറിച്ച്",
      },
      "nav-practice": {
        en: "Practice Areas",
        ml: "പ്രാക്ടീസ് ഏരിയകൾ",
      },
      "nav-achievements": {
        en: "Achievements",
        ml: "നേട്ടങ്ങൾ",
      },
      "nav-contact": {
        en: "Contact",
        ml: "ബന്ധപ്പെടുക",
      },
      "nav-blog": {
        en: "Blog",
        ml: "ബ്ലോഗ്",
      },
      "hero-title": {
        en: "Defending Justice, Protecting Rights",
        ml: "നീതി സംരക്ഷിക്കുന്നു, അവകാശങ്ങൾ പരിരക്ഷിക്കുന്നു",
      },
      "hero-description": {
        en: "Specialized in criminal, civil, and family court cases with experience since 2004",
        ml: "2004 മുതൽ ക്രിമിനൽ, സിവിൽ, ഫാമിലി കോടതി കേസുകളിൽ പ്രാവീണ്യം",
      },
      "education-title": {
        en: "Education & Certifications",
        ml: "വിദ്യാഭ്യാസവും സർട്ടിഫിക്കേഷനുകളും",
      },
      "professional-experience": {
        en: "Professional Experience",
        ml: "പ്രൊഫഷണൽ പരിചയം",
      },
      // Add more translations as needed
    };

    // Apply translations
    Object.keys(translations).forEach((key) => {
      const elements = document.querySelectorAll(`[data-trans="${key}"]`);
      elements.forEach((el) => {
        el.textContent = translations[key][lang];
      });
    });
  }

  // Tab functionality
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      // Update active tab button
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Show the selected tab content
      tabContents.forEach((content) => content.classList.remove("active"));
      document.getElementById(tabId).classList.add("active");
    });
  });

  // Testimonial Slider
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.getElementById("prev-testimonial");
  const nextBtn = document.getElementById("next-testimonial");
  let currentTestimonial = 0;

  if (prevBtn && nextBtn) {
    // Initialize testimonials
    showTestimonial(currentTestimonial);

    prevBtn.addEventListener("click", function () {
      currentTestimonial =
        (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentTestimonial);
    });

    nextBtn.addEventListener("click", function () {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    });

    // Auto slide testimonials
    setInterval(function () {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }, 8000);
  }

  function showTestimonial(index) {
    testimonials.forEach((testimonial) =>
      testimonial.classList.remove("active")
    );
    testimonials[index].classList.add("active");
  }

  // Form submission
  const contactForm = document.getElementById("consultation-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const service = document.getElementById("service").value;
      const message = document.getElementById("message").value;

      // Simple form validation
      if (!name || !email || !phone || !service || !message) {
        alert("Please fill in all fields");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
      }

      // Phone validation (simple format)
      const phoneRegex = /^\+?[0-9\s\-()]{8,20}$/;
      if (!phoneRegex.test(phone)) {
        alert("Please enter a valid phone number");
        return;
      }

      // In a real application, you would send this data to a server
      // For this demo, just show a success message
      alert(
        "Thank you! Your consultation request has been submitted. We will contact you shortly."
      );
      contactForm.reset();
    });
  }

  // Update active menu based on scroll position
  function updateActiveMenuOnScroll() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-menu a");

    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  }

  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Add scroll reveal animations to elements
  const scrollElements = document.querySelectorAll(".service-card, .blog-card");
  scrollElements.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
  });
});

// Add Preloader
window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }, 500);
  }
});
