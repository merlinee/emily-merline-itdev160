// Data, simulate a database response
var data = [
  {
    name: 'atom-beautify',
    description: 'The atom-beautify package will clean up your code, and make it more readable. It has support for a variety of programming languages, including HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C, CoffeeScript, and more. It will only beautify selected text if a selection is found, otherwise the beautify command ^ + ⌥ + b, or typing “Beautify” from the Command Palette will beautify the whole file.',
    image: 'images/beautify.gif',
    author: 'Glavin001',
    url:
      'https://atom.io/packages/atom-beautify',
    downloads: 6022141,
    stars: 5052,
    selector: 'p1'
  },
  {
    name: 'Ask Stack',
    description: 'Hate switching between your browser and the editor? The Ask Stack Overflow package allows you to quickly search Stack Overflow and get code samples directly in the Atom editor. To use, simply type ctrl + alt + a or type “Ask Stack” in the Command Palette.',
    image: 'images/askstack.gif',
    author: 'Chris911',
    url: 'https://atom.io/packages/ask-stack',
    downloads: 87333,
    stars: 293,
    selector: 'p2'
  },
  {
    name: 'Highlight Selected',
    description: 'The Highlight Selected package is super simple, it highlights the current word selected on double click. Especially useful if you’re looking for a particular method name or function within a file without having to open the find panel.',
    image: 'images/highlight.gif',
    author: 'richrace',
    url: 'https://atom.io/packages/highlight-selected',
    downloads: 1716958,
    stars: 3053,
    selector: 'p3'
  }
];

// Package constructor function
function Package(data) {
  this.name = data.name;
  this.description = data.description;
  this.image = data.image;
  this.author = data.author;
  this.url = data.url;
  this.downloads = data.downloads;
  this.stars = data.stars;
  this.selector = data.selector;
}

function getDate() {
  var today = new Date();
  document.getElementById('date').textContent = today.toDateString();
};

/**
 * Write's the package object's data to the appropriate
 * DOM elements utilizing the package selector property.
 * @param  {Package} package  Package object
 * @return {void}
 */

// Function to write package data to page
function writePackageInfo(package) {
  // Get reference to DOM elements
  var selector = package.selector,
    nameEl = document.getElementById(selector + '-name'),
    descEl = document.getElementById(selector + '-description');
    imgEl = document.getElementById(selector + '-image');
    authEl = document.getElementById(selector + '-author');
    urlEl = document.getElementById(selector + '-url');
    downEl = document.getElementById(selector + '-downloads');
    starEl = document.getElementById(selector + '-stars');
  // TODO: get reference to remaining package properties

  // Write package data to DOM elements
  nameEl.textContent = package.name;
  descEl.textContent = package.description;
  imgEl.src = package.image;
  authEl.innerHTML = '<b>Author:</b> ' + package.author;
  urlEl.href = package.url;
  var down = package.downloads;
  downEl.innerHTML = '<b>Downloads:</b> ' + down.toLocaleString();
  var star = package.stars;
  starEl.innerHTML = '<b>Stars:</b> ' + star.toLocaleString();

}



function init() {
  // Write package data
  getDate();


  for (let i = 0; i < data.length; i++) {
    const package = data[i];
    //console.log(package.name);
    writePackageInfo(package);
  }
  }

  //TODO: write other activity requirements

init();
