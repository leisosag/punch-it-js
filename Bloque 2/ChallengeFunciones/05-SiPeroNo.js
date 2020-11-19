const arr1 = new Set([5, 1, 2, 3, 4]);
const arr2 = new Set([3, 4]);

filtrar = (arr1, arr2) => new Set([...arr1].filter((n) => !arr2.has(n)));

console.log(filtrar(arr1, arr2));
