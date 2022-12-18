const logoutBtn = document.getElementById('logoutBtn');

const logout = async (event) => {
  event.preventDefault();
  
  const logOff = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (logOff.ok) {
    document.location.replace('/');
  } else {
    alert(logOff.statusText);
  }
};
  
logoutBtn.addEventListener('click', logout);