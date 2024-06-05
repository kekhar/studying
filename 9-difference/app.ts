interface IA {
  a: number;
  b: string;
}

interface IB {
  a: number;
  c: boolean;
}

interface IDifference {
  b: string;
}

let a: IA = { a: 5, b: '' };
let b: IB = { a: 10, c: true };

function difference<T extends object, U extends object>(obj1: T, obj2: U): Omit<T, keyof U> {
  const result: Partial<Omit<T, keyof U>> = {};

  for (const key in obj1) {
    if (!(key in obj2)) {
      (result as T)[key] = obj1[key];
    }
  }

  return result as Omit<T, keyof U>;
}

let v0: IDifference = difference(a, b);
console.log(v0);