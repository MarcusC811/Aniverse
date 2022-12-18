const signupBtn = document.querySelector("#signUp-Btn");

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector("#form3Example1c").value.trim();
    const username = document.querySelector("#form3Example3c").value.trim();
    const password = document.querySelector("#form3Example4c").value.trim();
  
    if (name && username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

signupBtn.addEventListener('click', signupFormHandler);