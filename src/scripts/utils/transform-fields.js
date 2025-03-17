function transformFields() {
  const inputArr = document.querySelectorAll('.custom-input__field');

  inputArr.forEach(inputEl => {
    inputEl.addEventListener('input', function (e) {
      if (inputEl.value.trim() !== '') {
        inputEl.classList.add('custom-input__field--focus');
      } else {
        inputEl.classList.remove('custom-input__field--focus');
      }
    });
  });
}

export { transformFields };
