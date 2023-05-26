/*======scroll selections active link=====*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id =  sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); 
            });
        };
    });
};

/*======scroll reveal=====*/
ScrollReveal ({
    reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });


.blog {
    margin: 2px;
    border: 1px solid #1f242d;
    float: right;
    width: 10px;
    
}

#photos {
    height: 50px;
    width: 100;
    margin: 1rem auto;
}


<section class="photos" id="photos"></section>
<br>
    <h2>P H O T O S</h2>
    <div>
        <a href="img 1.webp"><img id="image" src="img 1.webp"></a>
        <a href="img 2.jpg"><img id="image" src="img 2.jpg"></a>
        <a href="img 3.jpg"><img id="image" src="img 3.jpg"></a>
        <a href="img 4.jpg"><img id="image" src="img 4.jpg"></a>
        <a href="img 5.jpeg"><img id="image" src="img 5.jpeg"></a>
        <a href="img 6.jpg"><img id="image" src="img 6.jpg"></a>
    </div>