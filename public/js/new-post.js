
const savePost = async (event) => {
    const title = document.querySelector('#title').textContent.trim();
    const content = document.querySelector('#content').textContent.trim();
    event.preventDefault();
    const response = await fetch('/api/users/save-post', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document
    .querySelector('#save-post')
    .addEventListener('click', savePost);

const deletePost = async (event) => {
    event.preventDefault();
    document.location.replace('/dashboard');
};

document
    .querySelector('#cancel-post')
    .addEventListener('click', deletePost);  