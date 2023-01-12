const renderNewPost = async (event) => {
  event.preventDefault();
  document.location.replace('dashboard/new-post');
};

document
  .querySelector('#new-post')
  .addEventListener('click', renderNewPost);


const deletePost = async (event) => {
  event.preventDefault();
  const target = event.target;
  const post_id = target.getAttribute('value');

  const response = await fetch('/api/users/delete-post', {
    method: 'POST',
    body: JSON.stringify({ post_id }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
    console.log(response);
  } else {
    alert(response.statusText);
  }
};

document.querySelectorAll('.delete-post').forEach(item => {
  item.addEventListener('click', deletePost)
});

const editPost = async (event) => {
  event.preventDefault();
  const target = event.target;
  const post_id = target.getAttribute('value');
  console.log(post_id);

  document.location.replace(`/${post_id}`);

};

document.querySelectorAll('.edit-post').forEach(item => {
  item.addEventListener('click', editPost)
});