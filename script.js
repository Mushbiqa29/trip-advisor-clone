// ========== script.js ==========

const hamburger = document.getElementById("hamburger"); const mobileMenu = document.getElementById("mobileMenu"); const tabs = document.querySelectorAll(".tab"); const title = document.getElementById("questionTitle"); const searchInput = document.getElementById("searchInput"); const header = document.querySelector("header"); const searchSection = document.querySelector(".search-section");

// Hamburger Toggle 
hamburger.addEventListener("click", () => { hamburger.classList.toggle("open"); mobileMenu.classList.toggle("show"); });

document.addEventListener("DOMContentLoaded", function () {
  const heading = document.getElementById("questionTitle");
  const searchInput = document.getElementById("searchInput");
  const searchBox = document.querySelector(".search-box");
  const tabButtons = document.querySelectorAll(".tab");

  // Create custom flight search layout
  const flightForm = document.createElement("div");
  flightForm.classList.add("flight-form");
  flightForm.style.display = "none";
  flightForm.innerHTML = `
  <div class="flight-search-bar">
    <div class="flight-input"><i class="fa-solid fa-plane-departure"></i> From: <input type="text" placeholder="Origin" /></div>
    <div class="flight-input"><i class="fa-solid fa-plane-arrival"></i> To: <input type="text" placeholder="Destination" /></div>
    <div class="flight-input"><i class="fa-solid fa-calendar"></i> <input type="text" placeholder="12 Jul → 19 Jul" /></div>
    <div class="flight-input"><i class="fa-solid fa-user"></i> <input type="text" placeholder="1 Traveler" /></div>
    <div class="flight-input"><button class="search-btn">Search</button></div>
  </div>
`;
  document.getElementById("searchSection").appendChild(flightForm);

  tabButtons.forEach(button => {
    button.addEventListener("click", function () {
      // Remove active class from all
      tabButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const text = button.textContent.trim();

      if (text.includes("Search All")) {
        heading.textContent = "Where to?";
        searchInput.placeholder = "Places to go, things to do, hotels...";
        searchBox.style.display = "flex";
        flightForm.style.display = "none";
      } else if (text.includes("Hotels")) {
        heading.textContent = "Stay somewhere great";
        searchInput.placeholder = "Hotel name or destination";
        searchBox.style.display = "flex";
        flightForm.style.display = "none";
      } else if (text.includes("Things to Do")) {
        heading.textContent = "Do something fun";
        searchInput.placeholder = "Attraction, activities, or destination";
        searchBox.style.display = "flex";
        flightForm.style.display = "none";
      } else if (text.includes("Restaurants")) {
        heading.textContent = "Find places to eat";
        searchInput.placeholder = "Restaurants, destination";
        searchBox.style.display = "flex";
        flightForm.style.display = "none";
      } else if (text.includes("Flights")) {
        heading.textContent = "Find the best flight";
        searchBox.style.display = "none";
        flightForm.style.display = "block";
      } else if (text.includes("Holiday Homes")) {
        heading.textContent = "Explore place to rent";
        searchInput.placeholder = "Destination";
        searchBox.style.display = "flex";
        flightForm.style.display = "none";
      }
});
});
});
const images = [
  { src: "images/img1.jpg", caption: "@gf1" },
  { src: "images/img2.jpg", caption: "@gf2" },
  { src: "images/img3.jpg", caption: "@gf3" }
];

let current = 0;
let playing = true;
const imageEl = document.getElementById("carouselImage");
const captionEl = document.getElementById("imageCaption");
const pauseBtn = document.getElementById("pauseBtn");

function showImage(index) {
  imageEl.src = images[index].src;
  captionEl.textContent = images[index].caption;
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

let interval = setInterval(nextImage, 3000); // change every 3 seconds

pauseBtn.addEventListener("click", () => {
  if (playing) {
    clearInterval(interval);
    pauseBtn.textContent = "▶";
  } else {
    interval = setInterval(nextImage, 3000);
    pauseBtn.textContent = "⏸";
  }
  playing=!playing;
});
const cardSlider = document.getElementById("cardSlider");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

rightBtn.addEventListener("click", () => {
  cardSlider.scrollBy({ left: 200, behavior: 'smooth' });
});

leftBtn.addEventListener("click", () => {
  cardSlider.scrollBy({ left: -200, behavior: 'smooth'});
});
const scrollContainer1 = document.getElementById('scroll-container1');
const leftArrow1 = document.getElementById('left-arrow1');
const rightArrow1 = document.getElementById('right-arrow1');
const hearts1 = document.querySelectorAll('.heart1');

hearts1.forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('active');
  });
});

function updateArrows1() {
  const maxScrollLeft = scrollContainer1.scrollWidth - scrollContainer1.clientWidth;
  leftArrow1.classList.toggle('hidden', scrollContainer1.scrollLeft <= 0);
  rightArrow1.classList.toggle('hidden', scrollContainer1.scrollLeft >= maxScrollLeft - 1);
}

leftArrow1.addEventListener('click', () => {
  scrollContainer1.scrollBy({ left: -220, behavior: 'smooth' });
});

rightArrow1.addEventListener('click', () => {
  scrollContainer1.scrollBy({ left: 220, behavior: 'smooth' });
});

scrollContainer1.addEventListener('scroll', updateArrows1);

// Initial check
updateArrows1();
