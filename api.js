const USER_DATA_API = '';
const MY_APP_ID = '';
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
    const response = await fetch(`${USER_DATA_API}apps/${MY_APP_ID}/comments?item_id=${itemId}`);
    try {
      const comments = await response.json();
      return comments;
    } catch (error) {
      return error.JSON;
    }
  };

  const postComment = async (data) => {
    const res = await fetch(`${USER_DATA_API}apps/${MY_APP_ID}/comments`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    });

    return res;
  };

  export {
    postComment,
    getComments,
  };