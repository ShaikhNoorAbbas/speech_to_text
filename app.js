let start_btn_el = document.querySelector("#startButton");
let clear_btn_el = document.querySelector("#stopButton");
let output_el = document.querySelector("#output");
let list_el = document.querySelector("#resultsList");
// Additional variables
let results = [];
let resultCount = 0;

const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

start_btn_el.addEventListener("click", (event) => {
  recognition.start();
  start_btn_el.textContent = "Listening....";
  start_btn_el.disable = true;
});

recognition.onend = () => {
  start_btn_el.textContent = "Start Recording";
  start_btn_el.disable = false;
};

recognition.onresult = (event) => {
  const result = event.results[0][0].transcript;
  output_el.textContent = result;
  results.push({ id: Math.floor(Math.random() * 10), value: result });
  console.log(results);

  // count
  resultCount++;
  const listItem = document.createElement("li");
  listItem.textContent = `${resultCount}. ${result}`;
  list_el.appendChild(listItem);
};

clear_btn_el.addEventListener("click", () => {
  output_el.textContent = "";
});
