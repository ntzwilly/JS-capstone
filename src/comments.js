import { getComments } from './api';
import getCommentsCount from './utils';

export const displayComments = (items) => {
  document.getElementById('comments-display').innerHTML = '';
  document.getElementById('c-count').innerHTML = getCommentsCount(items);
  items.forEach((element) => {
    document.getElementById('comments-display').innerHTML += `${element.creation_date} ${element.username}: ${element.comment}</br>`;
  });
};

export default displayComments;