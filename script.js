window.addEventListener("DOMContentLoaded", function () {
  
  const backdrop_dark = document.createElement("div");
  backdrop1_dark.classList.add("backdrop", "backdrop--dark");

  // const backdrop_light = document.createElement("div");
  // backdrop1_dark.classList.add("backdrop", "backdrop--light");

  const hero_container = document.querySelector(".hero-container");

  if (hero_container) {
    hero_container.appendChild(backdrop_dark);
  }
});


