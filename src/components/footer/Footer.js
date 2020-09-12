import $ from 'jquery';
import { template } from 'lodash';
import './Footer.css'

export class Footer{
    render(){
        $('body').append(template(`
        <section class="section">
           <ul class="container">
               <li class="bookshelf-item">
                  <div class="bookshelf-item-img"></div>
                  <div class="bookshelf-item-info">
                     <h2 class="item-title">Javascript</h2>
                     <p>Автор:Жмыха</p>
                     <p>2017г.</p>
                  </div>
                  <div class="bookshelf-item-btn">
                     <button class="btn-del btn">Удалить</button>
                     <button class="btn-edit btn">Редактировать</button>
                  </div>

               
               </li>
               <li class="bookshelf-item">
               <div class="bookshelf-item-img"></div>
               <div class="bookshelf-item-info">
                  <h2 class="item-title">Javascript</h2>
                  <p>Автор:Жмыха</p>
                  <p>2017г.</p>
               </div>
               <div class="bookshelf-item-btn">
                  <button class="btn-del btn">Удалить</button>
                  <button class="btn-edit btn">Редактировать</button>
               </div>

            
            </li>
            <li class="bookshelf-item">
            <div class="bookshelf-item-img"></div>
            <div class="bookshelf-item-info">
               <h2 class="item-title">Javascript</h2>
               <p>Автор:Жмыха</p>
               <p>2017г.</p>
            </div>
            <div class="bookshelf-item-btn">
               <button class="btn-del btn">Удалить</button>
               <button class="btn-edit btn">Редактировать</button>
            </div>

         
         </li>

           </ul>
        
        
        </section>
      `))
        
        
    }
}