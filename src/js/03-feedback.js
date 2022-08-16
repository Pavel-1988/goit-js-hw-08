import throttle from 'lodash.throttle'
const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input')
const message = document.querySelector('.feedback-form textarea')

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onFormSubmit);

const formData = {};

const STORAGE_KEY = 'feedback-form-state';

function onFormData(e) {
    // у formData збираємо данні value під name ( тут у нас email та message)
    formData[e.target.name] = e.target.value; 
    // збергіаємо данні у об'єкт де будуть данні з formData( тобто  email та message )
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));     
}

function onFormSubmit(e) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
    
}

// окрема ф. яке після перезавант надасть данні з локалСторедж
function dataFromLocalStorage() {
    // в окрмему конст - парсимо у данні та через гетАйтем виводимо
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    // перевіряємо, якщо данні є, у email ставимо данніт з savedData.email та так само з message
    if (savedData) {       
        email.value = savedData.email;
        message.value = savedData.message;
    }
}
dataFromLocalStorage()