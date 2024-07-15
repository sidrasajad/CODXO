// ==================== Typed Animation ======================= //
var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'Web Designer', 'Web Developer.'],
    typeSpeed: 50,
});

// ==================== About ======================= //
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ==================== Side Menu ======================= //
var sidemenu = document.getElementById("sidemenu");

function openmenu()
{
    sidemenu.style.right = "0";
}
function closemenu()
{
    sidemenu.style.right = "-200px";
}

// ==================== Contact Form ======================= //
const scriptURL = 'https://script.google.com/macros/s/AKfycby9rtRfwmf2xVtXJAjnmora_tvcYFMSz3p8HkT5XmbnCy1Px_Q-A7Z9ZI51yJE1p9voMQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => 
{
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => 
        {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function() {
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
    .catch(error => 
        {
            msg.innerHTML = "There was an error in sending the message."
            console.error('Error!', error.message)
        })
})