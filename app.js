// html Element Access
let startBtn_el = document.querySelector('#startButton');
let stopBtn_el = document.querySelector('#stopButton');
let output_el = document.querySelector('#output');
let resultsList_el = document.querySelector('#resultsList');
let results = [];
let resultCount = 0;
// Initialzing Speech Recognition API
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

// Setting up language
recognition.lang = 'en-US';

// Starting Recording
startBtn_el.addEventListener('click', () => {
  recognition.start();
  startBtn_el.disable = true;
  startBtn_el.innerHTML = 'Listening........';
});

//Stoping Recording

stopBtn_el.addEventListener('click', () => {
  output_el.value = '';
});
recognition.onresult = (event) => {
  const result = event.results[0][0].transcript;
  results.push({ value: result });
  output_el.value = result;

  resultCount++; // Increment the result count

  // Create a new list item with a number and append it to the ordered list
  const listItem = document.createElement('li');
  listItem.textContent = `${resultCount}. ${result}`;
  resultsList_el.appendChild(listItem);
};
recognition.onend = () => {
  startBtn_el.innerHTML = 'Start Recording';
  startBtn_el.disabled = false;
};

console.log(results);