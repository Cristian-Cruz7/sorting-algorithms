const prompt = require('prompt-sync')();

function ascendingOrder(arr) {
  const quicksort = (arr) => {

    if (arr.length == 0) return [];
    if (arr.length == 1) return arr;

    let x = Math.floor(arr.length / 2);
    let pivot = arr[x];
    arr.splice(x, 1);

    return [
      ...quicksort(arr.filter(y => y < pivot)),
      pivot,
      ...quicksort(arr.filter(y => y >= pivot))
    ]
  }
  console.log(quicksort(arr))
}

const bubbleSort = (arr, order) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (order === 'asc') {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      } else {
        if (arr[j] < arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }

      }
    }
  }
  return arr;
};



const arr = [];
while (arr.length < 100) {
  arr.push(Math.floor(Math.random() * 100))
}

ascendingOrder(arr);
const ordenado = bubbleSort(arr, 'des');
console.log(ordenado);


/*
const dso = (a,b,c) => {}
function dso2 (a,b,c) {}
*/
