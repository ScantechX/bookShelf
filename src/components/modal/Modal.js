import { template } from "lodash";
import $ from "jquery";

export class Modal {
  render() {
    return template(
      `<div class="modal">blya<div class='hui'>lol</div></div>`
    )();
  }

  doModalLogic() {
    $(".btn-add").on("click", function() {
      $(".modal").addClass("opened");
    });
    $("body").on("click", event => {
      console.log(event);
      if (
        $(".modal").hasClass("opened") &&
        event.currentTarget.localName === "body"
      ) {
        $(".modal").removeClass("opened");
      }
    });
  }
}

// 1) Создаем папку с модалкой +
// 2) Создаем в папке Modal.js файл modal.css+
// 3) Подключаем jquery / lodash (template) / modal.css
// 4) Пишем export class Modal {}
// 5) Реализуем class Modal / функция render. функция логики
// 6) render ->
// 7) logic ->
// 8) import { Modal } from '.'
// 9) вставляем модалку в верстку.
// 10) вставляем логику

// Element.on("click", function() {
//   // меняем класс модалки
// });
// class Modal {
//   doModalLogic() {
//     // 1)
//   }
//   render() {
//     return template(`<div class='modal'>content</div>`)();
//   }
// }
