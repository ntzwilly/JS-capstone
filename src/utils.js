const getCommentsCount = (comments) => comments.length || 0;
const modalForm = document.querySelector('#popupComment');

export const displayMeal = (mealInfo) => {
  console.log(mealInfo, 'meals to display');
  const ingredients = ['strIngredient1', 'strIngredient2', 'strIngredient3', 'strIngredient4'];
  const measures = ['strMeasure1', 'strMeasure2', 'strMeasure3', 'strMeasure4'];
  const formContainer = document.querySelector('#popupComment');
  const ul = formContainer.querySelector('ul');
  formContainer.querySelector('img').src = mealInfo.strMealThumb;
  ingredients.forEach((ing, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${mealInfo[ing]}: ${mealInfo[measures[index + 1]]}`;
    ul.appendChild(li);
  });
};

export const displayModal = () => {
    modalForm.styles.display = "Block";
}

export default getCommentsCount;