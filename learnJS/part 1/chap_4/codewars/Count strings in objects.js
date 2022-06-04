//https://www.codewars.com/kata/565b3542af398bfb50000003

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