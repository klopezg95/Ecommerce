/**
 *  This function calcutes total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total Price checkOut
 */
export const totalPrice = (products) => {
    return products.reduce((acc, product) => acc + product.price * product.quantity, 0)
}