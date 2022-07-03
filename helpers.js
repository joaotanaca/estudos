module.exports = ({ length = 5, maxValue = 10 }) => {
    const values = [];
    for (let index = 0; index < length; index++) {
        const value = Math.floor(Math.random() * maxValue) + 1;
        values.push(value);
    }
    return values;
};
