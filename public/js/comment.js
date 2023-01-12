const addComment = async (event) => {
    event.preventDefault();
    const ul = document.querySelector('.list-group');
    const newButton = document.querySelector('#new-comment');
    const saveButton = document.querySelector('#save-comment');
    saveButton.setAttribute('style', 'display:inline-block;');
    newButton.setAttribute('style', 'display:none;');
    ul.appendChild(createBlankItem());
};


document.querySelector('#new-comment').addEventListener('click', addComment);

function createBlankItem() {
    let li = document.createElement('li');
    li.setAttribute('class', 'list-group-item');
    li.setAttribute('contentEditable', 'true');
    li.setAttribute('id', 'text-comment');
    li.textContent = 'Add your new comment here...';
    return li;
}

const saveComment = async (event) => {
    event.preventDefault();
    const content = document.querySelector('#text-comment').textContent;
    const section = document.querySelector('#section').children;
    const post_id = section[0].getAttribute('id');

    const results = await fetch('/api/users/save-comment', {
        method: 'POST',
        body: JSON.stringify({content, post_id}),
        headers: { 'Content-Type': 'application/json' }
    });
    if (results.ok) {
        document.location.replace(`/comments/${post_id}`);
        console.log(results);
    } else {
        document.location.replace(`/login`);
    }
}

document.querySelector('#save-comment').addEventListener('click', saveComment);