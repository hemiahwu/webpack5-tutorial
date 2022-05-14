import MsButton from './components/ms-button/ms-button.js';
import MsHeading from './components/ms-heading/heading.js'

const msHeading = new MsHeading();
msHeading.render("ms-button");
const msButton = new MsButton();
msButton.render();

if (process.env.NODE_ENV === "production") {
  console.log("Production mode")
} else if (process.env.NODE_ENV === "development") {
  console.log("Development mode")
}

