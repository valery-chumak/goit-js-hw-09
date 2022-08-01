import Notiflix from "notiflix";
const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  form: document.querySelector('.form')
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const delayFirst = refs.delay.value;
  const step = refs.step.value;
  const amount = refs.amount.value;
  // console.log(delayFirst, step, amount);

  for (let i = 0; i < amount; i++) {
    let position = i;
    console.log(i);
    let delay = Number(delayFirst) + (i * step);
    console.log("delay", delay);


    const promise = createPromise(position, delay);
      // position += 1;
      promise.then(( position, delay ) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position}`);
        
      }).catch(( position, delay ) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position}`);
        
    })
  }
  event.target.reset();
}

function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    position += 1;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`${position} in ${delay}ms`);
    } else {
        reject(`${position} in ${delay}ms`);
    }
    },delay)
  })
}