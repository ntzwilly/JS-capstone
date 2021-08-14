import { postComment } from './api';
import { addComment } from './comments';

const addNewComment = (e) => {
  e.preventDefault();
  return (async () => {
    try {
      const [nameInput, insightInput] = e.target.querySelectorAll('input');
      const itemId = e.target.getAttribute('data-index');
      const name = nameInput.value;
      const insight = insightInput.value;
      if (!name || !insight) {
        return false;
      }
      const data = {
        username: name,
        comment: insight,
        item_id: itemId,
      };
      await postComment(data);
      nameInput.value = '';
      insightInput.value = '';
      return addComment(name, insight);
    } catch (error) {
      return false;
    }
  })();
};
export default addNewComment;