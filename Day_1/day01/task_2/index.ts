function processArray(arr: (string | number)[]): number | string | number[] {

    if (arr.every(item => typeof item === "number")) {
        return arr.reduce((sum, num) => sum + num );
    }


    if (arr.every(item => typeof item === "string")) {
        return arr.join(" ");
    }

    
    return arr.filter(item => typeof item === "number").sort((a,b) => a  - b ) ;
}


console.log(processArray([1, 2, 3, 4])); 
console.log(processArray(["hello", "world", "typescript"])); 
console.log(processArray([10, "apple", 5, "banana", 30])); 
console.log(processArray(["one", 2, "three", 4, 5])); 
