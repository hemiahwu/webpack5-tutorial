import './heading.scss';

class Heading {
  render(page) {
    const h1 = document.createElement('h1');
    const body = document.querySelector('body');
    h1.innerHTML = 'Webpack is awesome ' + page + ".html";
    body.appendChild(h1);
  }
}

export default Heading;
