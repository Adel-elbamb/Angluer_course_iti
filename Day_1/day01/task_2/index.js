function processArray(arr) {
    if (arr.every(function (item) { return typeof item === "number"; })) {
        return arr.reduce(function (sum, num) { return sum + num; });
    }
    if (arr.every(function (item) { return typeof item === "string"; })) {
        return arr.join(" ");
    }
    return arr.filter(function (item) { return typeof item === "number"; }).sort(function (a, b) { return a - b; });
}
console.log(processArray([1, 2, 3, 4])); // 10
console.log(processArray(["hello", "world", "typescript"]));
console.log(processArray([10, "apple", 5, "banana", 30]));
console.log(processArray(["one", 2, "three", 4, 5]));
