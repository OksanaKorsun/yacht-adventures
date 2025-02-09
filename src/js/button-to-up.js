document.addEventListener("DOMContentLoaded", function() {
  window.onscroll = () => {
    toggleTopButton();
  };

  document.getElementById('back-to-up').addEventListener('click', scrollToTop);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleTopButton() {
    if (document.documentElement.scrollTop > 87) {
      document.getElementById('back-to-up').classList.add('active');
    } else {
      document.getElementById('back-to-up').classList.remove('active');
    }
  }
});
