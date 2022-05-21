import { arrayToReadableListString } from '../src/utils';

test('arrayToReadableListString: []', () => {
  expect(arrayToReadableListString([])).toBe('');
});

test('arrayToReadableListString: ["one"]', () => {
  expect(arrayToReadableListString(['one'])).toBe('one');
});

test('arrayToReadableListString: ["one", "two"]', () => {
  expect(arrayToReadableListString(['one', 'two'])).toBe('one and two');
});

test('arrayToReadableListString: ["one", "two", "three]', () => {
  expect(arrayToReadableListString(['one', 'two', "three"])).toBe('one, two and three');
});
