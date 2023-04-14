(() => {
  const modal = document.querySelector('.js-modal-container');
  const openModalBtn = document.querySelector('.js-open-modal');
  const closeModalBtn = document.querySelector('.js-close-modal');

  const toggleMenu = () => {
    const isModalOpen =
      openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    openModalBtn.setAttribute('aria-expanded', !isModalOpen);
    modal.classList.toggle('is-open');

    const scrollLockMethod = !isModalOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openModalBtn.addEventListener('click', toggleMenu);
  closeModalBtn.addEventListener('click', toggleMenu);
})();