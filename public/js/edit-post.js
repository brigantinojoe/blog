const savePost = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').textContent.trim();
    const content = document.querySelector('#content').textContent.trim();
    const post_id = document.querySelector('#title').getAttribute('value');

    const results = await fetch('/api/users/edit-post', {
        method: 'PUT',
        body: JSON.stringify({ post_id, title, content }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (results.ok) {
        document.location.replace('/dashboard');
        console.log(results);
    } else {
        alert(results.statusText);
    }
};

document.querySelectorAll('#save-post').forEach(item => {
    item.addEventListener('click', savePost)
});