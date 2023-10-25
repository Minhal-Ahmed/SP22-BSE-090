const tog = document.querySelectorAll('.faq-toggle')

tog.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })

});

//deletion
function removefaq() {
    var element = document.getElementById('faq');
    element.classList.remove('faq');
}

document.getElementsByClassName("faq");
console.log(removefaq);