
  const orderButtons = document.querySelectorAll('.order-button');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalClose = document.querySelector('.modal-close');
  const form = document.getElementById('orderForm');
  const submitBtn = form.querySelector('.submit-order');
  const nameInput = form.querySelector('input[name="name"]');
  const phoneInput = form.querySelector('input[name="phone"]');
  const checkbox = form.querySelector('#consent');

  function toggleSubmitButton() {
    if (nameInput.value.trim() && phoneInput.value.trim() && checkbox.checked) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }

  orderButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      modalOverlay.classList.remove('hidden');
    });
  });

  modalClose.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
    form.reset();
    submitBtn.disabled = true;
  });

  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.add('hidden');
      form.reset();
      submitBtn.disabled = true;
    }
  });

  form.addEventListener('input', toggleSubmitButton);

  form.addEventListener('submit', e => {
    e.preventDefault();
    alert("Спасибо за заказ!");
    modalOverlay.classList.add('hidden');
    form.reset();
    submitBtn.disabled = true;
  });

