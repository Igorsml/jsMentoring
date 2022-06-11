//https://www.codewars.com/kata/565b3542af398bfb50000003

const obj = {
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
  sixth: undefined,
  seventh: {},
};

const strCount = (obj, counter = 0) => {
  if (Object.keys(obj).length === 0) {
    return counter
  }

  for (value of Object.values(obj)) {
    if (typeof value === 'string') {
      counter += 1
    }

    if (typeof value === 'object' && value !== null) {
      counter = strCount(value, counter)
    }
  }
  return counter
}

console.log('strCount(obj):', strCount(obj))

//deep objects
const obj = {
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
  sixth: undefined,
  seventh: {
    nine: '9',
    deep: {
      moreStr: 'lol',
    }
  },
};

const strCount = (obj, counter = 0) => {
  if (Object.keys(obj).length === 0) {
    return counter
  }

  for (value of Object.values(obj)) {
    if (typeof value === 'string') {
      counter += 1
    }

    if (typeof value === 'object' && value !== null) {
      counter = strCount(value, counter)
    } // покрываем ключи fourth, seventh, nine, deep
  }
  return counter
}

console.log('strCount(obj):', strCount(obj)) // 5
console.log('strCount(obj):', typeof (obj.seventh)) // object