function evenNums() {
    let evens = [];
    for (let i = 2; i <= 50; i += 2) {
        evens.push(i);
    }
    return evens;
}

module.exports = {evenNums};