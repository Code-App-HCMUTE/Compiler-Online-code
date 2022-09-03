import Resize from "./Resizing.js";
import TabControl from "./TabControl.js";
import Editor from "./Editor.js"


import TabHeader from "./TabHeader.js"
const App = {
  variableGlobal: {},
  ClickButton() {
    const buttonLightDark = document.getElementsByClassName("light-drank")[0];

    const addClassActive = () => {
      buttonLightDark.classList.toggle("active");
    };
    buttonLightDark.addEventListener("click", addClassActive);
  },
  dropLanguage() {
    //dropdown language
    const dropDownLanguage = document.querySelectorAll(".drop-down");

    dropDownLanguage[0].onclick = () => {
      dropDownLanguage[0].classList.toggle("active");
    };
    //
    
    dropDownLanguage.forEach((dropdown) => {
      const options = dropdown.querySelectorAll(".dropdown-option div");
      const selected = dropdown.querySelector(".dropdown-textbox");
      options.forEach((option) => {
        option.addEventListener("click", () => {
          selected.placeholder = option.textContent.trim();
          options.forEach((option) => {
            option.classList.remove("active");
          });
          option.classList.add("active");
        });
      });
    });
  },
  tabControlFife() {
    const tabFifes = document.querySelectorAll(".compiler-edit-fife_item");
    TabControl(tabFifes);

    const tabConsoles = document.querySelectorAll(".compiler-console_item--js");
    TabControl(tabConsoles);
  },
  handlerEvent() {

  },
  start() {
    this.ClickButton();
    this.dropLanguage();
    this.tabControlFife();
    Editor();
    Resize();
    TabHeader();
  },
};

App.start();
