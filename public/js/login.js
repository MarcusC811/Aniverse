const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = 
    const password = 
  
    if (email && password) {
      // Send a POST request to the API endpoint /api/users/login
      
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the signup form
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      // Send a POST request the API endpoint /api/users
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  