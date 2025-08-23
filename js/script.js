document.addEventListener('DOMContentLoaded', () => {

    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    const handleScroll = () => {
        if (window.scrollY > 300) { 
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', handleScroll);
    scrollToTopBtn.addEventListener('click', scrollToTop);

    const projectsScrollBox = document.getElementById('projectsScrollBox');
    const projectsScrollLeftBtn = document.getElementById('scrollLeftBtn'); 
    const projectsScrollRightBtn = document.getElementById('scrollRightBtn'); 

    if (projectsScrollLeftBtn && projectsScrollRightBtn && projectsScrollBox) {
        projectsScrollLeftBtn.addEventListener('click', () => {
            const scrollAmount = projectsScrollBox.offsetWidth;
            projectsScrollBox.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        projectsScrollRightBtn.addEventListener('click', () => {
            const scrollAmount = projectsScrollBox.offsetWidth;
            projectsScrollBox.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    const experienceScrollBox = document.getElementById('ExperienceScrollBox');
    const experienceScrollLeftBtn = document.getElementById('experienceScrollLeftBtn'); 
    const experienceScrollRightBtn = document.getElementById('experienceScrollRightBtn'); 

    if (experienceScrollLeftBtn && experienceScrollRightBtn && experienceScrollBox) {
        experienceScrollLeftBtn.addEventListener('click', () => {
            const scrollAmount = experienceScrollBox.offsetWidth;
            experienceScrollBox.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        experienceScrollRightBtn.addEventListener('click', () => {
            const scrollAmount = experienceScrollBox.offsetWidth;
            experienceScrollBox.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }

document.addEventListener('DOMContentLoaded', () => {
    const loaderWrapper = document.getElementById('loader-wrapper');
    if (loaderWrapper) {
        loaderWrapper.classList.add('loader-hidden');
    }
});

  const preloader = document.getElementById('preloader');

  const minDelay = 2000;

  let pageLoaded = false;
  let delayPassed = false;

  function hidePreloader() {
    if (pageLoaded && delayPassed) {
      preloader.classList.add('fade-out');
    }
  }

  window.addEventListener('load', () => {
    pageLoaded = true;
    hidePreloader();
  });

  setTimeout(() => {
    delayPassed = true;
    hidePreloader();
  }, minDelay);

function resetPagePosition() {

    if (window.location.hash) {

        history.pushState('', document.title, window.location.pathname + window.location.search);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

resetPagePosition();

 const sections = document.querySelectorAll('.content-section');

  const options = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.5 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute('id');

        updateURL(`#${sectionId}`);

        document.querySelectorAll('nav ul li a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });

  function updateURL(sectionId) {
    if (history.replaceState) {
      const newUrl = `${window.location.pathname}${sectionId}`;
      history.replaceState(null, '', newUrl);
    }
  }
});