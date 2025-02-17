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
