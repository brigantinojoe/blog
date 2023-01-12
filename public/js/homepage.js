const fullPost = async (event) => {
    event.preventDefault();
    const post_id = event.target.getAttribute('value');
    console.log(post_id);

    // const results = await fetch(`/comments/${post_id}`, {
    //     method: 'GET',
    //     // body: JSON.stringify({ post_id }),
    //     headers: { 'Content-Type': 'application/json' }
    // });

    // if (results.ok) {
    //     document.location.replace(`/comments/${post_id}`);
    // } else {
    //     alert(results.statusText);
    // }
    document.location.replace(`/comments/${post_id}`);
};

document.querySelectorAll('.comments-button').forEach(item => {
    item.addEventListener('click', fullPost)
});