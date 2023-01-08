const body = document.querySelector("body");
const images = [ "0.jpeg", "1.jpeg", "2.jpeg" ];

const chosenImage = images[Math.floor(Math.random() * images.length)];

body.style.backgroundImage = `url(img/${chosenImage})`;
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";