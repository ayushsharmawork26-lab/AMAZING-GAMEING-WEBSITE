const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');
const source = video.querySelector('source');

const movieList = [
    'assets/videos/hero-1.mp4',
    'assets/videos/hero-2.mp4',
    'assets/videos/hero-3.mp4',
    'assets/videos/hero-4.mp4'
];

let index = 0;

nextButton.addEventListener('click', () => {

    index = (index + 1) % movieList.length;

    source.src = movieList[index];

    video.load();
    video.play();

});