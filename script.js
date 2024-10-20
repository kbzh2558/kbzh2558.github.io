
const cartItem = document.querySelector('.cart-items-container')
const cartBtn = document.querySelector('#cart-btn')
const navbar = document.querySelector('.navbar')
const menuBtn = document.querySelector('#menu-btn')


cartBtn.addEventListener('click', ()=>{
    cartItem.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem) ){
            cartItem.classList.remove('active');
        }
    })
})

menuBtn.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(navbar) && !e.composedPath().includes(menuBtn) ){
            navbar.classList.remove('active');
        }
    })
})

function calculateAge(birthday) {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

// Update age on page load
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('age').textContent = calculateAge('2004-11-26');
});


// Function to set up modal behavior for both iframe (YouTube) and video (local files)
function setupModal(modalId, btnId, isIframe = false) {
    const modal = document.getElementById(modalId);
    const btn = document.getElementById(btnId);
    const span = modal.querySelector('.close');
    
    // Check if it's an iframe (YouTube embed) or a video tag (local video)
    let mediaElement = isIframe ? modal.querySelector('iframe') : modal.querySelector('video');
    
    let iframeSrc;
    if (isIframe) {
        iframeSrc = mediaElement.src; // Store iframe's original src for resetting later
    }

    // Open the modal when the button is clicked
    btn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        modal.style.display = "block";
    });

    // Close the modal when the close (x) button is clicked
    span.addEventListener('click', function() {
        modal.style.display = "none";
        
        if (isIframe) {
            // For iframe, stop the video by resetting the src
            mediaElement.src = ''; // Clear the iframe src to stop the video
            mediaElement.src = iframeSrc; // Reset the iframe src to the original video URL
        } else {
            // For local video, pause and reset the video
            mediaElement.pause(); // Pause the video
            mediaElement.currentTime = 0; // Reset video to start
        }
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            
            if (isIframe) {
                // For iframe, stop the video by resetting the src
                mediaElement.src = ''; // Clear the iframe src to stop the video
                mediaElement.src = iframeSrc; // Reset the iframe src to the original video URL
            } else {
                // For local video, pause and reset the video
                mediaElement.pause(); // Pause the video
                mediaElement.currentTime = 0; // Reset video to start
            }
        }
    });
}

// Setup modal for the YouTube iframe video (set `isIframe = true`)
setupModal('videoModal1', 'videoBtn1', true);

// Setup modals for local video files (isIframe = false by default)
setupModal('videoModal2', 'videoBtn2');
setupModal('videoModal3', 'videoBtn3');
setupModal('videoModal4', 'videoBtn4');
setupModal('videoModal5', 'videoBtn5');
setupModal('videoModal6', 'videoBtn6');








