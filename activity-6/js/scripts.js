var messages = [];

var messageType = {
  out: 'out-message',
  in: 'in-message',
  unknown: 'unknown-message'
};

function Message(type, user, message, image) {
  this.type = type;
  this.user = user;
  this.message = message;
  this.image = image;
}

function createMessageElement(message, image) {

  var messageEl = document.createElement('div');

  var imageEl = document.createElement('img');
  imageEl.setAttribute('src', image);
  imageEl.setAttribute('alt', 'userpic');
  imageEl.className = 'userimg';
  messageEl.appendChild(imageEl);

  var userEl = document.createElement('div');
  var userName = document.createTextNode(message.user + ": ");
  userEl.appendChild(userName);
  userEl.className = 'username';

  var subMessage = document.createElement('div');
  var messageText = document.createTextNode(message.message);
  subMessage.appendChild(messageText);
  subMessage.className = 'usermsg';

  messageEl.appendChild(userEl);
  messageEl.appendChild(subMessage);
  messageEl.className = message.type;

return messageEl;
}


function addMessageHandler(event) {
  var user, type, image;

  var messageInputEl = document.getElementById('message-input');
  var messageContainerEl = document.getElementById('message-container');

  switch (event.target.id) {
   case 'send-button':
     user = 'Henriette';
     type = messageType.out;
     image = 'images/chicken.png';
     break;
   case 'reply-button':
     user = 'Vivian';
     type = messageType.in;
     image = 'images/fox.PNG';
     break;
   default:
     user = 'unknown';
     type = messageType.unknown;
     break;
 }


 if (messageInputEl.value != '') {

   var message = new Message(type, user, messageInputEl.value);
   messages.push(message);

   var el = createMessageElement(message, image);

   messageContainerEl.appendChild(el);

   messageInputEl.value = '';
 }
}

function init() {
 document.getElementById('send-button').onclick = addMessageHandler;
 document.getElementById('reply-button').onclick = addMessageHandler;

}

init();
