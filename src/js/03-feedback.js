// // import throttle from 'lodash.throttle';
// const form = document.querySelector('.feedback-form');
// // form.addEventListener('input', throttle(onFormData, 500));
// form.addEventListener('input', onFormData);
// form.addEventListener('submit', onFormSubmit);

// const formData = {};

// function onFormData(e) {
//     formData[e.target.name] = e.target.value;
//     localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    
// }

// function onFormSubmit(e) {
//     e.preventDefault();
//     e.currentTarget.reset();
//     const formElements = e.currentTarget.elements
//     const mail = formElements.email.value
//     const message = formElements.message.value
//     const submitData = {
//         mail,
//         message
//     }
//     console.log(submitData);
// }

//==========

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input')
const message = document.querySelector('.feedback-form textarea')


form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onFormSubmit);

const formData = {};

function onFormData(e) {
    // у formData збираємо данні value під name ( тут у нас email та message)
    formData[e.target.name] = e.target.value; 
    // збергіаємо данні у об'єкт де будуть данні з formData( тобто  email та message )
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));  
}

function onFormSubmit(e) {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state')
    
}

// окрема ф. яке після перезавант надасть данні з локалСторедж
function dataFromLocalStorage() {
    // в окрмему конст - парсимо у данні та через гетАйтем виводимо
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    // перевіряємо, якщо данні є, у email ставимо данніт з savedData.email та так само з message
    if (savedData) {       
        email.value = savedData.email;
        message.value = savedData.message;
    }
 
}