import { template } from "lodash";
import $ from "jquery";

import "./header.css";

export class Header {
  render() {
    return template(`
 
      <div class="header-section">
      <div class="header-container">
         <h1 class="title">Книжная полка</h1>
         <button class="btn-add">Добавить книгу</button>
      </div>
      </div>
      `)();
  }
}
