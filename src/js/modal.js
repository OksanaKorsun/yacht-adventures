document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector("[data-modal]");
  const openBtn = document.querySelector("[data-modal-open]");
  const closeBtn = document.querySelector("[data-modal-close]");
  const body = document.body;

  function openModal() {
    modal.classList.add("active");
    body.classList.add("no-scroll"); 
  }

  function closeModal() {
    modal.classList.remove("active");
    body.classList.remove("no-scroll"); 
  }

  openBtn.addEventListener("click", openModal);

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal(); 
  });

  document.getElementById('rent-form').addEventListener('submit', function(event) {
    event.preventDefault();
    openModal();
  });
});
