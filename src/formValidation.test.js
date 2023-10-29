import FormValidation from "./formValidation"

describe('My Cart tests', () => {
    test("The email string is invalid.", () => {
      const cart = new FormValidation();
      expect(cart.validateEmail('invalidEmailstring')).toEqual(false);
    });

    test("The email string is valid", () => {
      const cart = new FormValidation();
      expect(cart.validateEmail('validEmail@gmail.com')).toEqual(true);
    });
  })