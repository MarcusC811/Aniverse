const loginBtn = document.querySelector("body > main > section > div > div > div > div > div > button");

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#typeEmailX-2').value.trim();
  const password = document.querySelector('#typePasswordX-2').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

loginBtn.addEventListener('click', loginFormHandler);