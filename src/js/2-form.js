const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// объект вне функций
let formData = {
  email: '',
  message: '',
};

// загрузка данных из localStorage при старте
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  formData = JSON.parse(savedData);

  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

// делегирование input
form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (!name) return;

  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// submit формы
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  // очистка
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});