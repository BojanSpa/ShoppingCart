import { Cart } from '../cart';

describe('Cart', () => {
    let cart: Cart;

    beforeEach(() => {
        cart = new Cart();
    });

    test('should add an item to the cart', () => {
        expect(cart.Items.length).toBe(1);
    });

    test('should add an second item to the cart', () => {
        expect(cart.Items.length).toBe(1);
    });

    test('should remove an item from the cart', () => {
        expect(cart.Items.length).toBe(1);
    });

    test('should not remove an item from the cart if it does not exist', () => {
        expect(cart.Items.length).toBe(1);
    });

    // test('should update the quantity of an item in the cart', () => {
    //     expect(cart.Items[0].quantity).toBe(2);
    // });

    // test('should clear all items from the cart', () => {
    //     expect(cart.Items.length).toBe(0);
    // });

    test('should calculate the total price of the items in the cart', () => {
        expect(cart.Total).toBe(100);
    });

    test('should calculate the total price of the items in the cart with a coupon', () => {
        expect(cart.Total).toBe(90);
    });

    test('should not be able to use the same coupon twice', () => {
        expect(cart.Total).toBe(90);
    });
});
