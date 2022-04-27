window.addEventListener("load", () => {
  autoSlide();
})

function autoSlide() {
  setInterval(() => {
    slide(getItemActiveIndex() + 1);
  }, 3000); // slide speed = 3s
}

function slide(toIndex) {
  const itemsArray = Array.from(document.querySelectorAll(".carousel-item"));
  const itemActive = document.querySelector(".carousel-item-active");

  // Check if toIndex exceeds the number of carousel items
  if(toIndex >= itemsArray.length){
    toIndex = 0;
  }

  const newItemActive = itemsArray[toIndex];

  // Start transition
  newItemActive.classList.add("carousel-item__pos_next");
  setTimeout(() => {
    newItemActive.classList.add("carousel-item__next");
    itemActive.classList.add("carousel-item__next");
  }, 20);

  // remove all transition class and switch active class
  newItemActive.addEventListener("transitionend", () => {
    itemActive.className = "carousel-item";
    newItemActive.className = "carousel-item carousel-item-active";
  }, {
    once: true
  });
}

function getItemActiveIndex() {
  const itemsArray = Array.from(document.querySelectorAll(".carousel-item"));
  const itemActive = document.querySelector(".carousel-item-active");
  const itemActiveIndex = itemsArray.indexOf(itemActive);
  return itemActiveIndex;
}