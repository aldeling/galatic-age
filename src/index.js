import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GalaticAge from './galaticAge';

function handleGalaticForm() {
  event.preventDefault();
  const age = document.querySelector('#number').value;
  const galaticAge = new GalaticAge(age);
  document.getElementById('mercury').innerText;
  document.getElementById('venus').innerText;
  document.getElementById('mars').innerText;
  document.getElementById('jupiter').innerText;
}


  document.querySelector("#galatic-form").addEventListener("submit", handleGalaticForm);