const startAnimation = targetId => {
  let timeline = anime.timeline({
    easing: 'easeInOutExpo',
    delay: 500,
  });
  
  timeline.add({
    targets: `#${targetId}.name-plate .hover`,
    width: [
      { value: '100%' },
      { value: 0 },
    ],
    translateX: [
      { value: 0 },
      { value: -290 },
    ],
  });
  
  timeline.add({
    targets: `#${targetId}.name-plate .text`,
    opacity: 1,
  }, -50);
};
