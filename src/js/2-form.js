
let formData = { 
    email: "", 
    message: "" };

const LS_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');

savedData();

feedbackForm.addEventListener('input', onInput);
feedbackForm.addEventListener ('submit', onSubmit);

// Input
function onInput (event) {
const { name, value } = event.target;
formData[name] = value.trim();

localStorage.setItem(LS_KEY, JSON.stringify(formData));
}
// Submit
function onSubmit (event){
    event.preventDefault();

const emailValue = event.target.elements.email.value.trim();
const messageValue = event.target.elements.message.value.trim();

    if (emailValue === '' || messageValue === ''){
alert('Fill please all fields');
return;
    }
    console.log({ email: emailValue, message: messageValue });

feedbackForm.reset();
localStorage.removeItem(LS_KEY);
formData = { email: '', message: '' };
}
// saved data
function savedData (){
const savedData = localStorage.getItem(LS_KEY);

if (!savedData) return;
const parsed = JSON.parse(savedData); 

formData = {
    email: parsed.email ?? '',
    message: parsed.message ?? '',
  };

feedbackForm.elements.email.value = formData.email || '';
feedbackForm.elements.message.value = formData.message || '';
}