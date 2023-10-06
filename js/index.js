import service from "./service.js";
import { swipPageTmpl, matchestmpl } from "./template.js";

const app = {};

app.init = async () => {
  const swipPageSection = document.querySelector(".swippage");
  const products = await service.getData();
  let currentIndex = 0;

  const renderProduct = (index) => {
    swipPageSection.innerHTML = swipPageTmpl(products[index], index);

    const nextButton = document.querySelector(".like-button");
    const deleteButton = document.querySelector(".no-like");

    nextButton.addEventListener("click", () => {
      const savedImage = products[currentIndex].image;
      const savedGender = products[currentIndex].gender;

      // Retrieve the existing saved data from localStorage
      let savedData = localStorage.getItem("savedData");

      // If savedData exists, parse it back to an array, otherwise use an empty array
      savedData = savedData ? JSON.parse(savedData) : [];

      // Add the new image and gender to the array
      savedData.push({ image: savedImage, gender: savedGender });

      // Save the updated array back to localStorage, converting it to a string
      localStorage.setItem("savedData", JSON.stringify(savedData));

      products.splice(currentIndex, 1);
      if (products.length === 0) {
        swipPageSection.innerHTML = "No more products";
      } else {
        currentIndex = currentIndex % products.length;
        renderProduct(currentIndex);
      }
    });
  };

  if (swipPageSection && products.length > 0) {
    renderProduct(currentIndex);
  }
  /* Info knap */
  const infoButton = document.getElementById("info-button");
  const hidepopup = document.getElementById("hide-popup");
  const profilePopup = document.getElementById("profile-popup");

  infoButton.addEventListener("click", () => {
    profilePopup.classList.remove("hide");

    infoButton.classList.add("hide");
  });

  hidepopup.addEventListener("click", () => {
    profilePopup.classList.add("hide");

    infoButton.classList.remove("hide");
  });
};

app.init();
