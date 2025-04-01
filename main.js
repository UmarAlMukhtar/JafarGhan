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

    // Comprehensive translations for the entire website
    const translations = {
      // Navigation
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

      // Hero Section
      "hero-title": {
        en: "Defending Justice, Protecting Rights",
        ml: "നീതി സംരക്ഷിക്കുന്നു, അവകാശങ്ങൾ പരിരക്ഷിക്കുന്നു",
      },
      "hero-description": {
        en: "Specialized in criminal, civil, and family court cases with experience since 2004",
        ml: "2004 മുതൽ ക്രിമിനൽ, സിവിൽ, ഫാമിലി കോടതി കേസുകളിൽ പ്രാവീണ്യം",
      },
      "hero-cta": {
        en: "Schedule a Consultation",
        ml: "കൂടിക്കാഴ്ച ഷെഡ്യൂൾ ചെയ്യുക",
      },

      // About Section
      "about-title": {
        en: "About Me",
        ml: "എന്നെക്കുറിച്ച്",
      },
      "professional-exp": {
        en: "Professional Experience",
        ml: "പ്രൊഫഷണൽ പരിചയം",
      },
      "about-desc": {
        en: "With extensive legal practice since my enrollment in 2004, I've dedicated my career to upholding justice and defending the rights of my clients. My approach combines thorough legal knowledge with strategic advocacy to achieve the best possible outcomes.",
        ml: "2004-ൽ എൻറോൾ ചെയ്തതു മുതൽ വിപുലമായ നിയമ പ്രാക്ടീസിലൂടെ, നീതി നിലനിർത്തുന്നതിനും എന്റെ ക്ലയന്റുകളുടെ അവകാശങ്ങൾ സംരക്ഷിക്കുന്നതിനും ഞാൻ എന്റെ കരിയർ സമർപ്പിച്ചിരിക്കുന്നു. മികച്ച ഫലങ്ങൾ നേടുന്നതിന് സമഗ്രമായ നിയമ അറിവും തന്ത്രപരമായ അഭിഭാഷകത്വവും എന്റെ സമീപനം സംയോജിപ്പിക്കുന്നു.",
      },
      "education-title": {
        en: "Education & Certifications",
        ml: "വിദ്യാഭ്യാസവും സർട്ടിഫിക്കേഷനുകളും",
      },
      "edu-item-1": {
        en: "BSc LLB, Government Law College, Thrissur",
        ml: "ബിഎസ്‌സി എൽഎൽബി, ഗവൺമെന്റ് ലോ കോളേജ്, തൃശ്ശൂർ",
      },
      "edu-item-2": {
        en: "Enrollment: 2004",
        ml: "എൻറോൾമെന്റ്: 2004",
      },
      "edu-item-3": {
        en: "Panel Lawyer",
        ml: "പാനൽ അഭിഭാഷകൻ",
      },
      "expertise-title": {
        en: "Professional Expertise",
        ml: "പ്രൊഫഷണൽ വൈദഗ്ധ്യം",
      },
      "exp-item-1": {
        en: "Criminal Law",
        ml: "ക്രിമിനൽ നിയമം",
      },
      "exp-item-2": {
        en: "Civil Litigation",
        ml: "സിവിൽ വ്യവഹാരങ്ങൾ",
      },
      "exp-item-3": {
        en: "Family Court Matters",
        ml: "കുടുംബകോടതി കാര്യങ്ങൾ",
      },
      "exp-item-4": {
        en: "Other Legal Consultations",
        ml: "മറ്റ് നിയമ കൺസൾട്ടേഷനുകൾ",
      },

      // Practice Areas
      "practice-title": {
        en: "Practice Areas",
        ml: "പ്രാക്ടീസ് ഏരിയകൾ",
      },
      "criminal-law": {
        en: "Criminal Law",
        ml: "ക്രിമിനൽ നിയമം",
      },
      "criminal-desc": {
        en: "Defense against criminal charges, bail applications, and appeals at all court levels.",
        ml: "എല്ലാ കോടതി തലങ്ങളിലും ക്രിമിനൽ കുറ്റങ്ങൾക്കെതിരെയുള്ള പ്രതിരോധം, ജാമ്യാപേക്ഷകൾ, അപ്പീലുകൾ.",
      },
      "civil-law": {
        en: "Civil Law",
        ml: "സിവിൽ നിയമം",
      },
      "civil-desc": {
        en: "Handling property disputes, contract matters, and civil litigation with precision.",
        ml: "സ്വത്ത് തർക്കങ്ങൾ, കരാർ കാര്യങ്ങൾ, സിവിൽ വ്യവഹാരങ്ങൾ എന്നിവ കൃത്യതയോടെ കൈകാര്യം ചെയ്യുന്നു.",
      },
      "corporate-law": {
        en: "Corporate Law",
        ml: "കോർപ്പറേറ്റ് നിയമം",
      },
      "corporate-desc": {
        en: "Legal compliance, corporate structuring, and business contract negotiations.",
        ml: "നിയമ അനുസരണം, കോർപ്പറേറ്റ് ഘടന, ബിസിനസ്സ് കരാർ ചർച്ചകൾ.",
      },
      "family-law": {
        en: "Family Law",
        ml: "കുടുംബ നിയമം",
      },
      "family-desc": {
        en: "Divorce proceedings, child custody, maintenance, and property settlements.",
        ml: "വിവാഹമോചന നടപടികൾ, കുട്ടികളുടെ സംരക്ഷണം, പരിപാലനം, സ്വത്ത് തീർപ്പാക്കലുകൾ.",
      },
      arbitration: {
        en: "Arbitration & Mediation",
        ml: "മധ്യസ്ഥതയും സന്ധി ചർച്ചകളും",
      },
      "arbitration-desc": {
        en: "Alternative dispute resolution services with certified expertise.",
        ml: "സാക്ഷ്യപ്പെടുത്തിയ വിദഗ്ധതയോടെ ബദൽ തർക്കപരിഹാര സേവനങ്ങൾ.",
      },
      documentation: {
        en: "Documentation",
        ml: "ഡോക്യുമെന്റേഷൻ",
      },
      "documentation-desc": {
        en: "Legal drafting, will preparation, and property document verification.",
        ml: "നിയമപരമായ കരട് തയ്യാറാക്കൽ, വിൽപത്രം തയ്യാറാക്കൽ, സ്വത്ത് രേഖകൾ പരിശോധിക്കൽ.",
      },

      // Achievements Section
      "achievements-title": {
        en: "Achievements & Cases",
        ml: "നേട്ടങ്ങളും കേസുകളും",
      },
      "cases-tab": {
        en: "Notable Cases",
        ml: "ശ്രദ്ധേയമായ കേസുകൾ",
      },
      "awards-tab": {
        en: "Awards & Recognition",
        ml: "അവാർഡുകളും അംഗീകാരങ്ങളും",
      },
      "publications-tab": {
        en: "Publications",
        ml: "പ്രസിദ്ധീകരണങ്ങൾ",
      },

      // Testimonials
      "testimonials-title": {
        en: "Client Testimonials",
        ml: "ക്ലയന്റ് സാക്ഷ്യപത്രങ്ങൾ",
      },

      // Contact Section
      "contact-title": {
        en: "Contact Me",
        ml: "എന്നെ ബന്ധപ്പെടുക",
      },
      "office-address": {
        en: "Office Address",
        ml: "ഓഫീസ് വിലാസം",
      },
      phone: {
        en: "Phone",
        ml: "ഫോൺ",
      },
      email: {
        en: "Email",
        ml: "ഇമെയിൽ",
      },
      "name-placeholder": {
        en: "Your Name",
        ml: "നിങ്ങളുടെ പേര്",
      },
      "email-placeholder": {
        en: "Your Email",
        ml: "നിങ്ങളുടെ ഇമെയിൽ",
      },
      "phone-placeholder": {
        en: "Phone Number",
        ml: "ഫോൺ നമ്പർ",
      },
      "service-select": {
        en: "Select Service Required",
        ml: "ആവശ്യമായ സേവനം തിരഞ്ഞെടുക്കുക",
      },
      "message-placeholder": {
        en: "Brief Description of Your Case",
        ml: "നിങ്ങളുടെ കേസിന്റെ ചെറിയ വിവരണം",
      },
      "submit-btn": {
        en: "Schedule Consultation",
        ml: "കൂടിക്കാഴ്ച ഷെഡ്യൂൾ ചെയ്യുക",
      },

      // Blog Section
      "blog-title": {
        en: "Latest Articles",
        ml: "ഏറ്റവും പുതിയ ലേഖനങ്ങൾ",
      },
      "read-more": {
        en: "Read More",
        ml: "കൂടുതൽ വായിക്കുക",
      },
      "view-all": {
        en: "View All Articles",
        ml: "എല്ലാ ലേഖനങ്ങളും കാണുക",
      },

      // Footer
      "quick-links": {
        en: "Quick Links",
        ml: "ക്വിക്ക് ലിങ്കുകൾ",
      },
      "contact-info": {
        en: "Contact Info",
        ml: "ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ",
      },
      copyright: {
        en: "© 2025 Adv. Jafar Ghan. All Rights Reserved.",
        ml: "© 2025 അഡ്വ. ജാഫർ ഘാൻ. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.",
      },
    };

    // STEP 1: Apply translations to elements with data-trans attributes
    document.querySelectorAll("[data-trans]").forEach((el) => {
      const key = el.getAttribute("data-trans");
      if (translations[key] && translations[key][lang]) {
        el.textContent = translations[key][lang];
      }
    });

    // STEP 2: Apply translations to form placeholders
    document.querySelectorAll("[data-trans-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-trans-placeholder");
      if (translations[key] && translations[key][lang]) {
        el.placeholder = translations[key][lang];
      }
    });

    // STEP 3: Translate specific elements by their ids or classes
    // About section
    translateElementById("about-title", translations, lang);

    const aboutHeaders = document.querySelectorAll(".about-text h3");
    if (aboutHeaders.length >= 3) {
      aboutHeaders[0].textContent = translations["professional-exp"][lang];
      aboutHeaders[1].textContent = translations["education-title"][lang];
      aboutHeaders[2].textContent = translations["expertise-title"][lang];
    }

    // Education list items
    const eduItems = document.querySelectorAll(
      ".about-text ul:nth-of-type(1) li"
    );
    if (eduItems.length >= 3) {
      eduItems[0].textContent = translations["edu-item-1"][lang];
      eduItems[1].textContent = translations["edu-item-2"][lang];
      eduItems[2].textContent = translations["edu-item-3"][lang];
    }

    // Expertise list items
    const expItems = document.querySelectorAll(
      ".about-text ul:nth-of-type(2) li"
    );
    if (expItems.length >= 4) {
      expItems[0].textContent = translations["exp-item-1"][lang];
      expItems[1].textContent = translations["exp-item-2"][lang];
      expItems[2].textContent = translations["exp-item-3"][lang];
      expItems[3].textContent = translations["exp-item-4"][lang];
    }

    // Practice areas
    const serviceCards = document.querySelectorAll(".service-card");
    if (serviceCards.length >= 6) {
      translateServiceCard(
        serviceCards[0],
        "criminal-law",
        "criminal-desc",
        translations,
        lang
      );
      translateServiceCard(
        serviceCards[1],
        "civil-law",
        "civil-desc",
        translations,
        lang
      );
      translateServiceCard(
        serviceCards[2],
        "corporate-law",
        "corporate-desc",
        translations,
        lang
      );
      translateServiceCard(
        serviceCards[3],
        "family-law",
        "family-desc",
        translations,
        lang
      );
      translateServiceCard(
        serviceCards[4],
        "arbitration",
        "arbitration-desc",
        translations,
        lang
      );
      translateServiceCard(
        serviceCards[5],
        "documentation",
        "documentation-desc",
        translations,
        lang
      );
    }

    // Achievements section
    const tabButtons = document.querySelectorAll(".tab-btn");
    if (tabButtons.length >= 3) {
      tabButtons[0].textContent = translations["cases-tab"][lang];
      tabButtons[1].textContent = translations["awards-tab"][lang];
      tabButtons[2].textContent = translations["publications-tab"][lang];
    }

    // Contact section
    const contactHeaders = document.querySelectorAll(".contact-item h3");
    if (contactHeaders.length >= 3) {
      contactHeaders[0].textContent = translations["office-address"][lang];
      contactHeaders[1].textContent = translations["phone"][lang];
      contactHeaders[2].textContent = translations["email"][lang];
    }

    // Form placeholders
    document.getElementById("name").placeholder =
      translations["name-placeholder"][lang];
    document.getElementById("email").placeholder =
      translations["email-placeholder"][lang];
    document.getElementById("phone").placeholder =
      translations["phone-placeholder"][lang];
    document.getElementById("message").placeholder =
      translations["message-placeholder"][lang];

    // Service select option
    const serviceSelect = document.getElementById("service");
    if (serviceSelect && serviceSelect.options.length > 0) {
      serviceSelect.options[0].text = translations["service-select"][lang];
    }

    // Footer translations
    document.querySelector(".footer-links h3").textContent =
      translations["quick-links"][lang];
    document.querySelector(".footer-contact h3").textContent =
      translations["contact-info"][lang];
    document.querySelector(".footer-bottom p").textContent =
      translations["copyright"][lang];

    // Blog "Read More" links
    document.querySelectorAll(".read-more").forEach((el) => {
      el.textContent = translations["read-more"][lang];
    });

    document.querySelector(".view-all-container .btn").textContent =
      translations["view-all"][lang];

    // Set document title based on language
    document.title =
      lang === "en"
        ? "Adv. Jafar Ghan - Legal Services"
        : "അഡ്വ. ജാഫർ ഘാൻ - നിയമ സേവനങ്ങൾ";
  }

  // Helper function to translate service cards
  function translateServiceCard(card, titleKey, descKey, translations, lang) {
    if (!card) return;
    const h3 = card.querySelector("h3");
    const p = card.querySelector("p");
    if (h3 && translations[titleKey] && translations[titleKey][lang]) {
      h3.textContent = translations[titleKey][lang];
    }
    if (p && translations[descKey] && translations[descKey][lang]) {
      p.textContent = translations[descKey][lang];
    }
  }

  // Helper function to translate element by ID
  function translateElementById(id, translations, lang) {
    const element = document.getElementById(id);
    if (element && translations[id] && translations[id][lang]) {
      element.textContent = translations[id][lang];
    }
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
