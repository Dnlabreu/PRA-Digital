var zoomImg = function () {
  // Clone image
  var clone = this.cloneNode ();
  clone.classList.remove("zoom");

  // Apend EVIL clone
  var lb = document.getElementById("lbInner");
  lb.innerHTML = "";
  lb.appendChild(clone);

  //Show
  lb = document.getElementById("lbOuter");
  lb.classList.add("show");
};

window.addEventListener("load", function () {
  // On click images
  var images = document.getElementsByClassName ("zoom");
  if (images.length > 0) {
    for (let img of images) {
      img.addEventListener("click", zoomImg);
    }
  }

  // Close overlay
  document.getElementById("lbOuter").addEventListener("click", function () {
    this.classList.remove("show");
  });
});