document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector("[data-modal]");
  const popup = document.querySelector(".modal");
  const openBtn = document.querySelector("[data-modal-open]");
  const closeBtn = document.querySelector("[data-modal-close]");
  const body = document.body;

  function openPopup() {
    modal.classList.add("active");
    popup.classList.add("active");
    body.classList.add("no-scroll"); 
  }

  function closePopup() {
    modal.classList.remove("active");
    popup.classList.remove("active");
    body.classList.remove("no-scroll"); 
  }

  openBtn.addEventListener("click", openPopup);

  closeBtn.addEventListener("click", closePopup);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closePopup(); 
  });

  document.getElementById('rent-form').addEventListener('submit', function(event) {
    event.preventDefault();
    openPopup();
  });
});
