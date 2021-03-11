const start = async (el, i) => {
  setTimeout(() => {
    el.classList.add("start");
    startAnimation(el.id)
  }, 150 * i);
}
document.querySelectorAll(".name-plate").forEach((n, i) => {
  start(n, i + 1);
});
