const postBtn = document.getElementById('');

const newPost = async (event) => {
    event.preventDefault();

    const name = document.getElementById('').value;
    const rating = document.getElementById('').value;
    const complete = document.getElementById('').value;
    const linkToWatch = document.getElementById('').value;
    const year = document.getElementById('').value;
    const genre = document.getElementById('').value;

    const entry = await fetch(`/api/post`, {
        method: 'POST',
        body: ({name, rating, complete, linkToWatch, year, genre}),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if(entry.ok) {
        document.location.replace('/profile');
    } else {
        console.log('try again')
    }
}

postBtn.addEventListener("click", newPost);