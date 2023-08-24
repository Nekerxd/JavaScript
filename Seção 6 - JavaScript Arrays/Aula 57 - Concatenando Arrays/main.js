const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2, [7,8,9], 'Matheus');
console.log(arr3);

// ... rest -> ... spread
const arr4 = [...arr1, ...arr2, ...[7,8,9], 'Matheus'];
console.log(arr4);