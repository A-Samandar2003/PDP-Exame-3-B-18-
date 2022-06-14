
// ✅ input: [1, 1, 2]
// ✅ output: [[1, 1, 2], [1, 2, 1], [2, 1, 1]]

// ✅ input: [1, 2, 3]
// ✅ output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]



function foo(arr = []) {
    let arr1 = [];
    let arr2 = [];

    arr1.push(arr2.sort(() => Math.random() - 0.5));
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            arr2.push(arr[j]);
        }
    }
    return arr1
}




console.log(foo([1, 2, 3]));