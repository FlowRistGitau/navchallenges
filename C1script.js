const navLinks= document.querySelectorAll('header nav a');
navLinks.forEach(function(link){
    link.addEventListener('click',function(){
        document.querySelector('#menu-toggle').checked=false;
    });
});