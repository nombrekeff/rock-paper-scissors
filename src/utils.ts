export function arrayToReadableListString(array: string[], delimiter: string = ','): string {
  if (array.length === 0) return '';
  if (array.length === 1) return array[0];
  if (array.length === 2) return array[0] + ' and ' + array[1];

  const last = array.pop();
  return array.join(`${delimiter} `) + ' and ' + last;
}
