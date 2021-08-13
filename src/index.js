import './style.css';
import icon from './icon.svg';
import { getLikes, postLikes } from './involvement';

const elementGenerator = (typeName, className) => {
  const element = document.createElement(typeName);
  if (className) element.className = className;
  return element;
};
const header = elementGenerator('header');
const logo = elementGenerator('div', 'logo');
logo.textContent = 'Seafood logo';
const navigation = elementGenerator('nav');
const uList = elementGenerator('ul');
const listOne = elementGenerator('li', 'spaceship');
const linkOne = elementGenerator('a');
linkOne.href = '#';

async function mealCounter() {
  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      linkOne.textContent = `Seafood(${data.meals.length})`;
    });
}

mealCounter();

const listTwo = elementGenerator('li');
const linkTwo = elementGenerator('a');
linkTwo.href = '#';
linkTwo.textContent = 'Planets';

const listThree = elementGenerator('li');
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
          console.log(meal.id)
        )
        result = getLikes(
          'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RgdNHGPFaR65qDly8eoG/likes/',
        );
        result.then((data) => {
          console.log(data)
          like.textContent = `${data[index].likes} likes`;
        });
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

      meal.appendChild(picture);
      meal.appendChild(likes);
      meal.appendChild(comments);

      main.appendChild(meal);
    });
  });

const footer = elementGenerator('footer');
footer.textContent = 'Created By Ade & Willy under CC licence';

const root = document.getElementById('root');

root.appendChild(header);
root.appendChild(main);
root.appendChild(footer);
