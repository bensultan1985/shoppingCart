/*////
Shopping Cart Exercise
Version: 1.0.0.0
Updated: 2021-5-29 
Created by: Ben Sultan
////*/

const shopItems = {
    'STAPOT': {
        price: 10.00,
        name: 'Potatoes'
    },
    'STARIC': {
        price: 30.00,
        name: 'Rice'
    },
    'STACOF': {
        price: 14.99,
        name: 'Coffee'
    },
    'MEDNEW': {
        price: 2.99,
        name: 'Newspaper'
    }
};

class ShoppingCart {
    constructor() {
        this.items = {};
    };

    add(item) {
        !this.items[item]? this.items[item] = 1 : this.items[item]++;
    };

    total_amount() {
        let priceTotal = 0;
        for (let item in this.items) {
            let unitPrice = shopItems[item].price;
            let price = unitPrice * this.items[item];
            priceTotal += price;
        };
        /* Number.toFixed(2) returns a string with two decimal places. Instructions specify to
        return a number. Adding "+" before the string converts it back into a number.*/        
        return +priceTotal.toFixed(2);
    };

    items_list() {
        let skuArr = Object.keys(this.items);
        let unsortedArr = [];
        skuArr.forEach(sku => {
            unsortedArr.push(shopItems[sku].name);
        });
        let sortedArr = unsortedArr.sort().join(', ');
        if (sortedArr) return sortedArr; else return 'No items in cart.';
    };
};

module.exports= {ShoppingCart, shopItems};