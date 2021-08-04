// $(document).foundation();

// let ball = $(".drag-div");
// ball.onmousedown = function(event) {
//   // (1) preparar para mover: hacerlo absoluto y ponerlo sobre todo con el z-index
//   ball.style.position = 'absolute';
//   ball.style.zIndex = 1000;
//
//   // quitar cualquier padre actual y moverlo directamente a body
//   // para posicionarlo relativo al body
//   document.body.append(ball);
//
//   // centrar la pelota en las coordenadas (pageX, pageY)
//   function moveAt(pageX, pageY) {
//     ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
//     ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
//   }
//
//   // mover nuestra pelota posicionada absolutamente bajo el puntero
//   moveAt(event.pageX, event.pageY);
//
//   function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);
//   }
//
//   // (2) mover la pelota con mousemove
//   document.addEventListener('mousemove', onMouseMove);
//
//   // (3) soltar la pelota, quitar cualquier manejador de eventos innecesario
//   ball.onmouseup = function() {
//     document.removeEventListener('mousemove', onMouseMove);
//     ball.onmouseup = null;
//   };
//
// };
//
// $(document).on('click', '[data-toggle="lightbox"]', function(event) {
//     event.preventDefault();
//     $(this).ekkoLightbox();
// });




console.log('osdñagyfs8oa');
// var connection = new NGSI.Connection("http://192.168.15.118:1026", {
//     ngsi_proxy_url: "https://ngsiproxy.lab.fiware.org"
// });
// connection.v2.listEntities().then((response) => {
//     response.results.forEach((entity) => {
//         let camaras = entity.id;
//         console.log(camaras);
//     });
// });
