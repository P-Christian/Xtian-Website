const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 300) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
})

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
});

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "chca.parayno.28@gmail.com",
        Password : "06ADCFF6FA97C5B92BF9FD82389F65C56A59",
        To : 'christianparayno27@gmail.com',
        From : "christianparayno27@gmail.com",
        Subject : "New Contact Form Enquiry",
        Body : "Email: " + document.getElementById('email-field').value + "<br> Name: " + document.getElementById('name-field').value + "<br> Message: " + document.getElementById('message').value
    }).then(
      message => alert(message)
    );
}