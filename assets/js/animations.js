

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Feat Animation--------------------------------------------------- -------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to check feature visibility when the user scrolls
function checkFeatureVisibility() {
    // Get all feature elements
    const featureElements = document.querySelectorAll('.feat');

    // Iterate through each feature element
    featureElements.forEach(element => {
        // Check if the element is in the viewport
        if (isInViewport(element)) {
            // Add class to show the element
            element.classList.add('feat-show');
        } else {
            // Remove class to hide the element
            element.classList.remove('feat-show');
        }
    });
}

// Check feature visibility when the user scrolls
window.addEventListener('scroll', checkFeatureVisibility);

// Trigger the visibility check on page load
checkFeatureVisibility();


/** ANOTHER SCRIPT ANIMATION 
 
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to check feat visibility when the user scrolls
function checkFeatVisibility() {
    // Get all feat elements
    const featElements = document.querySelectorAll('.feat');

    // Iterate through each feat element
    featElements.forEach(element => {
        // Check if the element is in the viewport
        if (isInViewport(element)) {
            // Add class to show the element
            element.classList.add('feat-show');
        } else {
            // Remove class to hide the element
            element.classList.remove('feat-show');
        }
    });
}

// Check feat visibility when the user scrolls
window.addEventListener('scroll', checkFeatVisibility);

// Trigger the visibility check on page load
checkFeatVisibility();


 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Design Guide  Animation--------------------------------------------------- ----------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*  WITHOUT SCROLLING   ---------------------------------------------------------
// Callback function for the Intersection Observer
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('feat-show');
        }
    });
}

// Create a new Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 // Trigger when at least 50% of the element is visible
});

// Get all design guiding features
const guideFeatures = document.querySelectorAll('.design-guiding-feat');

// Observe each design guiding feature
guideFeatures.forEach(feature => {
    observer.observe(feature);
});

*/


// WITH SCROLLING-----------------------------------------------------
// Callback function for the Intersection Observer
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('feat-show');
        } else {
            entry.target.classList.remove('feat-show');
        }
    });
}

// Create a new Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 // Trigger when at least 50% of the element is visible
});

// Get all design guiding features
const guideFeatures = document.querySelectorAll('.design-guiding-feature ');

// Observe each design guiding feature
guideFeatures.forEach(feature => {
    observer.observe(feature);
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                         --------------------------------------------------- ----------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
