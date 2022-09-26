/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }
    // Добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

// function testWebP(callback) {
//     if(!window.createImageBitmap){
//         callback(false);
//         return;
//     }

//     var webpdata = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';

//     return fetch(webpdata).then(function(response){
//         return response.blob();
//     }).then(function(blob){
//         createImageBitmap(blob).then(function(){
//             return callback(true);
//         }, function(){
//             return callback(false);
//         });
//     });
// }

// export function isWebp() {
//     testWebP(function (support) {
//         let className = support === true ? 'webp' : 'no-webp';
//         document.documentElement.classList.add(className);
//     });
// }