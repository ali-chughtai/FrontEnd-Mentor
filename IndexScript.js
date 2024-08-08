document.addEventListener("DOMContentLoaded", function() {
    const customDetailsElements = document.querySelectorAll("details");
    const images = document.querySelectorAll(".workingRightDiv img");

    function updateImages() {
        customDetailsElements.forEach((details, index) => {
            if (details.hasAttribute("open")) {
                images.forEach((img, imgIndex) => {
                    img.classList.toggle('active', imgIndex === index);
                });
            }
        });
    }

    function handleDetailsClick(e) {
        const clickedDetails = e.target.closest('.custom-details');

        if (clickedDetails) {
            e.preventDefault();

            if (clickedDetails.hasAttribute("open")) {
                return;
            } else {
                customDetailsElements.forEach(details => {
                    details.removeAttribute("open");
                });

                clickedDetails.setAttribute("open", true);

                updateImages();
            }
        }
    }

    customDetailsElements.forEach(details => {
        const summary = details.querySelector('summary');
        if (summary) {
            summary.addEventListener("click", handleDetailsClick);
        }
    });

    customDetailsElements[0].setAttribute("open", true);
    updateImages();

    function ensureAtLeastOneOpen() {
        const openDetails = document.querySelector('.custom-details[open]');
        if (!openDetails) {
            customDetailsElements[0].setAttribute("open", true);
        }

        updateImages();
    }
});


function handleScroll() {
    const scrollButton = document.querySelector('.refrenceButton');
    
    const isMobile = window.matchMedia('(max-width: 499px)').matches;
    
    
        const working = document.querySelector('.features');
        const workingOffset = working.offsetTop - window.innerHeight;

        if (window.scrollY <= workingOffset) {
            scrollButton.style.display = 'none';
        } else {
            scrollButton.style.display = 'block';
        }
   
    
}

window.addEventListener('scroll', handleScroll);

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;
    const visibleItems = 2; // Number of items to show at a time
    const itemWidth = items[0].clientWidth;
    const gap = parseFloat(window.getComputedStyle(carousel).gap); // Get the gap between items
    const wrapperWidth = document.querySelector(".carousel-wrapper").clientWidth;

    let currentIndex = 0;

    function updateCarousel() {
        const maxOffset = -((totalItems - visibleItems) * (itemWidth + gap));
        const offset = Math.max(-(currentIndex * (itemWidth + gap)), maxOffset);
        carousel.style.transform = `translateX(${offset}px)`;
    }

    document.querySelector(".nextBtn").addEventListener("click", function() {
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
            updateCarousel();
        }
        updateButtonStates();
    });

    document.querySelector(".prevBtn").addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
        updateButtonStates();
    });

    function updateButtonStates() {
        document.querySelector(".prevBtn").disabled = currentIndex === 0;
        document.querySelector(".nextBtn").disabled = currentIndex >= totalItems - visibleItems;
    }

    // Initial display
    updateCarousel();
    updateButtonStates();
});


function drawerClicked() {
    const FirstBar = document.getElementById("one");
    const SecondBar = document.getElementById("two");
    const ThirdBar = document.getElementById("three");
    const drawerDiv = document.querySelector(".drawerDiv");

    if (drawerDiv.getAttribute("data-state") === "closed") {
     SecondBar.style.opacity= "0";
      FirstBar.style.transform = "rotate(45deg) translate(0, 11.5px)";
      ThirdBar.style.transform = "rotate(-45deg) translate(0, -11.5px)";
      drawerDiv.setAttribute("data-state", "open");
      drawerDiv.style.paddingLeft = "1.1rem";
    } else {
     
      FirstBar.style.transform = "rotate(0deg) translate(0, 0)";
      ThirdBar.style.transform = "rotate(0deg) translate(0, 0)";
      SecondBar.style.opacity= "1"

      drawerDiv.setAttribute("data-state", "closed");
      drawerDiv.style.paddingLeft = "0";

    }
  }

  function mobileDrawerClicked() {
    const drawer = document.querySelector(".mobileDrawer");
    
    if (drawer.classList.contains("open")) {
        drawer.classList.remove("open");
    } else {
        drawer.classList.add("open");
    }
}


// Media Query used to change the image in different aspects of windows, but everytime to change
// the image you have to refresh the page so media query in css is better than changing here 
  function updateImageSrc() {
    const image = document.getElementById("navLogoImage");
    console.log('Script loaded, Image element:', image);
  
    if (window.matchMedia('(max-width: 1024px)').matches) {
      image.src = "https://www.frontendmentor.io/static/images/logo-mobile.svg";
    }
    else{
        image.src = "https://www.frontendmentor.io/static/images/logo-desktop.svg";

    }
  };

  document.addEventListener("DOMContentLoaded", updateImageSrc);
window.addEventListener("resize", updateImageSrc);

// The above two lines change the image without the page requiring 
// to refresh or load evertime, eg: dynamically
  