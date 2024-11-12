const lightningEffect = document.querySelector('.lightning-effect');
// const thunderAudio = document.getElementById('thunder-audio');

// // Play thunder sound
// thunderAudio.play();

document.addEventListener('click', function() {
  const thunderAudio = document.getElementById('thunder-audio');
  thunderAudio.play();
});

// Array of colors for the lightning effect
const colors = [
  'rgba(255, 255, 255, 0.8)', // White
  'rgba(255, 0, 0, 0.8)',     // Red
  'rgba(255, 0, 255, 0.8)',   // Magenta
  'rgba(255, 0, 255, 0.8)',   // Pink
];

// Function to create random lightning effect with colors
function triggerLightning() {
  // Pick a random color from the array
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Apply the color to the lightning effect
  if (randomColor.startsWith('linear-gradient')) {
    lightningEffect.style.backgroundImage = randomColor;
    lightningEffect.style.background = 'none'; // Reset background color
  } else {
    lightningEffect.style.background = randomColor;
    lightningEffect.style.backgroundImage = 'none'; // Reset background image
  }

  lightningEffect.style.opacity = Math.random() > 0.5 ? 0.8 : 0.6;
  setTimeout(() => {
    lightningEffect.style.opacity = 0;
  }, Math.random() * 200 + 100); // Random duration for flash
}

// Trigger lightning effect at random intervals
setInterval(triggerLightning, Math.random() * 3000 + 1000); // Between 2 to 5 seconds


// Image Positions Changes 

const imageElement = document.getElementById('dynamic-image');

// List of image URLs
const images = [
    'assets/devi.png',
'assets/devi1.png','assets/devi2.png','assets/devi3.png','assets/devi4.png', 'assets/devi5.png', 'assets/devi6.png','assets/devi7.jpg','assets/devi8.jpg',
];

let currentImageIndex = 0;

// Function to change the image
function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Cycle through the images
    imageElement.src = images[currentImageIndex];
}

// Change the image every 3 seconds
setInterval(changeImage, 3000);

