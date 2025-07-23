// 버튼 클릭으로 wrapper 전환
document.querySelectorAll('button[aria-controls]').forEach(button => {
  button.addEventListener('click', () => {
    const section = button.closest('section');
    const targetId = button.getAttribute('aria-controls');

    section.querySelectorAll('.gallery-wrapper').forEach(wrapper => {
      wrapper.classList.remove('show');
      wrapper.querySelectorAll('.gallery-item').forEach(item => item.classList.remove('active'));
    });

    section.querySelector(`#${targetId}`).classList.add('show');

    section.querySelectorAll('button[aria-controls]').forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
    });
    button.setAttribute('aria-expanded', 'true');
  });
});

// 라이트박스 기능
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxDesc = document.getElementById('lightbox-desc');
const lightboxClose = document.getElementById('lightbox-close');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    lightboxImg.src = item.dataset.image;
    lightboxDesc.textContent = item.dataset.description;
    lightbox.classList.remove('hidden');
  });
});
lightboxClose.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});
