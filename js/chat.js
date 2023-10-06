/* add img */

// Retrieve the saved data from local storage
const savedData = JSON.parse(localStorage.getItem("savedData")) || [];

// Get the matches container element
const matchContainer = document.querySelector(".matches");

// Loop through the saved data and create the slide elements
savedData.forEach((data) => {
  // Extract the image URL from the data object
  const imageUrl = data.image;

  // Create the slide element
  const slide = document.createElement("div");
  slide.classList.add("slide");

  // Create the image element
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = "";

  // Append the image to the slide
  slide.appendChild(image);

  // Append the slide to the matches container
  matchContainer.appendChild(slide);
});

/* Chat slider */

const slideBackButton = document.querySelector(".slide-back");
const slideForwardButton = document.querySelector(".slide-forward");
const matchesContainer = document.querySelector(".matches");
const slides = matchesContainer.querySelectorAll(".slide");
let currentIndex = 0;

// Function to hide all slides
const hideAllSlides = () => {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
};

// Function to show two slides at once
const showSlides = (startIndex) => {
  for (let i = startIndex; i < startIndex + 2; i++) {
    slides[i].style.display = "block";
  }
};

// Function to update the slider based on the current index
const updateSlider = () => {
  hideAllSlides();
  showSlides(currentIndex);
};

// Event listener for the slide back button
slideBackButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

// Event listener for the slide forward button
slideForwardButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

// Initial update of the slider
updateSlider();

/* search */

// Function to render the search results
function renderResult(products) {
  const resultContainer = document.querySelector("#result-container");
  resultContainer.innerHTML = "";

  if (products.length === 0) {
    resultContainer.innerHTML = "No results found.";
    return;
  }

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.textContent = product.name;
    resultContainer.appendChild(productElement);
  });
}
