import Girls from './girls.jpg';

function addImage() {
  const img = document.createElement("img");
  img.alt = "Girls";
  img.width = 300;
  img.src = Girls;
  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;