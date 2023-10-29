import FormValidation from "./formValidation"

describe('My Cart tests', () => {
    test("The addToCart function can add an item to the cart", () => {
      const cart = new FormValidation();
      expect(cart.validateEmail('cheesecake')).toEqual(false);
    });
  })