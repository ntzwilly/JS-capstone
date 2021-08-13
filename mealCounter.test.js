/**
 * @jest-environment jsdom
 */

const mealsMock = require("./mockMealCounter");

test("should count the number of meals", async() => {
  const meals = await mealsMock();
  const count = meals.length;

  expect(count).toBe(27);
});
