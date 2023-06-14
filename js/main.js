const modal = document.getElementById('modal_id');
const btn = document.getElementById('openModalBtn');
const btn2 = document.getElementById('openModalBtn2');
const span = document.getElementsByClassName('closeModal');
const body = document.getElementsByTagName('body')[0];

// Open the modal when the first button is clicked
btn.onclick = function() {
    modal.classList.add('modal_open');
    modal.style.display = 'block';
    body.style.overflow = 'hidden';
};

// Open the modal when the second button is clicked
btn2.onclick = function() {
    modal.classList.add('modal_open');
    modal.style.display = 'block';
    body.style.overflow = 'hidden';
};

// Close the modal when the <span> (x) is clicked
span[0].onclick = function() {
    modal.style.display = 'none';
    modal.classList.remove('modal_open');
    body.style.overflow = 'auto';
};

// Close the modal when clicked outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        modal.classList.remove('modal_open');
        body.style.overflow = 'auto';
    }
};


// Add an event listener to the scroll-to-top button
document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Show or hide the scroll-to-top button based on scroll position
  window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });