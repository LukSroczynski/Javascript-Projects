function placeOrder(orderID) {

    console.log("Customer ID: " + orderID);

    simulateOperation(function () {
        console.log("Done. ID: " + orderID);
    });

}

function simulateOperation(callback) {
    setTimeout(callback, 1000);
}

placeOrder(1);
placeOrder(2);
placeOrder(3);


