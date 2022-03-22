const textArea = document.getElementsByTagName('textarea')[0];
const loadButton = document.getElementById('load');
const saveButton = document.getElementById('save');
const fontSelect = document.getElementsByTagName('select')[0];
const colorSelect = document.getElementsByTagName('select')[1];
const backgroundColorSelect = document.getElementsByTagName('select')[2];
const fontSizeSelect = document.getElementsByTagName('select')[3];

saveButton.addEventListener('click', onSave);
loadButton.addEventListener('click', onLoad);
fontSelect.addEventListener('change', fontManager);
backgroundColorSelect.addEventListener("change", backgroundColorManager); 
colorSelect.addEventListener("change", textColorManager);
fontSizeSelect.addEventListener("change", fontSizeManager);

function fontManager() {
  textArea.style.fontFamily = fontSelect.value;
}

function backgroundColorManager() {
  textArea.style.backgroundColor = backgroundColorSelect.value;
}

function textColorManager() {
  textArea.style.color = colorSelect.value;
}

function fontSizeManager() {
  textArea.style.fontSize = fontSizeSelect.value;
}

function onSave() {
  localStorage.setItem('text', textArea.value);
  localStorage.setItem('font', fontSelect.value);
  localStorage.setItem("backgroundColor", backgroundColorSelect.value);
  localStorage.setItem("color", colorSelect.value);
  localStorage.setItem("fontSize", fontSizeSelect.value);
}

function onLoad() {
  textArea.value = localStorage.getItem('text');
  textArea.style.fontFamily = localStorage.getItem('font');
  textArea.style.color = localStorage.getItem("color");
  textArea.style.backgroundColor = localStorage.getItem("backgroundColor");
  textArea.style.fontSize = localStorage.getItem("fontSize");
}

