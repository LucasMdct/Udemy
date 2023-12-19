type filterCallBack = (
  value: unknown,
  index?: number,
  array?: unknown[],
) => boolean;

export function myFilter(
  array: unknown[],
  callbackfn: filterCallBack,
): unknown[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10];

// console.log(array.filter((value) => value < 5))
const arrayFilterOriginal = array.filter((value) => value < 5);

console.log(arrayFilterOriginal);

const myArrayFilter = myFilter(array, (value) => {
  if (typeof value === 'number') return value < 5;
  return false;
});

console.log(myArrayFilter);

// GENERICS

type filterCallBack2<U> = (value: U, index?: number, array?: U[]) => boolean;

export function myFilter2<T>(
  array: T[],
  callbackfn: filterCallBack2<T>,
): unknown[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const myArrayFilter2 = myFilter2(array, (value) => value < 6);

console.log(myArrayFilter2);
