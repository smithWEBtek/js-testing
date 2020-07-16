const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
  const text1 = generateText('Max', 29)
  expect(text1).toBe('Max (29 years old)')

  const text2 = generateText('Anna', 28)
  expect(text2).toBe('Anna (28 years old)')
})

// checks for false positive
test('should ouput data-less text with empty and null arguments', () => {
  const text1 = generateText('', null);
  expect(text1).toBe(' (null years old)')
})

test('should ouput undefined text with no arguments', () => {
  const text2 = generateText();
  expect(text2).toBe('undefined (undefined years old)')
})

test('validation validates as expected', () => {
  const name = 'Frank'
  const age = 21
  expect(checkAndGenerate(name, age)).toBe(generateText(name, age))
})
