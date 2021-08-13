import { ContextExclusionPlugin } from "webpack";

const USER_DATA_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FnxK1bSt3uMGTDmpjc4x/comments';
// const MY_APP_ID = '';
const postData = async (url) => {
  const response = await fetch(`${USER_DATA_API}${url}`, {
    method: 'POST',
    body: JSON.stringify({}),
    headers: {
      'Content-type': 'application/json',
    },
  });

  return response;
};

const getComments = async (itemId) => {
  const response = await fetch(`${USER_DATA_API}?item_id=${itemId}`);
  try {
    const comments = await response.json();
    return comments.slice(-2);
  } catch (error) {
    return [];
  }
};

export const getMeal = async (mealId) => {
  console.log(mealId)
  try {
    const response = await fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const { meals } = await response.json();
    return meals[0];
  } catch (error) {
    console.log(error)
    return [];
  }
};

const postComment = async (data) => {
    try {
        const res = await fetch(USER_DATA_API, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json',
            },
          });
        const response = await res.json()
          return response;
    } catch (error) {
        return false;
    }
};

export {
  postComment,
  getComments,
};