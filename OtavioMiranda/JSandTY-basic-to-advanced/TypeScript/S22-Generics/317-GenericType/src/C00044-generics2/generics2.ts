type myType = number;

const arrayNumbers: number[] = [1, 2, 3, 4, 5, 6];
const arrayNumbers2: Array<number> = [1, 2, 3, 4, 5, 6];

console.log(arrayNumbers);
console.log(arrayNumbers2);

async function promiseAsync() {
  return 1;
}

function myPromise(): Promise<myType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((result) => console.log(result + 1));
myPromise().then((result) => console.log(result + 12));
