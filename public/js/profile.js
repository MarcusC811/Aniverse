const newFormHandler = async (event) => {
    event.preventDefault();
  
    const user = document.querySelector('#').value.trim();
    const watch_list = document.querySelector('#').value.trim();
    const rating = document.querySelector('#').value.trim();
  
    if (user && watch_list && rating) {
      const response = await fetch(`/api/profile`, {
        method: 'POST',
        body: JSON.stringify({ user, watch_list, rating }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create profile');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/profile/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete rating');
      }
    }
  };
  
  // document
  //   .querySelector('.new-rating-form')
  //   .addEventListener('submit', newFormHandler);
  
  // document
  //   .querySelector('.watch-list')
  //   .addEventListener('click', delButtonHandler);
  