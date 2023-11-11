// переменные
const startBtn = document.querySelector('.start__btn');
const containerResult = document.querySelector('.start__container-result');
const resultJson = containerResult.querySelector('.start__result-json');
const popup = document.querySelector('.popup');
const popupForm = popup.querySelector('.popup__form');
const popupFields = popupForm.querySelectorAll('.popup__field');


// функционал попапа
const openPopup = () => popup.classList.add('popup_active');
const closePopup = () => popup.classList.remove('popup_active');
const closePopupArea = evt => evt.target === popup && closePopup();

// функционал перебора данных и вставки элементов в DOM
const setFieldData = data => {
  popupFields.forEach(item => {
    setElData(item);
    
    data[item.name] = item.value;
  });
}
const setElData = item => {
  const fieldName = item.name;
  const fieldValue = item.value;

  const templateResult = document.querySelector('.template-result').content.cloneNode(true);
  const boxResult = templateResult.querySelector('.start__box-result');
  const resultElName = boxResult.querySelector('.start__result_name');
  const resultElValue = boxResult.querySelector('.start__result_value');

  resultElName.textContent = fieldName;
  resultElValue.textContent = fieldValue;

  containerResult.append(boxResult);
}
const onSubmitFormPopup = evt => {
  evt.preventDefault();

  closePopup();
  containerResult.innerHTML = '';

  let data = {}
  setFieldData(data);

  containerResult.insertAdjacentHTML('beforeend', `
    <p class="start__result-json"></p>
  `);

  const resultJson = containerResult.querySelector('.start__result-json');
  resultJson.textContent = JSON.stringify(data);

  popupForm.reset();
}


// обработчики событий
startBtn.addEventListener('click', openPopup);
popup.addEventListener('click', closePopupArea);
popupForm.addEventListener('submit', onSubmitFormPopup);
