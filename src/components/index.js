import $ from 'jquery';
import {Header} from './header/Header.js'
import {Footer} from './footer/Footer.js'
const header = new Header();
const footer = new Footer();
const mainTemplate = `${header.render()}${footer.render()}`

function createApp() {
    $('.body').prepend(
        mainTemplate
    )
    
}

createApp();

