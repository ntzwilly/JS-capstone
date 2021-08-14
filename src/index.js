import addNewComment from './listener';
import './style.css';
import icon from './icon.svg';
import { getLikes, postLikes } from './involvement';
import { getComments, getMeal } from './api';
import { displayComments } from './comments';
import { displayMeal, hideModal, displayModal } from './utils';
import logoImage from './logo.png';

const elementGenerator = (typeName, className) => {
  const element = document.createElement(typeName);
  if (className) element.className = className;
  return element;
};

const formContainer = elementGenerator('div', 'card align-items-center formContainer');
formContainer.id = 'popupComment';

const imgDiv = elementGenerator('div', 'd-flex');
const img = elementGenerator('img');
img.src = 'https://image.winudf.com/v2/image/b3JnLnBlcnNvbmFsLmdhbGF4eXNwYWNlbGl2ZXdhbGxwYXBlcjJfc2NyZWVuXzBfMTUzMTg5OTg0OV8wODY/screen-0.jpg?fakeurl=1&type=.jpg';
img.alt = 'space-img';
img.id = 'figure';
const faTimes = elementGenerator('i', 'fas fa-times ml-5 close-modal');
faTimes.addEventListener('click', hideModal);

const mealName = elementGenerator('h1', 'mt-3');
mealName.id = 'title';
const mealDescription = elementGenerator('p', 'descriptionText');
mealDescription.id = 'description';

const mealList = elementGenerator('ul', 'd-flex list-unstyled mb-0');
const commentCounter = elementGenerator('h4', 'my-2 comment-count');
commentCounter.textContent = 'Comments: ';
const spanCounter = elementGenerator('span');
spanCounter.id = 'c-count';

const commentDisplay = elementGenerator('div', 'c-display mb-2');
commentDisplay.id = 'comments-display';

const addComment = elementGenerator('h4', 'mb-3 text');
addComment.textContent = 'Add a Comment';

const commentForm = elementGenerator('form');
commentForm.id = 'addComment';
const input1 = elementGenerator('input', 'mb-3');
input1.id = 'name-input';
input1.placeholder = 'your name';
input1.type = 'text';
input1.min = '0';
const breakLine1 = elementGenerator('br');
const input2 = elementGenerator('input', 'mb-2');
input2.id = 'comment-input';
input2.placeholder = 'your insights';
input2.type = 'text';
input2.min = '0';
const commentButton = elementGenerator('button', 'btn btn-info submit-button action-button');
commentButton.type = 'submit';
commentButton.textContent = 'Comment';

commentCounter.appendChild(spanCounter);
commentForm.appendChild(input1);
commentForm.appendChild(input2);
commentForm.appendChild(commentButton);
imgDiv.appendChild(img);
imgDiv.appendChild(faTimes);
formContainer.appendChild(imgDiv);
formContainer.appendChild(mealName);
formContainer.appendChild(mealDescription);
formContainer.appendChild(mealList);
formContainer.appendChild(commentCounter);
formContainer.appendChild(commentDisplay);
formContainer.appendChild(addComment);
formContainer.appendChild(commentForm);
formContainer.appendChild(breakLine1);

const root = document.getElementById('root');
root.appendChild(formContainer);

commentForm.addEventListener('submit', addNewComment);
const header = elementGenerator('header');
const logo = elementGenerator('img', 'logo');
logo.src = logoImage;
const navigation = elementGenerator('nav');
const uList = elementGenerator('ul');
const listOne = elementGenerator('li', 'spaceship');
const linkOne = elementGenerator('a');
linkOne.href = '#';

async function mealCounter() {
  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((response) => response.json())
    .then((data) => {
      linkOne.textContent = `Seafood(${data.meals.length})`;
    });
}

mealCounter();

const listTwo = elementGenerator('li', 'nav-font-size');
const linkTwo = elementGenerator('a');
linkTwo.href = '#';
linkTwo.textContent = 'Planets';

const listThree = elementGenerator('li', 'nav-font-size');
const linkThree = elementGenerator('a');
linkThree.href = '#';
linkThree.textContent = 'Races';

listOne.appendChild(linkOne);
listTwo.appendChild(linkTwo);
listThree.appendChild(linkThree);
uList.appendChild(listOne);
uList.appendChild(listTwo);
uList.appendChild(listThree);

navigation.appendChild(uList);

header.appendChild(logo);
header.appendChild(navigation);

const main = elementGenerator('main');

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
  .then((response) => response.json())
  .then((data) => {
    data.meals.forEach((meal, index) => {
      meal = elementGenerator('section');
      const picture = elementGenerator('img', 'image');
      picture.src = data.meals[index].strMealThumb;
      picture.alt = 'space-image';
      meal.id = data.meals[index].idMeal;

      const likes = elementGenerator('div', 'likes');
      const paragraph = elementGenerator('p');
      paragraph.classList.add('width', 'font-size');
      paragraph.textContent = data.meals[index].strMeal;

      const likeCounter = elementGenerator('div', 'like-counter');
      const heart = elementGenerator('img');
      heart.src = icon;
      heart.alt = 'heart-image';

      const like = elementGenerator('p');
      like.classList.add('small');
      like.textContent = ' 0 likes';

      heart.addEventListener('click', async (e, result) => {
        e.preventDefault();
        postLikes(
          'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RgdNHGPFaR65qDly8eoG/likes/',
          {
            item_id: meal.id,
          },
        );

        const prevLikes = like.textContent.split(' ')[0];
        like.innerHTML = `${parseInt(prevLikes, 10) + 1} likes`;
      });

      

      const likes1 = getLikes(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RgdNHGPFaR65qDly8eoG/likes/',
      );

      likes1.then((data) => {
        like.textContent = `${data[index].likes} likes`;
      });

      likeCounter.appendChild(heart);
      likeCounter.appendChild(like);

      likes.appendChild(paragraph);
      likes.appendChild(likeCounter);

      const comments = elementGenerator('button');
      comments.textContent = 'Comments';
      comments.classList.add('font-size');
      comments.addEventListener('click', async (e) => {
        const { id } = e.target.parentElement;
        document.querySelector('#addComment').setAttribute('data-index', id);
        const comments = await getComments(id);
        displayComments(comments);
        const mealInfo = await getMeal(id);
        displayMeal(mealInfo);
        displayModal();
      });

      meal.appendChild(picture);
      meal.appendChild(likes);
      meal.appendChild(comments);

      main.appendChild(meal);
    });
  });

const footer = elementGenerator('footer');
footer.textContent = 'Created By Ade & Willy under CC licence';

root.appendChild(header);
root.appendChild(main);
root.appendChild(footer);
