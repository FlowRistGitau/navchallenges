const navLinks= document.querySelectorAll('header nav a');
const sections= document.querySelectorAll('section,footer')

const options={ 
    threshold:0.4
};

const observer= new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if(entry.isIntersecting === true){
            const id = entry.target.id;
            navLinks.forEach(function(link) {
    link.classList.remove('active');
        });
        const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
        if (activeLink) {
    activeLink.classList.add('active');
}
        }
    });

},options);

sections.forEach(function(section){
   observer.observe(section)
});

navLinks.forEach(function(link){
    link.addEventListener('click',function(){
        document.querySelector('#menu-toggle').checked=false;
    });
});

