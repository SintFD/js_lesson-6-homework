// 1. Поиск и обрезка массива

function findAndSlice(arr, value) {
  if (arr.indexOf(value) !== -1) {
    return arr.slice(arr.indexOf(value));
  } else {
    return [];
  }
}

// console.log(findAndSlice([1, 2, 3, 4, 5], 3));

// 2. Удаление элементов из массива

function removeItems(arr, startIndex, deleteCount) {
  arr.splice(startIndex, deleteCount);
  return arr;
}

// console.log(removeItems([1, 2, 3, 4, 5], 2, 2));

// 3. Объединение массивов без дубликатов

function mergeUnique(arr1, arr2) {
  let newArr = [...arr1, ...arr2];
  let noRepeatArr = [];

  for (let i = 0; i < newArr.length; i++) {
    if (!noRepeatArr.includes(newArr[i])) {
      noRepeatArr.push(newArr[i]);
    }
  }
  return noRepeatArr;
}

// console.log(mergeUnique([1, 2, 3], [3, 4, 5]));

// 4. Перестановка элементов массива

function swapElements(arr, index1, index2) {
  let newArr = [...arr];
  newArr[index1] = arr[index2];
  newArr[index2] = arr[index1];
  return newArr;
}

// console.log(swapElements([1, 2, 3, 4], 1, 3));

// 5. Разделение массива на подмассивы

function splitArray(arr, size) {
  let newArr = [];

  for (let i = 0; i < arr.length; i = i + size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

// console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3));

// 6. Очередь с использованием push и shift

function queueOperations(arr, element) {
  arr.shift();
  arr.push(element);
  return arr;
}

// console.log(queueOperations([1, 2, 3], 4));

// 7. Реверс массива с использованием push и pop

function reverseArray(arr) {
  let firstArr = [...arr];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(firstArr.pop());
  }
  return newArr;
}

console.log(reverseArray([1, 2, 3, 4]));
