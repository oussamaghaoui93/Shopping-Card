const totalPriceElement = document.querySelector('.total');

function updateTotalPrice() {
    let total = 0;

    // Loop through each card and calculate total price
    document.querySelectorAll('.card').forEach(cardBody => {
        const unitPrice = parseFloat(cardBody.querySelector('.unit-price').innerText.replace(' $', ''));
        const quantity = parseInt(cardBody.querySelector('.quantity').innerText);
        total += unitPrice * quantity;
    });

    totalPriceElement.innerText = `${total} $`;
}

document.querySelectorAll('.fa-plus-circle').forEach(button => {
    button.addEventListener('click', function () {
        const cardBody = this.closest('.card-body');
        const quantityElement = cardBody.querySelector('.quantity');
        let quantity = parseInt(quantityElement.innerText);
        quantityElement.innerText = ++quantity;
        updateTotalPrice();
    });
});

document.querySelectorAll('.fa-minus-circle').forEach(button => {
    button.addEventListener('click', function () {
        const cardBody = this.closest('.card-body');
        const quantityElement = cardBody.querySelector('.quantity');
        let quantity = parseInt(quantityElement.innerText);
        if (quantity > 0) {
            quantityElement.innerText = --quantity;
            updateTotalPrice();
        }
    });
});

