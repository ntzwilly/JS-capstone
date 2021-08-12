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
    return comments;
  } catch (error) {
    return error.JSON;
  }
};

const postComment = async (data, itemId) => {
  const res = await fetch(`${USER_DATA_API}?item_id=${itemId}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  });
const response = await res.json()
  return response;
};

export {
  postComment,
  getComments,
};