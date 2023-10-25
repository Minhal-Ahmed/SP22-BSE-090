const tog = document.querySelectorAll('.faq-toggle')

tog.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

//deletion
const first=document.querySelectorAll('.faq');
first=onclick('remove');

document.getElementsByClassName("faq");

function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.remove("mystyle");
}
















/*const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

*/
