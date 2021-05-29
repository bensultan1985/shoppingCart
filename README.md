# Shopping Cart Exercise

This is a simple shopping cart application which contains a shop items list, a shopping cart class, and a test suite. The shopping cart class has three methods: add(), total_amount(), and items_list().

## Installation

Use npm to install Shopping Cart Exercise.
Requires NPM, Node, and Jest.

```bash
npm install
```

## Scripts

```
npm run test // runs test suite script

npm run dev // runs dev script
```

## Next Steps
If the ShoppingCart class were to be used in a full application, I would allow items to be added to the cart in the constructor. Then, when creating an instance of a cart, it can be populated with items from the start. This would be useful, for example when a user logs in to an online supermarket to continue adding to a cart from a previous session.