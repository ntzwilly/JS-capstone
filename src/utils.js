const getCommentsCount = (comments) => comments.length || 0;

export const displayMeal = (mealInfo) => {
    console.log(mealInfo)
    const formContainer = document.querySelector('#popupComment');
    formContainer.querySelector('img').src = mealInfo.strMealthumb;
}

export default getCommentsCount;