function isEnoughCapacity(products, containerSize) {
    let total = 0;
    for (const value of Object.values(products)) {
        total += value;
        if (total > containerSize) {
            return false;
        }

    }
    return true;

}
console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 3 }, 8)
); // true

console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true