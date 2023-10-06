const list = document.querySelectorAll(".accordion");
list.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
  });
});
