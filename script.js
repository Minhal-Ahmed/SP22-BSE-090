function toggleActiveClass(element) {
    element.classList.toggle('active');
  }
  
  //will Get all FAQ toggle elements
  const faqToggles = document.querySelectorAll('.faq-toggle');
  
  //event listener to each FAQ toggle element
  faqToggles.forEach(faqToggle => {
    faqToggle.addEventListener('click', () => {
      // Toggle the 'active' class on the FAQ toggle element's parent element
      toggleActiveClass(faqToggle.parentNode);
    });
  });
  
//deletion
function removefaq() {
    var element = document.getElementById('faq');
    element.classList.remove('faq');
}

document.getElementsByClassName("faq");
console.log(removefaq);