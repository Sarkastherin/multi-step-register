let btnStep_1 = document.getElementById('btnStep_1');
let btnStep_2 = document.getElementById('btnStep_2');
let finish = document.getElementById('finish');
let name = document.getElementById('name');
let email = document.getElementById('email');
let stepOne = document.getElementById('stepOne');
let stepTwo = document.getElementById('stepTwo');
let stepThree = document.getElementById('stepThree');
let messageAlert = document.getElementById('messageAlert')
let messageAlertText = document.getElementById('messageAlertText');
let stepLabel = document.querySelector('.step-label');
let stepIconOne = document.getElementById('stepIconOne');
let stepIconTwo = document.getElementById('stepIconTwo');
let stepIconThree = document.getElementById('stepIconThree');
let lastStep = document.getElementById('lastStep')
let total = 3;

function setCountStep(count) {
    stepLabel.innerText = `Step ${count} of ${total}`
}
function nextStep(step1, step2, stepIcon1, stepIcon2, count) {
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
    stepIcon1.classList.remove('active');
    stepIcon1.classList.add('completed')
    stepIcon2.classList.add('active')
    setCountStep(count)
}

btnStep_1.addEventListener('click', nextStepOne);
function nextStepOne(e) {
    e.preventDefault()
    if (name.value && email.value) {
        document.getElementById('nameConfirm').innerText = name.value;
        document.getElementById('emailConfirm').innerText = email.value;
        nextStep(stepOne, stepTwo, stepIconOne, stepIconTwo, 2)
    }
    else {
        let inputsInvalidos = document.querySelectorAll('input:invalid');
        inputsInvalidos.forEach(element => {
            element.classList.add('invalid')
        });
        let inputsValidos = document.querySelectorAll('input:valid');
        inputsValidos.forEach(element => {
            element.classList.remove('invalid')
        });
    }
}

btnStep_2.addEventListener('click', nextStepTwo);
function nextStepTwo(e) {
    e.preventDefault();
    let topicsSelect = document.querySelectorAll('.checkbox-btn:checked');
    if (topicsSelect.length > 0) {
        messageAlert.classList.add('hidden')
        topicsSelect.forEach(element => {
            document.getElementById('topicsConfirm').innerHTML += `
            <li>${element.value}</li>`
        })
        nextStep(stepTwo, stepThree, stepIconTwo, stepIconThree, 3)
    }
    else {
        messageAlertText.innerText = 'You have to select at least one topic'
        messageAlert.classList.remove('hidden')
        console.log()
    }
}
finish.addEventListener('click', confirmSuccess);
function confirmSuccess() {
    stepThree.classList.add('hidden');
    lastStep.classList.remove('hidden')
    
}