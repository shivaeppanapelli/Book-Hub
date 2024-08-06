'use strict';



/**
 * add event on element
 */
function displayUploadedBooksInModal() {
  const uploadedBooksSection = document.getElementById('uploadedBooksSection');
  const uploadedBooksList = document.getElementById('uploadedBooksList');
  
  // Assume uploadedBooks is an array containing book details (you need to implement this logic)
  const uploadedBooks = [
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: 'Author 2' },
    // Add more book details as needed
  ];

  // Clear the existing list
  uploadedBooksList.innerHTML = '';

  // Populate the list with uploaded books
  uploadedBooks.forEach((book) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${book.title} by ${book.author}`;
    uploadedBooksList.appendChild(listItem);
  });

  // Show the uploaded books section and the modal
  uploadedBooksSection.style.display = 'block';
  document.getElementById('sellModal').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

const addEventOnelem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnelem(navToggler, 'click', toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnelem(navbarLinks, "click", closeNavbar);



/**
 * header active on scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnelem(window, "scroll", activeHeader);



/**
 * filter tab
 */

const tabCard = document.querySelectorAll("[data-tab-card]");

let lastTabCard = tabCard[0];

const navigateTab = function () {
  lastTabCard.classList.remove("active");
  this.classList.add("active");
  lastTabCard = this;
}

addEventOnelem(tabCard, "click", navigateTab);
