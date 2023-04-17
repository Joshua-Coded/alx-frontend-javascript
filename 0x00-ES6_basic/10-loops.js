export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    result.push(appendString + value);
  }

  return result;
}
