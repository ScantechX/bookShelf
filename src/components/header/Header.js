import $ from 'jquery';
import { template } from 'lodash';
import './header.css'

export class Header{
    render(){
        $('body').prepend(template(`
      <div class="header section">
      <div class="container">
         <h1 class="title">Книжная полка</h1>
         <div class="btn-add">Добавить книгу</div>
      
      </div>
      
      </div>
      `))

        
        
    }
}

