const getCommentsCount = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    count += 1;
  }
  return count;
};

export const displayMeal = (mealInfo) => {
  const ingredients = ['strIngredient1', 'strIngredient2', 'strIngredient3', 'strIngredient4'];
  const measures = ['strMeasure1', 'strMeasure2', 'strMeasure3', 'strMeasure4'];
  const formContainer = document.querySelector('#popupComment');
  const ul = formContainer.querySelector('ul');
  formContainer.querySelector('img').src = mealInfo.strMealThumb;
  formContainer.querySelector('#title').innerHTML = mealInfo.strMeal;
  formContainer.querySelector('#description').innerHTML = mealInfo.strInstructions;
  ul.innerHTML = '';
  ingredients.forEach((ing, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${mealInfo[ing]}: ${mealInfo[measures[index]]}`;
    ul.appendChild(li);
  });
};

export const displayModal = () => {
  document.querySelector('#popupComment').style.display = 'flex';
};

export const hideModal = () => {
  document.querySelector('#popupComment').style.display = 'none';
};

export default getCommentsCount;