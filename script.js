// ── Photo upload ──────────────────────────────────────────────
const avatarBox = document.getElementById('avatarBox');

avatarBox.addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      avatarBox.innerHTML = `<img src="${ev.target.result}" alt="Kgahliso Matsabu">`;
    };
    reader.readAsDataURL(file);
  };
  input.click();
});
// ── LinkedIn link update ───────────────────────────────────────
// When you have your LinkedIn URL, replace the # below:
// const linkedinLink = document.getElementById('linkedinLink');
// linkedinLink.href = 'https://www.linkedin.com/in/YOUR-PROFILE';
// linkedinLink.querySelector('.badge').remove();

// ── Animate skill bars on scroll ─────────────────────────────
const bars = document.querySelectorAll('.bar');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.3 });

bars.forEach(bar => {
  bar.style.animationPlayState = 'paused';
  observer.observe(bar);
});
