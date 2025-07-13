window.addEventListener('scroll', function () {
  const timeline = document.getElementById('timeline');
  const line = document.getElementById('vertical-line');
  const rect = timeline.getBoundingClientRect();

  if (rect.top <= window.innerHeight * 0.75) {
    line.style.height = "100%";
  }
});

