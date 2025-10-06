import type { Translation } from "../types"

export const en: Translation = {
  common: {
    search: "Search methods...",
    run: "Run",
    copy: "Copy",
    copied: "Copied",
    syntax: "Syntax",
    example: "Example",
    result: "Result",
    output: "Output",
    noMethodsFound: "No methods found",
    tryDifferentSearch: "Try a different search term",
    runCodeToSeeOutput: "Run the code to see the output",
    error: "Error",
  },
  header: {
    title: "JavaScript Array Methods",
    subtitle: "Interactive guide to JavaScript array manipulation",
  },
  footer: {
    createdWith: "Made By",
    creatorLink: "https://t.me/devtwitter",
    creatorLinkText: "DevTwitter",
  },
  relatedProjects: {
    title: "Related Projects",
    stringMethods: {
      title: "JavaScript String Methods",
      description: "Explore 40+ JavaScript string manipulation methods with interactive examples and live code playground.",
      demoButton: "Live Demo",
      githubButton: "GitHub Repository",
    },
  },
  playground: {
    title: "Array Methods",
    interactivePlayground: "Interactive Playground",
  },
  categories: {
    searchAndTest: {
      name: "Search & Test",
      description: "Methods for searching and testing array content",
    },
    transform: {
      name: "Transform",
      description: "Methods for transforming array data and structure",
    },
    extract: {
      name: "Extract",
      description: "Methods for extracting parts of arrays",
    },
    modify: {
      name: "Modify",
      description: "Methods for modifying and manipulating arrays",
    },
    iteration: {
      name: "Iteration",
      description: "Methods for iterating over array elements",
    },
    conversion: {
      name: "Conversion",
      description: "Methods for converting arrays to other formats",
    },
  },
  methods: {
    includes: {
      description: "Determines whether an array includes a certain element.",
    },
    indexOf: {
      description: "Returns the first index at which a given element can be found in the array.",
    },
    lastIndexOf: {
      description: "Returns the last index at which a given element can be found in the array.",
    },
    find: {
      description: "Returns the first element in the array that satisfies the provided testing function.",
    },
    findIndex: {
      description: "Returns the index of the first element in the array that satisfies the provided testing function.",
    },
    some: {
      description: "Tests whether at least one element in the array passes the test implemented by the provided function.",
    },
    every: {
      description: "Tests whether all elements in the array pass the test implemented by the provided function.",
    },
    map: {
      description: "Creates a new array with the results of calling a provided function on every element in the calling array.",
    },
    filter: {
      description: "Creates a new array with all elements that pass the test implemented by the provided function.",
    },
    reduce: {
      description: "Executes a reducer function on each element of the array, resulting in a single output value.",
    },
    reduceRight: {
      description: "Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.",
    },
    flat: {
      description: "Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
    },
    flatMap: {
      description: "Returns a new array formed by applying a given callback function to each element of the array, then flattening the result by one level.",
    },
    slice: {
      description: "Returns a shallow copy of a portion of an array into a new array object selected from start to end.",
    },
    splice: {
      description: "Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.",
    },
    push: {
      description: "Adds one or more elements to the end of an array and returns the new length of the array.",
    },
    pop: {
      description: "Removes the last element from an array and returns that element.",
    },
    unshift: {
      description: "Adds one or more elements to the beginning of an array and returns the new length of the array.",
    },
    shift: {
      description: "Removes the first element from an array and returns that removed element.",
    },
    reverse: {
      description: "Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.",
    },
    sort: {
      description: "Sorts the elements of an array in place and returns the sorted array.",
    },
    fill: {
      description: "Changes all elements in an array to a static value, from a start index to an end index.",
    },
    copyWithin: {
      description: "Shallow copies part of an array to another location in the same array and returns it without modifying its length.",
    },
    forEach: {
      description: "Executes a provided function once for each array element.",
    },
    keys: {
      description: "Returns a new Array Iterator object that contains the keys for each index in the array.",
    },
    values: {
      description: "Returns a new Array Iterator object that contains the values for each index in the array.",
    },
    entries: {
      description: "Returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
    },
    join: {
      description: "Creates and returns a new string by concatenating all of the elements in an array.",
    },
    toString: {
      description: "Returns a string representing the specified array and its elements.",
    },
    toLocaleString: {
      description: "Returns a string representing the elements of the array. The elements are converted to strings using their toLocaleString methods.",
    },
    from: {
      description: "Creates a new, shallow-copied Array instance from an array-like or iterable object.",
    },
    of: {
      description: "Creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.",
    },
    isArray: {
      description: "Determines whether the passed value is an Array.",
    },
  },
}
