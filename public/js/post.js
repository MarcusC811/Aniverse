const postBtn = document.getElementById('postBtn');

const newPost = async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const complete = document.getElementById('complete').value;
    const linkToWatch = document.getElementById('linkToWatch').value;
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;

    const entry = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({name, rating, complete, linkToWatch, year, genre}),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if(entry.ok) {
        document.location.replace('/');
    } else {
        console.log('try again')
    }
}

postBtn.addEventListener("click", newPost);