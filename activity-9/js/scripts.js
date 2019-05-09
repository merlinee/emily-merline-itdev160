var data = [
  {
    id: 1,
    title: 'Truth',
    body: 'Truth is a matter of the imagination.',
    author: 'Ursula K. LeGuin'
  },
  {
    id: 2,
    title: 'Science',
    body: 'Science is magic that works.',
    author: 'Kurt Vonnegut'
  },
  {
    id: 3,
    title: 'Advertising',
    body: 'Advertising is legalized lying.',
    author: 'H.G. Wells'
  },
  {
    id: 4,
    title: 'Reputation',
    body: 'Reputation is what other people know about you. Honor is what you know about yourself.',
    author: 'Lois McMaster Bujold'
  },
  {
    id: 5,
    title: 'Creativity',
    body: 'Invention, it must be humbly admitted, does not consist in creating out of void, but out of chaos.',
    author: 'Mary Shelley'
  }
]

var $nav = $('#nav-container')
var $intro = $('#intro')
var $posts = $('#post-container')

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
  var author = get('edit-author-text');
  var quote = get('edit-quote-text');
  var modal = get('modal-dialog');
  var backdrop = get('modal-backdrop');

  title.value = "";
  author.value = "";
  quote.value = "";

  modal.classList.remove('visible');
  backdrop.classList.remove('visible');
}

function saveContent()
{
  var quote = new Object();
  quote.id = data.length + 1;
  quote.title = get('edit-title-text').value;
  quote.body = get('edit-quote-text').value;
  quote.author = get('edit-author-text').value;

  data.push(quote);
  addPost(quote);
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

function addPost(dat){
  var postID = 'post-' + dat.id,
  $post = $('<section class="post"></section'),
  $title = $('<h2 class="title"></h2>'),
  $body = $('<p class="quote"></p>'),
  $body = $('<blockquote></blockquote>');
  ($author = $('<span class="author"></span>')), ($navItem = $('<li></li>'))

  $title.text(dat.title)
  $body.text(dat.body)
  $author.text(dat.author)

  $navItem.attr('id', dat.id)
  $navItem.text(dat.title)

  $post.attr('id', postID)
  $post.append($title)
  $post.append($body)
  $post.append($author)

  $posts.append($post)
  $nav.append($navItem)

  $navItem.on('click', function() {
    var id = $(this).attr('id')
    $posts.children().hide()
    $posts.find('#post-' + id).fadeIn()
  })

  $posts.children('.post').hide()
  $intro.fadeIn(1000)
}



function initPosts() {
  for (let dat of data) {
    addPost(dat);
  }
}

initPosts()
