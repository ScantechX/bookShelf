import { template } from "lodash";
import "./main.css";
import { Book } from "./book/Book.js";

export class Main {
  render() {
    return template(`
        <main class="main-section">
           <ul class="main-container">
           ${new Book().render()}
              
              
           </ul>
        </main>
        `)();
  }
}
