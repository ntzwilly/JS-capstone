import getCommentsCount from './utils';

export const displayComments = (items = []) => {
  document.querySelector('#comments-display').innerHTML = '';
  document.querySelector('#c-count').innerHTML = getCommentsCount(items);
  items.forEach((element) => {
    document.querySelector('#comments-display').innerHTML += `${element.creation_date} ${element.username}: ${element.comment}</br>`;
  });
};

export const addComment = (name, comment) => {
  const commentsDiv = document.querySelector('#comments-display');
  const newDate = new Date().toLocaleDateString();
  commentsDiv.innerHTML += `${newDate} ${name}: ${comment}`;
  const countSpan = document.querySelector('#c-count');
  const oldCount = countSpan.textContent;
  countSpan.innerHTML = parseInt(oldCount, 10) + 1;
};
