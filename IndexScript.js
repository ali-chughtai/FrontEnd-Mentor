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

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".communityBottomDiv");
    const cards = Array.from(document.querySelectorAll(".communityBottomDiv .card"));
    const left = document.querySelector(".prevBtn");
    const right = document.querySelector(".nextBtn");
    
    const visibleCount = 3; // Number of cards to show at once
    let startIndex = 0; // Track start index for visible cards

    function updateCards() {
        // Hide all cards first
        cards.forEach(card => card.style.display = 'none');
        
        // Show the cards in the current range
        for (let i = startIndex; i < startIndex + visibleCount; i++) {
            if (cards[i]) {
                cards[i].style.display = 'flex'; // Show card
            }
        }

        // Update button states
        updateButtonStates();
    }

    function scrollCards(offset) {
        // Update startIndex based on offset
        startIndex += offset;

        // Prevent startIndex from going out of bounds
        if (startIndex < 0) startIndex = 0;
        if (startIndex + visibleCount > cards.length) startIndex = cards.length - visibleCount;

        // Update the card visibility
        updateCards();
    }

    function updateButtonStates() {
        // Disable left button if at the beginning
        if (startIndex === 0) {
            left.classList.add('btn-disabled');
            left.disabled = true;
        } else {
            left.classList.remove('btn-disabled');
            left.disabled = false;
        }

        // Disable right button if at the end
        if (startIndex + visibleCount >= cards.length) {
            right.classList.add('btn-disabled');
            right.disabled = true;
        } else {
            right.classList.remove('btn-disabled');
            right.disabled = false;
        }
    }

    // Initial display
    updateCards();

    // Event listeners
    left.addEventListener("click", function() {
        if (!left.disabled) {
            scrollCards(-1); // Scroll left by one card's width
        }
    });

    right.addEventListener("click", function() {
        if (!right.disabled) {
            scrollCards(1); // Scroll right by one card's width
        }
    });
});

document.querySelectorAll(".faqs details").forEach((detail) => {
    detail.addEventListener("toggle", function() {
        const summary = this.querySelector("summary");
        const closedIcon = summary.querySelector(".closed-icon");
        const openIcon = summary.querySelector(".open-icon");

        if (this.open) {
            closedIcon.style.display = "none";
            openIcon.style.display = "inline";
        } else {
            closedIcon.style.display = "inline";
            openIcon.style.display = "none";
        }
    });
});





