document.addEventListener("DOMContentLoaded", function () {
    const letTalkSection = document.getElementById("let-talk");

    // Parallax effect
    window.addEventListener("mousemove", function (e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const xOffset = (mouseX / windowWidth) * 20 - 10; // Range between -10 and 10
      const yOffset = (mouseY / windowHeight) * 20 - 10; // Range between -10 and 10

      letTalkSection.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });

    // Reset position on mouse leave
    letTalkSection.addEventListener("mouseleave", function () {
      letTalkSection.style.transform = "translate(0, 0)";
    });
  });
  function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
  }

  showTime();
  var typed = new Typed(".auto-type", {
    strings: ["KIMLONG", "A DEVELOPER", "A DESIGNER", "A TIKTOKER"],
    typeSpeed: 110,
    backSpeed: 110,
    loop: true,
  });
  document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");

    window.addEventListener("scroll", function () {
      if (window.scrollY === 0) {
        header.classList.add("transparent");
        header.classList.remove("scrolled");
      } else {
        header.classList.add("scrolled");
        header.classList.remove("transparent");
      }
    });

    if (window.scrollY === 0) {
      header.classList.add("transparent");
    } else {
      header.classList.add("scrolled");
    }
  });
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });

  document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".chart-skill");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillElement = entry.target;
            const skillWidth = parseFloat(skillElement.dataset.skillWidth); // Parse width percentage
            animateSkillWidth(skillElement, skillWidth); // Call animation function
            observer.unobserve(skillElement); // Stop observing once the animation has triggered
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    skills.forEach((skill) => {
      skill.style.width = "0%"; // Initialize width to 0%
      observer.observe(skill);
    });

    function animateSkillWidth(skillElement, widthPercentage) {
      let currentWidth = 0;
      const animationDuration = 1500; // Animation duration in milliseconds

      function increaseWidth(timestamp) {
        if (!skillElement.startTime) {
          skillElement.startTime = timestamp;
        }

        const elapsed = timestamp - skillElement.startTime;
        currentWidth = (elapsed / animationDuration) * widthPercentage;

        if (currentWidth <= widthPercentage) {
          skillElement.style.width = currentWidth + "%";
          requestAnimationFrame(increaseWidth);
        } else {
          skillElement.style.width = widthPercentage + "%";
        }
      }

      requestAnimationFrame(increaseWidth);
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const letTalkSection = document.getElementById("let-talk");

    // Parallax effect
    window.addEventListener("mousemove", function (e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const xOffset = (mouseX / windowWidth) * 20 - 10; // Range between -10 and 10
      const yOffset = (mouseY / windowHeight) * 20 - 10; // Range between -10 and 10

      letTalkSection.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });

    // Reset position on mouse leave
    letTalkSection.addEventListener("mouseleave", function () {
      letTalkSection.style.transform = "translate(0, 0)";
    });
      // Get all sections that have an ID defined
      const sections = document.querySelectorAll("section[id]");
          
          // Add an event listener for scroll
          window.addEventListener("scroll", navHighlighter);
          
          function navHighlighter() {
            // Get current scroll position
            let scrollY = window.pageYOffset;
            
            // Loop through sections to get height, top and ID values for each
            sections.forEach(current => {
              const sectionHeight = current.offsetHeight;
              const sectionTop = current.offsetTop - 100; // Adjust offset as needed
              const sectionId = current.getAttribute("id");
              
              // If our current scroll position enters the space where current section is
              if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Remove active class from all navigation items
                document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
                  link.classList.remove("active");
                });
                
                // Add active class to corresponding navigation item
                document.querySelector(`.navbar-nav .nav-link[href*=${sectionId}]`).classList.add("active");
              }
            });
          }
          
          // Smooth scroll for navigation links
          document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
              // Only prevent default if the link is an anchor link
              if(this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                // Close mobile menu if open
                const bsOffcanvas = bootstrap.Offcanvas.getInstance('#offcanvasExample');
                if(bsOffcanvas) {
                  bsOffcanvas.hide();
                }
                
                // Get the target section
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if(targetSection) {
                  // Scroll to the target section
                  window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust offset as needed
                    behavior: 'smooth'
                  });
                }
              }
            });
          });
  });
  // Update the touch device handling for project overlays
  document.addEventListener("DOMContentLoaded", function() {
    // Check if device is touch-enabled
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
      const projectContainers = document.querySelectorAll('.project-container:not(.graphic-design)');
      
      projectContainers.forEach(container => {
        // For touch devices, make first tap show overlay, second tap follow link
        container.addEventListener('click', function(e) {
          const overlay = this.querySelector('.project-overlay');
          const link = overlay.querySelector('.btn-view-project');
          
          // If the overlay is not fully visible yet, show it and prevent link navigation
          if (!this.classList.contains('active-overlay')) {
            e.preventDefault();
            e.stopPropagation();
            
            // Remove active class from all other containers
            projectContainers.forEach(c => {
              if (c !== this) {
                c.classList.remove('active-overlay');
              }
            });
            
            // Add active class to current container
            this.classList.add('active-overlay');
          } else if (e.target !== link) {
            // If clicking anywhere on the overlay except the button, prevent navigation
            e.preventDefault();
          }
        });
      });
      
      // Close overlay when clicking outside
      document.addEventListener('click', function(e) {
        if (!e.target.closest('.project-container')) {
          projectContainers.forEach(c => c.classList.remove('active-overlay'));
        }
      });
    }
  });