var TAX_RATE = 0.08;
var PHONE_PRICE = 99.99;
var ACCESSORY_PRICE = 9.99;
var SPENDING_THRESHOLD = 200;
var BANK_ACCOUNT_BALANCE = 303.91;

function calculateTotPrice()
{
    var tot = 0;
    while(tot + PHONE_PRICE < BANK_ACCOUNT_BALANCE){
        tot += PHONE_PRICE;
        if(SPENDING_THRESHOLD > tot){
            tot += ACCESSORY_PRICE;
        }
    }
    return tot;
}

function calculateTax(total)
{
    return total = total * TAX_RATE + total;
}

function PrintPrice(){
    console.log("$" + totalPrice.toFixed(2));
}


var totalPrice = calculateTotPrice();
totalPrice = calculateTax(totalPrice);
PrintPrice();


if(totalPrice <= BANK_ACCOUNT_BALANCE){
    console.log("Buy");
}
else{
    console.log("Not buy");
}