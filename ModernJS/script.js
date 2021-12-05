// Import module
console.log('Importing module');
// standart way:
import {
  addToCard,
  totalPrice as price,
  totalQuantity,
} from './shoppingCard.js';

addToCard('bread', 5);
console.log(price, totalQuantity);

// import miltyple values/all at same time:
// import * as ShoppingCard from './shoppingCard.js';
// ShoppingCard.addToCard('bread', 4);
// console.log(ShoppingCard.totalPrice);

// import default modul:
import add from './shoppingCard.js';
add('pizza', 2);

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

import 'core-js';
import 'regenerator-runtime/runtime';
