/**
 * Sahala Subair Portfolio Script
 * Developer X Theme Interactive Features & Multi-Page Support
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation on Scroll
  const header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // 2. Active Navigation Highlight based on Scroll Position (if on home page)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length > 0 && navLinks.length > 0) {
    const highlightNav = () => {
      const scrollY = window.pageYOffset;
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${sectionId}` || href === `index.html#${sectionId}`) {
              link.classList.add('active');
            } else if (!href.includes('.html')) {
              link.classList.remove('active');
            }
          });
        }
      });
    };
    window.addEventListener('scroll', highlightNav);
  }

  // 3. Navigation Drawer & Overlay Menu
  const navDrawer = document.getElementById('navOverlayDrawer');
  const navDrawerOpenBtn = document.getElementById('navDrawerOpenBtn');
  const navDrawerCloseBtn = document.getElementById('navDrawerCloseBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (navDrawer && navDrawerOpenBtn) {
    navDrawerOpenBtn.addEventListener('click', () => {
      navDrawer.classList.add('open');
      navDrawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  }

  if (navDrawer && navDrawerCloseBtn) {
    navDrawerCloseBtn.addEventListener('click', () => {
      navDrawer.classList.remove('open');
      navDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navDrawer) {
        navDrawer.classList.remove('open');
        navDrawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  });

  // Mobile toggle backward compatibility
  const mobileToggle = document.getElementById('mobileMenuToggle') || document.getElementById('mobileToggle');
  const navList = document.getElementById('navLinks') || document.getElementById('navMenu');
  if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', () => {
      navList.classList.toggle('open');
    });
  }

  // 4. Skills Carousel / Grid Scrolling
  const skillsGrid = document.getElementById('skillsGrid');
  const skillsPrevBtn = document.getElementById('skillsPrevBtn');
  const skillsNextBtn = document.getElementById('skillsNextBtn');

  if (skillsGrid && skillsPrevBtn && skillsNextBtn) {
    skillsNextBtn.addEventListener('click', () => {
      skillsGrid.scrollBy({ left: 360, behavior: 'smooth' });
      skillsNextBtn.classList.add('active');
      skillsPrevBtn.classList.remove('active');
    });

    skillsPrevBtn.addEventListener('click', () => {
      skillsGrid.scrollBy({ left: -360, behavior: 'smooth' });
      skillsPrevBtn.classList.add('active');
      skillsNextBtn.classList.remove('active');
    });
  }

  // 5. Swap Work / Project Filter Tabs
  const swapTabs = document.querySelectorAll('.swap-tab-btn');
  const projectCards = document.querySelectorAll('[data-category]');

  if (swapTabs.length > 0) {
    swapTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        swapTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter || category.includes(filter)) {
            card.style.display = '';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(15px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  // 6. Photo & Role Swap System (Preserved in localStorage)
  const heroPortraitImg = document.getElementById('heroPortraitImg');
  const heroTitleLine1 = document.getElementById('heroTitleLine1');
  const photoSwapBtn = document.getElementById('photoSwapBtn') || document.getElementById('openPhotoSwapBtn');
  const photoSwapModal = document.getElementById('photoSwapModal');
  const closePhotoModalBtn = document.getElementById('closePhotoModalBtn');
  const closePhotoModalDoneBtn = document.getElementById('closePhotoModalDoneBtn');
  const photoUploadInput = document.getElementById('photoUploadInput');

  // Load saved photo if present (ensure modern photo is used)
  const savedPhoto = localStorage.getItem('sahala_portfolio_photo');
  if (savedPhoto && !savedPhoto.includes('.svg') && heroPortraitImg) {
    heroPortraitImg.src = savedPhoto;
  } else if (heroPortraitImg) {
    heroPortraitImg.src = 'assets/sahala-portrait.png';
  }

  // Keep Sahala's portfolio positioned as Full Stack. Ignore a legacy MERN preference.
  const savedTitle = localStorage.getItem('sahala_portfolio_title');
  if (heroTitleLine1) {
    heroTitleLine1.innerText = savedTitle && savedTitle !== 'MERN' ? savedTitle : 'FULL';
  }

  // Open modal
  const openSwapModalHandler = () => {
    if (photoSwapModal) {
      photoSwapModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  if (photoSwapBtn) {
    photoSwapBtn.addEventListener('click', openSwapModalHandler);
  }
  document.querySelectorAll('#openPhotoSwapBtn, #photoSwapBtn').forEach(btn => {
    btn.addEventListener('click', openSwapModalHandler);
  });

  // Close modal
  const closeSwapModalHandler = () => {
    if (photoSwapModal) {
      photoSwapModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  if (closePhotoModalBtn) closePhotoModalBtn.addEventListener('click', closeSwapModalHandler);
  if (closePhotoModalDoneBtn) closePhotoModalDoneBtn.addEventListener('click', closeSwapModalHandler);

  if (photoSwapModal) {
    photoSwapModal.addEventListener('click', (e) => {
      if (e.target === photoSwapModal) {
        closeSwapModalHandler();
      }
    });
  }

  // Title switcher buttons (FULL STACK vs MERN STACK)
  const titleButtons = document.querySelectorAll('.swap-title-btn');
  titleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      titleButtons.forEach(b => {
        b.classList.remove('active');
        b.style.background = 'var(--bg-page)';
        b.style.color = 'var(--text-dark)';
        b.style.borderColor = 'var(--border-card)';
      });
      btn.classList.add('active');
      btn.style.background = 'var(--btn-mocha)';
      btn.style.color = '#ffffff';
      btn.style.borderColor = 'var(--btn-mocha)';

      const titleVal = btn.getAttribute('data-title');
      if (heroTitleLine1 && titleVal) {
        heroTitleLine1.innerText = titleVal;
        localStorage.setItem('sahala_portfolio_title', titleVal);
      }
    });
  });

  // Preset photo selection
  const presetOptions = document.querySelectorAll('.swap-option-card');
  presetOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      presetOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      const newSrc = opt.getAttribute('data-src');
      if (heroPortraitImg && newSrc) {
        heroPortraitImg.src = newSrc;
        localStorage.setItem('sahala_portfolio_photo', newSrc);
      }
    });
  });

  // Custom photo upload
  if (photoUploadInput) {
    photoUploadInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const customUrl = event.target.result;
          if (heroPortraitImg) {
            heroPortraitImg.src = customUrl;
          }
          localStorage.setItem('sahala_portfolio_photo', customUrl);
          presetOptions.forEach(o => o.classList.remove('selected'));
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // 7. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        formStatus.classList.add('success');
        formStatus.style.display = 'block';
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        contactForm.reset();

        setTimeout(() => {
          formStatus.style.display = 'none';
        }, 6000);
      }, 700);
    });
  }

  // 8. Resume Modal Controls
  const resumeModal = document.getElementById('resumeModal');
  const closeModalBtn = document.getElementById('closeModalBtn') || document.getElementById('closeModalX');

  const openResumeHandler = (e) => {
    if (e) e.preventDefault();
    if (resumeModal) {
      resumeModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  document.querySelectorAll('#openResumeBtn, #openResumeLink, #drawerResumeLink, #desktopResumeLink').forEach(btn => {
    btn.addEventListener('click', openResumeHandler);
  });

  if (resumeModal && closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      resumeModal.classList.remove('open');
      document.body.style.overflow = '';
    });

    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        resumeModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
});

/**
 * Copy to clipboard utility
 */
function copyToClipboard(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btnElement.innerText;
    btnElement.innerText = 'Copied!';
    btnElement.style.background = '#10b981';
    btnElement.style.color = '#ffffff';

    setTimeout(() => {
      btnElement.innerText = originalText;
      btnElement.style.background = '';
      btnElement.style.color = '';
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

function resetPhoto() {
  localStorage.removeItem('sahala_portfolio_photo');
  const heroPortraitImg = document.getElementById('heroPortraitImg');
  if (heroPortraitImg) {
    heroPortraitImg.src = 'assets/sahala-portrait.png';
  }
  const photoSwapModal = document.getElementById('photoSwapModal');
  if (photoSwapModal) photoSwapModal.classList.remove('open');
}
