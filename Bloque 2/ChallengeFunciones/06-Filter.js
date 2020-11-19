const arr1 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 0];

filtrar = (arr) => [...new Set(arr)];

console.log(filtrar(arr1));
