import './style.css';


// function openForm() {
//   document.getElementById("popupComment").style.display = "block";
// }
// closeForm.addEventListener('click', (e) => {
//   e.preventDefault();
//   popupComment.style.display = 'none';
//   overlay.classList.remove('active');
// });


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
const faTimes = elementGenerator('i', 'fas fa-times ml-5');

const mealName = elementGenerator('h1', 'mt-3');
mealName.id = 'title';
const mealDescription = elementGenerator('p');
mealDescription.id = 'description';

const mealList = elementGenerator('ul', 'd-flex list-unstyled');
const listContainer1 = elementGenerator('div', 'row');
const listItem1 = elementGenerator('li');
listItem1.textContent = 'fuel: Titanium';
const listItem2 = elementGenerator('li')
listItem2.textContent = 'fuel: Titanium';

const listContainer2 = elementGenerator('div', 'row');
const listItem3 = elementGenerator('li');
listItem3.textContent = 'fuel: Beans';
const listItem4 = elementGenerator('li')
listItem4.textContent = 'fuel: beans';

const commentCounter = elementGenerator('h4', 'my-3 comment-count');
commentCounter.textContent = 'Comments';
const spanCounter = elementGenerator('span');
spanCounter.id = 'c-count';

const commentDisplay = elementGenerator('div');
commentDisplay.id = 'comments-display';


const addComment = elementGenerator('h4', 'mb-3 text');
addComment.textContent = 'Add a Comment';

const commentForm = elementGenerator('form');
commentForm.id = 'addComment';
const input1 = elementGenerator('input', 'mb-4');
input1.id = 'name-input';
input1.placeholder = 'your name';
input1.type = 'text';
input1.min = '0';
const breakLine1 = elementGenerator('br');
const input2 = elementGenerator('input', 'mb-4');
input2.id = 'comment-input';
input2.placeholder = 'your insights';
input2.type = 'text';
input2.min = '0';
const commentButton = elementGenerator('button', 'btn btn-info submit-button action-button ml-0');
commentButton.type = 'submit';
commentButton.textContent = 'Comment';




commentCounter.appendChild(spanCounter);
commentForm.appendChild(input1);
commentForm.appendChild(input2);
commentForm.appendChild(commentButton);
listContainer1.appendChild(listItem1);
listContainer1.appendChild(listItem2);
mealList.appendChild(listContainer1);
listContainer2.appendChild(listItem3);
listContainer2.appendChild(listItem4);
mealList.appendChild(listContainer2);
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
console.log(root);



// btnComment.addEventListener('click', (e) => {
//   e.preventDefault();

//   currentItemIndex = index;
//   currentItemId = firstTitle[index].id;

//   document.getElementById('figure').src = ele.i.imageUrl;
//   document.getElementById('title').innerHTML = ele.l;
//   document.getElementById('description').innerHTML = ele.s;
//   popupComment.style.display = 'block';
//   overlay.classList.add('active');
//   displayComments(firstTitle[index]);
// });

// const clearFields = () => {
//   document.querySelector('#name-input').value = '';
//   document.querySelector('#comment-input').value = '';
// };

// overlay.addEventListener('click', (e) => {
//   e.preventDefault();
//   popupComment.style.display = 'none';
//   overlay.classList.remove('active');
// });