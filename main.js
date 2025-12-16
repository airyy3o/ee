export default {
  onStart() {
    const img = document.createElement("img");
    img.src = "https://i.imgur.com/neaIlwP.png";

    img.style.position = "fixed";
    img.style.width = "56px";
    img.style.height = "56px";
    img.style.top = "200px";
    img.style.left = "40px";
    img.style.zIndex = "9999";
    img.style.cursor = "grab";

    document.body.appendChild(img);
    this.img = img;
  },

  onStop() {
    this.img?.remove();
  }
};
