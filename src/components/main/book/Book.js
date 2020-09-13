import { template } from "lodash";
import book from '../../../assets/images/jsbook.jpg'
import "./book.css"

export class Book {
  render() {
    return template(`
        <li class="bookshelf-item">
           <div class="bookshelf-item-info">
              <div class="bookshelf-item-img">
                   <img src=${book}/>
              </div>
              <div class="bookshelf-item-details">
                 <span class="author">Жмыха</span>
                 <span class="date">2017</span>
                 

              </div>
           </div>
           <div class="bookshelf-item-buttons">
              <button class="btn-primary delete">Удалить</button>
              <button class="btn-secondary edit">Редактировать</button>
           </div>
        </li>
        `)();
  }
}
