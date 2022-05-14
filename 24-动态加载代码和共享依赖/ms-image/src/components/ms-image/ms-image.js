import Girls from './girls.jpg';
import "./ms-image.scss";
class MsImage {
  render() {
    const img = document.createElement('img');
    img.src = Girls;
    img.alt = 'Girls';
    img.classList.add('ms-image');

    const bodyDomElement = document.querySelector('body');
    bodyDomElement.appendChild(img);
  }
}

export default MsImage;