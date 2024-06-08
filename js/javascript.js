

for (let i = 0; i < productos.length; i++) {
    $('#productos').append(
        '<div class="col sc-product-item">' +
        '<div class="card mb-3">' +
        '<img src="img/' + productos[i].foto + '" alt="' + productos[i] + + '" class="card-img-fluid">' +
        '<div class="card-body">' +
        '<h3 class="card-title" data-name="product_image">' + productos[i].nombre + '</h3>' +
        '<p class="card-text" data-name="product_desc">' + productos[i].Descripcion + '</p>' +
        '<p class="card-text">$' + productos[i].precio + '</p>' +
        '  <input name="product_price" value="' + productos[i].precio + '" type="hidden" />' +
        '<input name="product_id" value="' + productos[i] + '" type="hidden" />' +
        '<button class="sc-add-to-cart btn btn-carrito">Agregar</button>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
}



$(document).ready(function () {
    $('#smartcart').smartCart({
        cartItemTemplate: '<h4 class="list-group-item-heading">{product_name}</h4>',
        lang: {
            cartTitle: "Mis productos",
            checkout: 'Pedir',
            clear: 'Borrar',
            subtotal: 'Subtotal:',
            cartRemove: '×',
            cartEmpty: 'Sin productos aún!<br />Elegir carrito'
        }
    });

    function construirMensaje(cart) {
        let mensaje = "Detalles de los productos:\n\n";
        cart.forEach(function (producto, index) {
            mensaje += `Producto ${index + 1}:\n`;
            for (const key in producto) {
                mensaje += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${producto[key]}\n`;
            }
            mensaje += '\n';
        });
        return mensaje;
    }

    // Evento de clic para enviar el mensaje por WhatsApp
    $('#cartSubmitted').on('click', function () {
        const mensaje = construirMensaje(cart);
        const numeroTelefono = "1234567890"; // Reemplaza con el número de teléfono destino
        const mensajeCodificado = encodeURIComponent(mensaje);
        const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${mensajeCodificado}`;

        // Abrir la URL en una nueva pestaña
        window.open(url, '_blank');
    });

});
$(function () {
    $('#myButton').venomButton({
        phone: '5521990000000',
        popupMessage: 'Hello, how can we help you?',
        message: "I'd like to order a pizza",
        showPopup: true,
        position: "right",
        linkButton: false,
        showOnIE: false,
        headerTitle: 'Welcome!',
        headerColor: '#25d366',
        backgroundColor: '#25d366',
        buttonImage: '<img src="svg/whatsapp.svg.svg" >' 
    });

    $('.floating-wpp').floatingWhatsApp({
        phone: 'xxxxxxxxxx',
        popupMessage: 'Popup Message',
        showPopup: true,
        message: 'Message To Send',
        headerTitle: 'Header Title'
    });

    $('#cart').smartCart();
});
