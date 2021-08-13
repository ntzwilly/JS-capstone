import { postComment } from './api';
import { addComment } from './comments';

export const addNewComment = (e) => {
  e.preventDefault();
  return (async () => {
    try {
      const [nameInput, insightInput] = e.target.querySelectorAll('input');
      const itemId = e.target.getAttribute('data-index');
      const name = nameInput.value;
      const insight = insightInput.value;
      if (!name || !insight) {
        return alert('Name and Comment are required');
      }
      const data = {
        username: name,
        comment: insight,
        item_id: itemId,
      };
      await postComment(data);
      return addComment(name, insight);
    } catch (error) {
      console.log('Error', error);
      return false;
    }
  })();
};
