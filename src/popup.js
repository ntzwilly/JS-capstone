const commentPopup = () => (`
<div class="card align-items-center bg-secondary" id="popupComment">
        <div class="d-flex">
            <img src="" alt="space-img" class="">
        <i class="fas fa-times ml-5"></i>
        </div>
        <h1 class="mt-3">Space 3</h1>
        <ul class="d-flex list-unstyled">
        <div class="row">
            <li>fuel: Titanium</li>
            <li>length: 100,000</li>
        </div>

        <div class="row">
            <li>weight: 400</li>
            <li>power: 100,000,000</li>
        </div>
        </ul>
        <h4 class="my-3">Comments()</h4>
        <h4 class="mb-3 text">Add a comment</h4>
          <form id="add-a-score" class="add-a-score-form">
            <input id="name-input" class="score-input border" placeholder="Your name" required type="text" /><br>
            <br>
            <input id="score-input" class="score-input border" placeholder="Your insights" required type="text" min="0" /><br>
            <br>
            <button class="btn btn-info submit-button action-button ml-0" type="submit">
              Comment
            </button>
          </form>
    </div>
`);

const createPopup = () => {
    const comment = document.createElement('div');
    comment.classList.add('position-relative');
    comment.insertAdjacentHTML('beforeend', commentPopup());
    return comment;
  };

  export default createPopup;

