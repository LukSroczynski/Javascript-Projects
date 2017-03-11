/**
 * Created by user on 21.02.2017.
 */
"use strict"

const SPENDING_THRESHOLD = 550;
const TAX_RATE = 0.05;
const PHONE_PRICE = 40;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 754.32;
var amount = 0;

function calculateTax(amount) {
    return amount * TAX_RATE;
}

function formatAmount(amount) {
    return "$" + amount.toFixed( 2 );
}

while (amount < bank_balance) {
    amount = amount + PHONE_PRICE;

    if (amount < SPENDING_THRESHOLD) {
        amount = amount + ACCESSORY_PRICE;
    }
}

amount = amount + calculateTax( amount );

console.log(
    "Your purchase: " + formatAmount( amount )
);

if (amount > bank_balance) {
    console.log(
        "Not enough cash.."
    );
}