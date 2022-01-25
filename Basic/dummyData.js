const shoppingApp = {
  products: [
    {
      title: "Chicken - local",
      id: "ch2",
      price: 300,
      description: "Fresh local pasturised chicken ",
    },
    {
      title: "Chicken - Broiler",
      id: "ch1",
      quantity: 0,
      total: 0,
      price: 200,
      description: "Fresh chicken",
    },
  ],
  cart: {
    items: [
      {
        id: "p1",
        price: 6,
        quantity: 1,
        totalPrice: 6,
        name: "My First Book",
      },
    ],
    totalQuantity: 1,
  },
};

module.exports = shoppingApp;
