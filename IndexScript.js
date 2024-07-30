document.addEventListener("DOMContentLoaded", function() {
    const detailsElements = document.querySelectorAll("details");
    const images = document.querySelectorAll(".workingRightDiv img");

    // Function to update images based on the open details
    function updateImages() {
        detailsElements.forEach((details, index) => {
            if (details.hasAttribute("open")) {
                images.forEach((img, imgIndex) => {
                    img.classList.toggle('active', imgIndex === index);
                });
            }
        });
    }

    // Function to handle details opening
    function handleDetailsClick(e) {
        const clickedDetails = e.target.closest('details');

        if (clickedDetails) {
            // Prevent default action for the click event
            e.preventDefault();
            
            // Check if the clicked details is already open
            if (clickedDetails.hasAttribute("open")) {
                // If already open, do nothing to prevent closing
                return;
            } else {
                // Close all details except the clicked one
                detailsElements.forEach(details => {
                    details.removeAttribute("open");
                });

                // Open the clicked details
                clickedDetails.setAttribute("open", true);

                // Update images based on the open details
                updateImages();
            }
        }
    }

    // Add click event listeners to all summary elements within details
    detailsElements.forEach(details => {
        const summary = details.querySelector('summary');
        const deets = document.querySelector("details")
        if (summary) {
            summary.addEventListener("click", handleDetailsClick);
        }
    });
    

    // Open the first details by default and update images
    detailsElements[0].setAttribute("open", true);
    updateImages();

    // Ensure at least one details is open after any click
    function ensureAtLeastOneOpen() {
        const openDetails = document.querySelector('details[open]');
        if (!openDetails) {
            // If no details is open, open the first one
            detailsElements[0].setAttribute("open", true);
        }

        // Update images based on the open details
        updateImages();
    }

    document.addEventListener("click", ensureAtLeastOneOpen);
    const container = document.querySelector(".communityBottomDiv");
    const left = document.querySelector(".prevBtn");
    const right = document.querySelector(".nextBtn");
    let translate = 0;
    left.addEventListener("click", function() {
        translate += 33;
        container.style.transform = "translateX(" + translate + "%)";
    });

    right.addEventListener("click", function() {
        translate -= 33;
        container.style.transform = "translateX(" + translate + "%)";
    });
   
    
    

});

