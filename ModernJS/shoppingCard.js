// Export module
console.log('Exporting module');

const shippingCost = 10;
const card = [];

export const addToCard = function (product, quantity) {
  card.push({ product, quantity });
  console.log(`${quantity} ${product} added to card`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };

//export default module:
export default function (product, quantity) {
  card.push({ product, quantity });
  console.log(`${quantity} ${product} added to card`);
}
