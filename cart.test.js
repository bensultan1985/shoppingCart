const cartjs = require('./cart.js');
const ShoppingCart = cartjs.ShoppingCart;
const shopItems = cartjs.shopItems;

/*/////
1. test .add()
/////*/

test('Add potatoes to cart.', () => {
    const myCart = new ShoppingCart;
    myCart.add('STAPOT');
    expect(myCart.items['STAPOT']).toBe(1);
});

test('Add potatoes to cart twice.', () => {
    const myCart = new ShoppingCart;
    myCart.add('STAPOT');
    myCart.add('STAPOT');
    expect(myCart.items['STAPOT']).toBe(2);
});

test('Add potatoes, rice, and newspaper to cart.', () => {
    const myCart = new ShoppingCart;
    myCart.add('STAPOT');
    myCart.add('STARIC');
    myCart.add('MEDNEW');
    expect(myCart.items['STAPOT']).toBe(1);
    expect(myCart.items['STARIC']).toBe(1);
    expect(myCart.items['MEDNEW']).toBe(1);
});

test('Add random quantity of each item to cart (max. quantity = 9).', () => {
    const myCart = new ShoppingCart;
    //countList records randomized "count" of each item.
    const countList = {};

    for (x in shopItems) {
        let count = Math.floor(Math.random() * 10);
        countList[x] = count;
        for (let i = 0; i < count; i++) myCart.add(x);
    };
    for (x in countList)
    /*items with count = 0 will not appear in cart,
    so items with count = 0 are not checked.*/
    if (countList[x] > 0) expect(myCart.items[x]).toBe(countList[x]);
});

/*/////
2. test .total_amount()
/////*/

test('Add coffee and newspaper to cart. Get total price.', () => {
    const myCart = new ShoppingCart;
    myCart.add('STACOF');
    myCart.add('MEDNEW');
    expect(myCart.total_amount()).toBe(17.98);
});

test('Add 2 potatoes and 3 rice to cart. Get total price.', () => {
    const myCart = new ShoppingCart;
    myCart.add('STAPOT');
    myCart.add('STAPOT');
    myCart.add('STARIC');
    myCart.add('STARIC');
    myCart.add('STARIC');
    expect(myCart.total_amount()).toBe(110.00);
});

test('Get total price of cart with no items.', () => {
    const myCart = new ShoppingCart;
    expect(myCart.total_amount()).toBe(0.00);
});

/*/////
3. test .items_list()
/////*/

test('Add each item to cart. Get items list (in alphabetical order).', () => {
    const myCart = new ShoppingCart;
    myCart.add('STAPOT');
    myCart.add('STARIC');
    myCart.add('STACOF');
    myCart.add('MEDNEW');
    expect(myCart.items_list()).toBe('Coffee, Newspaper, Potatoes, Rice');
});

test('Add some items with different quantities to cart. Get items list (in alphabetical order).', () => {
    const myCart = new ShoppingCart;
    myCart.add('STACOF');
    myCart.add('STACOF');
    myCart.add('MEDNEW');
    myCart.add('STAPOT');
    myCart.add('STACOF');
    myCart.add('MEDNEW');
    expect(myCart.items_list()).toBe('Coffee, Newspaper, Potatoes');
});

test('No items added to cart. Get items list.', () => {
    const myCart = new ShoppingCart;
    expect(myCart.items_list()).toBe('No items in cart.');
});
