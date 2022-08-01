import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const refs = {
    startButton: document.querySelector('button[data-start]'),
    datetimePicker: document.querySelector('#datetime-picker'),
    daysValue: document.querySelector('span[data-days]'),
    hoursValue: document.querySelector('span[data-hours]'),
    minutesValue: document.querySelector('span[data-minutes]'),
    secondsValue: document.querySelector('span[data-seconds]')
};
refs.startButton.setAttribute('disabled', '');
let intervalId = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {

    refs.startButton.addEventListener('click', onStartButtonClick);
     if (selectedDates[0] < options.defaultDate) {
      Notiflix.Notify.failure("Please choose a date in the future");
      refs.startButton.setAttribute('disabled', '');
      return;
    }
    refs.startButton.removeAttribute('disabled', '');
    function onStartButtonClick() {
      refs.startButton.setAttribute('disabled', '');
      refs.datetimePicker.setAttribute('disabled', '');
      intervalId = setInterval(() => {
        const dateNow = Date.now();
        const selectedDate = selectedDates[0];
        const dateTimer = selectedDate - dateNow;
        let { days, hours, minutes, seconds } = convertMs(dateTimer);
        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds < 0) {
          clearInterval(intervalId);
          return;
        }
        days = addLeadingZero(days);
        hours = addLeadingZero(hours);
        minutes = addLeadingZero(minutes);
        seconds = addLeadingZero(seconds);

        refs.daysValue.textContent = `${days}`;
        refs.hoursValue.textContent = `${hours}`;
        refs.minutesValue.textContent = `${minutes}`;
        refs.secondsValue.textContent = `${ seconds }`;
        // console.log(`${days}::${hours}::${minutes}::${seconds}`);
        
      },1000)
    }
      
  },
};
flatpickr(refs.datetimePicker, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}