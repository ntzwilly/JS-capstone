const USER_DATA_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FnxK1bSt3uMGTDmpjc4x/comments';

const getComments = async (itemId) => {
  const response = await fetch(`${USER_DATA_API}?item_id=${itemId}`);
  try {
    const comments = await response.json();
    return comments;
  } catch (error) {
    return [];
  }
};

export const getMeal = async (mealId) => {
  try {
    const response = await fetch(
      `https://themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
    );
    const { meals } = await response.json();
    return meals[0];
  } catch (error) {
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

    const response = await res.json();

    return response;
  } catch (error) {
    return false;
  }
};

export { postComment, getComments };
