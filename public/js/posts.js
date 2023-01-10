const renderNewPost = async (event) => {
    event.preventDefault();
    document.location.replace('/new-post');
  };
  
  document
    .querySelector('#new-post')
    .addEventListener('click', renderNewPost);