export interface ArrayMethod {
  name: string
  type: string
  category: string
  syntax: string
  example: string
  result: string
}

export const arrayMethods: ArrayMethod[] = [
  // Search & Test Methods
  {
    name: "includes",
    type: "Instance Method",
    category: "searchAndTest",
    syntax: "array.includes(searchElement, fromIndex)",
    example: `const arr = [1, 2, 3, 4, 5];
const hasThree = arr.includes(3);
const hasSix = arr.includes(6);
console.log(hasThree);
console.log(hasSix);`,
    result: `true
false`,
  },
  {
    name: "indexOf",
    type: "Instance Method",
    category: "searchAndTest",
    syntax: "array.indexOf(searchElement, fromIndex)",
    example: `const arr = [1, 2, 3, 2, 4];
const index = arr.indexOf(2);
console.log(index);`,
    result: `1`,
  },
  {
    name: "lastIndexOf",
    type: "Instance Method",
    category: "searchAndTest",
    syntax: "array.lastIndexOf(searchElement, fromIndex)",
    example: `const arr = [1, 2, 3, 2, 4];
const lastIndex = arr.lastIndexOf(2);
console.log(lastIndex);`,
    result: `3`,
  },
  {
    name: "find",
    type: "Instance Method",
    category: "searchAndTest",
    syntax: "array.find(callback, thisArg)",
    example: `const arr = [1, 2, 3, 4, 5];
const found = arr.find(x => x > 3);
console.log(found);`,
    result: `4`,
  },
  {
    name: "findIndex",
    type: "Instance Method",
    category: "searchAndTest",
    syntax: "array.findIndex(callback, thisArg)",
    example: `const arr = [1, 2, 3, 4, 5];
const index = arr.findIndex(x => x > 3);
console.log(index);`,
    result: `3`,
  },
  {
    name: "some",
    type: "Instance Method",
    category: "searchAndTest",
    syntax: "array.some(callback, thisArg)",
    example: `const arr = [1, 2, 3, 4, 5];
const hasEven = arr.some(x => x % 2 === 0);
console.log(hasEven);`,
    result: `true`,
  },
  {
    name: "every",
    type: "Instance Method",
    category: "searchAndTest",
    syntax: "array.every(callback, thisArg)",
    example: `const arr = [2, 4, 6, 8];
const allEven = arr.every(x => x % 2 === 0);
console.log(allEven);`,
    result: `true`,
  },

  // Transform Methods
  {
    name: "map",
    type: "Instance Method",
    category: "transform",
    syntax: "array.map(callback, thisArg)",
    example: `const arr = [1, 2, 3, 4, 5];
const doubled = arr.map(x => x * 2);
console.log(doubled);`,
    result: `[2, 4, 6, 8, 10]`,
  },
  {
    name: "filter",
    type: "Instance Method",
    category: "transform",
    syntax: "array.filter(callback, thisArg)",
    example: `const arr = [1, 2, 3, 4, 5, 6];
const evens = arr.filter(x => x % 2 === 0);
console.log(evens);`,
    result: `[2, 4, 6]`,
  },
  {
    name: "reduce",
    type: "Instance Method",
    category: "transform",
    syntax: "array.reduce(callback, initialValue)",
    example: `const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);`,
    result: `15`,
  },
  {
    name: "reduceRight",
    type: "Instance Method",
    category: "transform",
    syntax: "array.reduceRight(callback, initialValue)",
    example: `const arr = [1, 2, 3, 4];
const result = arr.reduceRight((acc, curr) => acc + curr, 0);
console.log(result);`,
    result: `10`,
  },
  {
    name: "flat",
    type: "Instance Method",
    category: "transform",
    syntax: "array.flat(depth)",
    example: `const arr = [1, [2, 3], [4, [5, 6]]];
const flattened = arr.flat(2);
console.log(flattened);`,
    result: `[1, 2, 3, 4, 5, 6]`,
  },
  {
    name: "flatMap",
    type: "Instance Method",
    category: "transform",
    syntax: "array.flatMap(callback, thisArg)",
    example: `const arr = [1, 2, 3];
const result = arr.flatMap(x => [x, x * 2]);
console.log(result);`,
    result: `[1, 2, 2, 4, 3, 6]`,
  },

  // Extract Methods
  {
    name: "slice",
    type: "Instance Method",
    category: "extract",
    syntax: "array.slice(start, end)",
    example: `const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(1, 4);
console.log(sliced);`,
    result: `[2, 3, 4]`,
  },
  {
    name: "splice",
    type: "Instance Method",
    category: "extract",
    syntax: "array.splice(start, deleteCount, ...items)",
    example: `const arr = [1, 2, 3, 4, 5];
const removed = arr.splice(1, 2, 'a', 'b');
console.log(arr);
console.log(removed);`,
    result: `[1, "a", "b", 4, 5]
[2, 3]`,
  },

  // Modification Methods
  {
    name: "push",
    type: "Instance Method",
    category: "modify",
    syntax: "array.push(...elements)",
    example: `const arr = [1, 2, 3];
const newLength = arr.push(4, 5);
console.log(arr);
console.log(newLength);`,
    result: `[1, 2, 3, 4, 5]
5`,
  },
  {
    name: "pop",
    type: "Instance Method",
    category: "modify",
    syntax: "array.pop()",
    example: `const arr = [1, 2, 3, 4, 5];
const last = arr.pop();
console.log(arr);
console.log(last);`,
    result: `[1, 2, 3, 4]
5`,
  },
  {
    name: "unshift",
    type: "Instance Method",
    category: "modify",
    syntax: "array.unshift(...elements)",
    example: `const arr = [3, 4, 5];
const newLength = arr.unshift(1, 2);
console.log(arr);
console.log(newLength);`,
    result: `[1, 2, 3, 4, 5]
5`,
  },
  {
    name: "shift",
    type: "Instance Method",
    category: "modify",
    syntax: "array.shift()",
    example: `const arr = [1, 2, 3, 4, 5];
const first = arr.shift();
console.log(arr);
console.log(first);`,
    result: `[2, 3, 4, 5]
1`,
  },
  {
    name: "reverse",
    type: "Instance Method",
    category: "modify",
    syntax: "array.reverse()",
    example: `const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);`,
    result: `[5, 4, 3, 2, 1]`,
  },
  {
    name: "sort",
    type: "Instance Method",
    category: "modify",
    syntax: "array.sort(compareFunction)",
    example: `const arr = [3, 1, 4, 1, 5];
arr.sort((a, b) => a - b);
console.log(arr);`,
    result: `[1, 1, 3, 4, 5]`,
  },
  {
    name: "fill",
    type: "Instance Method",
    category: "modify",
    syntax: "array.fill(value, start, end)",
    example: `const arr = [1, 2, 3, 4, 5];
arr.fill(0, 1, 4);
console.log(arr);`,
    result: `[1, 0, 0, 0, 5]`,
  },
  {
    name: "copyWithin",
    type: "Instance Method",
    category: "modify",
    syntax: "array.copyWithin(target, start, end)",
    example: `const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3, 5);
console.log(arr);`,
    result: `[4, 5, 3, 4, 5]`,
  },

  // Iteration Methods
  {
    name: "forEach",
    type: "Instance Method",
    category: "iteration",
    syntax: "array.forEach(callback, thisArg)",
    example: `const arr = [1, 2, 3];
arr.forEach((item, index) => {
  console.log(\`\${index}: \${item}\`);
});`,
    result: `0: 1
1: 2
2: 3`,
  },
  {
    name: "keys",
    type: "Instance Method",
    category: "iteration",
    syntax: "array.keys()",
    example: `const arr = ['a', 'b', 'c'];
const keys = [...arr.keys()];
console.log(keys);`,
    result: `[0, 1, 2]`,
  },
  {
    name: "values",
    type: "Instance Method",
    category: "iteration",
    syntax: "array.values()",
    example: `const arr = ['a', 'b', 'c'];
const values = [...arr.values()];
console.log(values);`,
    result: `["a", "b", "c"]`,
  },
  {
    name: "entries",
    type: "Instance Method",
    category: "iteration",
    syntax: "array.entries()",
    example: `const arr = ['a', 'b', 'c'];
const entries = [...arr.entries()];
console.log(entries);`,
    result: `[[0, "a"], [1, "b"], [2, "c"]]`,
  },

  // Conversion Methods
  {
    name: "join",
    type: "Instance Method",
    category: "conversion",
    syntax: "array.join(separator)",
    example: `const arr = ['Hello', 'World', 'JavaScript'];
const str = arr.join(' ');
console.log(str);`,
    result: `Hello World JavaScript`,
  },
  {
    name: "toString",
    type: "Instance Method",
    category: "conversion",
    syntax: "array.toString()",
    example: `const arr = [1, 2, 3, 4, 5];
const str = arr.toString();
console.log(str);`,
    result: `1,2,3,4,5`,
  },
  {
    name: "toLocaleString",
    type: "Instance Method",
    category: "conversion",
    syntax: "array.toLocaleString(locales, options)",
    example: `const arr = [1234.56, 7890.12];
const str = arr.toLocaleString('en-US');
console.log(str);`,
    result: `1,234.56,7,890.12`,
  },

  // Static Methods
  {
    name: "from",
    type: "Static Method",
    category: "creation",
    syntax: "Array.from(arrayLike, mapFn, thisArg)",
    example: `const str = 'hello';
const arr = Array.from(str);
console.log(arr);`,
    result: `["h", "e", "l", "l", "o"]`,
  },
  {
    name: "of",
    type: "Static Method",
    category: "creation",
    syntax: "Array.of(...elements)",
    example: `const arr = Array.of(1, 2, 3, 4, 5);
console.log(arr);`,
    result: `[1, 2, 3, 4, 5]`,
  },
  {
    name: "isArray",
    type: "Static Method",
    category: "creation",
    syntax: "Array.isArray(value)",
    example: `const arr = [1, 2, 3];
const notArr = 'hello';
console.log(Array.isArray(arr));
console.log(Array.isArray(notArr));`,
    result: `true
false`,
  },
];
