var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
     tablink.classList .remove("active-link") ;
    }
    for(tabcontent of tabcontents){
        tabcontent.classList .remove("active-tab") ;
       }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu=document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";

}
function closemenu(){
    sidemenu.style.right = "-200px";

}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzi8g5MDTZ8wq40sdyqLacXTMmpGA6GfYw6wkO4y89Lw4YMNhnKHF16MzgATsamPmuoDA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = " Your Message has been sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""

        } , 5000)
        form.reset()
      } )
      .catch(error => console.error('Error!', error.message))
  })


  
  
  
  // function animateText(id) {
  //   const text = document.getElementById(id);
  //   text.style.animation = 'none';
  //   text.offsetHeight; /* trigger reflow */
  //   text.style.animation = null;
  // }

  document.addEventListener("DOMContentLoaded", function() {
    cycleRoles();
  });
  
  function cycleRoles() {
    const roleElement = document.getElementById("role");
    const roles = ["Web Developer", "UI/UX Designer"];
    let index = 0;
  
    setInterval(function() {
      const roleText = roles[index];
      roleElement.textContent = roleText;
      roleElement.style.color = (roleText === "UI/UX Designer") ? "red" : "white";
      index = (index + 1) % roles.length;
    }, 2000);
  }
  
  
  
  