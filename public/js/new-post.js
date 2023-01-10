
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
        console.log(response);
    } else {
        alert(response.statusText);
    }
};

document
    .querySelector('#save-post')
    .addEventListener('click', savePost);

const deletePost = async (event) => {
    event.preventDefault();
    console.log("test");
    document.location.replace('/dashboard');
};

document
    .querySelector('#cancel-post')
    .addEventListener('click', deletePost);  