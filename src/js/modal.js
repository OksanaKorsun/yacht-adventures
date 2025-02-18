document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('[data-modal]');
  const closeBtn = document.querySelector('[data-modal-close]');
  const body = document.body;
  const form = document.getElementById('rent-form');
  const nameInput = form.querySelector("[name='username']");
  const modalGreeting = document.querySelector('[data-modal-greeting]');

  function openModal() {
    modal.classList.add('active');
    body.classList.add('no-scroll');
  }

  function closeModal() {
    modal.classList.remove('active');
    body.classList.remove('no-scroll');
  }

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const userName = nameInput.value.trim();

    modalGreeting.textContent = `${userName}, thank you!`;
    setTimeout(() => {
      form.reset();
    }, 300);
    openModal();
  });
});
