    export const addNewComment = (e) => {
        e.preventDefault();
        const [nameInput, insightInput] = e.target.querySelectorAll('input')
        const name = nameInput.value;
        const insight = insightInput.value;
        const currentDate = new Date().toLocaleDateString();
}
