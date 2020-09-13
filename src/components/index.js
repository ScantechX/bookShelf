import $ from "jquery";
import "../main.css";
import { Header } from "./header/Header.js";
import { Main } from "./main/Main.js";
import { Modal } from "./modal/Modal";

const header = new Header();
const main = new Main();
const modal = new Modal();

const mainTemplate = `${header.render()}${main.render()}`;

function createApp() {
  $("body").prepend(mainTemplate);
  $("body").after(`${modal.render()}`);
  modal.doModalLogic();
}

createApp();
