const currentYear = 2023;
document.querySelector('#year').textContent = currentYear;

let text = document.lastModified;
const date = new Date(document.lastModified);
document.getElementById("currentdate").innerHTML = text;

const input = document.getElementById('chapter');
const addButton = document.getElementById('add-button');
const chapterList = document.getElementById('chapter-list');

addButton.addEventListener('click', function() {
  const chapter = input.value.trim();

  if (chapter !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = chapter;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete-button');

    deleteButton.addEventListener('click', function() {
      li.remove();
      input.focus();
    });

    li.appendChild(deleteButton);
    chapterList.appendChild(li);

    input.value = '';
    input.focus();
  }
});