import { postComment } from './api';

// eslint-disable-next-line import/prefer-default-export
export const addNewComment = (e) => {
  e.preventDefault();
  return (async () => {
    try {
      const [nameInput, insightInput] = e.target.querySelectorAll('input');
      const itemId = e.target.getAttribute('data-index');
      const name = nameInput.value;
      const insight = insightInput.value;
      const data = {
        username: name,
        comment: insight,
        item_id: itemId,
      };
      console.log(itemId);
      await postComment(data);
      console.log('Done');
      return true;
    } catch (error) {
      console.log('Error');
      return false;
    }
  })();
};
