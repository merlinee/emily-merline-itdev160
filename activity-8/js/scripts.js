function get(element)
{
  return document.getElementById(element);
}

function openModal()
{
  var modal = get('modal-dialog');
  var backdrop = get('modal-backdrop');

  modal.classList.add('visible');
  backdrop.classList.add('visible');
}

function closeModal()
{
  var title = get('edit-title-text');
  var text = get('edit-content-text');
  var modal = get('modal-dialog');
  var backdrop = get('modal-backdrop');

  title.value = "";
  text.value = "";

  modal.classList.remove('visible');
  backdrop.classList.remove('visible');

}

function saveContent()
{
  var today = new Date();
  var title = get('edit-title-text');
  var text = get('edit-content-text');
  var content = get('display-content');

  var newEntry = document.createElement('div');
  newEntry.className = 'entry';
  var newTitle = document.createElement('h2');
  var newTitleText = document.createTextNode(title.value);
  var newContent = document.createElement('p');
  var newContentText = document.createTextNode(text.value);
  var newDate = document.createElement('p');
  newDate.className = 'date';
  var newDateText = document.createTextNode(today);

  newTitle.appendChild(newTitleText);
  newContent.appendChild(newContentText);
  newDate.appendChild(newDateText);
  newEntry.appendChild(newTitle);
  newEntry.appendChild(newContent);
  newEntry.appendChild(newDate);
  content.appendChild(newEntry);

  closeModal();
}

window.addEventListener('load', function() {
  var newButton = get('new-button');
  var cancelButton = get('cancel-button');
  var saveButton = get('save-button');

  newButton.addEventListener('click', openModal);
  cancelButton.addEventListener('click', closeModal);
  saveButton.addEventListener('click', saveContent);
})
