/**
 * @jest-environment jsdom
 */

const mealsMock = require('../__mocks__/mockMealCounter');

test('Should count the number of meals', async () => {
  const meals = await mealsMock();
  const count = meals.length;

  expect(count).toBe(27);
});
