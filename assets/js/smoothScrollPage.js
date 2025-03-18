///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Header First Navigation Smooth Scrolling-------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelectorAll('.first-nav.main-nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Check if the link is an internal anchor link
        if (href.charAt(0) === '#') {
            e.preventDefault(); // Prevent the default behavior of the anchor element

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            const distanceToTop = targetElement.getBoundingClientRect().top;
            const startingY = window.pageYOffset;
            const offset = 50;

            const easeInOutCubic = (t, b, c, d) => {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t + b;
                t -= 2;
                return c / 2 * (t * t * t + 2) + b;
            };

            let start;

            const step = (timestamp) => {
                if (!start) start = timestamp;
                const elapsed = timestamp - start;
                const progress = Math.min(elapsed / 2000, 1);
                window.scrollTo(0, startingY + easeInOutCubic(progress, 0, distanceToTop, 1) - offset);

                // Fade-in effect
                targetElement.style.opacity = progress; // Fade in gradually as the section scrolls into view

                if (elapsed < 2000) window.requestAnimationFrame(step);
            };

            window.requestAnimationFrame(step);
        }
        // If it's an external link, let the default behavior occur (navigation to the specified URL)
    });
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Multi Pages Find out Vottm Scrolling-------------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    var findOutButton = document.querySelector('.container-btn');
    var htmlContentSection = document.getElementById('section-content');

    findOutButton.addEventListener('click', function (event) {
        event.preventDefault();
        smoothScroll(htmlContentSection);
    });

    // Function to perform smooth scrolling
    function smoothScroll(target) {
        var targetPosition = target.getBoundingClientRect().top;
        var startPosition = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
        var distance = targetPosition - 70; // Adjust as needed to offset for fixed header height
        var duration = 2000; // Adjust scroll duration (in milliseconds)

        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var scrollAmount = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, scrollAmount);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scrolling To Top With Hidden i 5 Secound -----------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the Scroll to Top button
    const scrollToTopButton = document.getElementById('scroll-to-top-link');
    let isScrolling = false;
    let timer;

    // Function to show or hide the button based on scroll position
    function toggleScrollTopButton() {
        if (window.pageYOffset > 200) {
            scrollToTopButton.classList.add('show');
            resetTimer();
        } else {
            scrollToTopButton.classList.remove('show');
        }
    }

    // Function to reset the timer
    function resetTimer() {
        clearTimeout(timer);
        timer = setTimeout(hideButton, 5000); // Hide button after 5 seconds of inactivity
    }

    // Function to hide the button
    function hideButton() {
        if (!isScrolling) {
            scrollToTopButton.classList.remove('show');
        }
    }

    // Add a scroll event listener to the window
    window.addEventListener('scroll', function () {
        isScrolling = true;
        toggleScrollTopButton();
        resetTimer();
    });

    // Event listener for button click
    scrollToTopButton.addEventListener('click', function () {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling behavior
        });
    });

    // Timer to hide the button after 5 seconds of inactivity
    window.addEventListener('mousemove', function () {
        isScrolling = false;
        resetTimer();
    });

    // Initial call to toggle the button
    toggleScrollTopButton();
});

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling behavior
    });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  -----------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



