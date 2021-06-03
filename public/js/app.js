window.addEventListener('load', (event) => {
    // const preloader = document.getElementById('preloader');
    // setTimeout(
    //     () =>
    //         document.body.removeChild(preloader),
    //     0
    // );
    const postsImages = document.querySelectorAll('.post-img');
    postsImages.forEach((post) => {
        post.style.backgroundImage = `url(${post.getAttribute('data-img-src')})`;
    });
    const goToAbout = document.getElementById('goToAbout');
    goToAbout.addEventListener('click', (event) => {
        event.preventDefault();
        const about = document.getElementById('about');
        about.scrollIntoView({ behavior: "smooth" });
    });
});