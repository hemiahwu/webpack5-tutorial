import MsHeading from './components/ms-heading/heading.js'
import MsImage from './components/ms-image/ms-image.js'

const msHeading = new MsHeading();
msHeading.render("ms-image");

const msImage = new MsImage();
msImage.render();

// 调用ms-button-app下的功能
import("MsButtonApp/MsButton")
  .then(MsButtonModule => {
    const MsButton = MsButtonModule.default;
    const msButton = new MsButton();
    msButton.render();
  })