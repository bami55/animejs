let timeline = anime.timeline({
  easing: 'easeInOutExpo',
  delay: 500,
  autoplay: false,
});

timeline.add({
  targets: '.title',
  opacity: 1,
  scale: 2,
});

timeline.add({
  targets: '.title',
  opacity: 0,
  scale: 0,
});


const startAnimation = () => {
  timeline.play();
};
