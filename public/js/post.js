window.addEventListener('load', (event) => {
    const post = document.getElementById('post-page-background');
    post.style.backgroundImage = `url(${post.getAttribute('data-img-src')})`;
});