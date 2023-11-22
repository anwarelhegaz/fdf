
var imageContentSbakaOne = document.querySelector('.box-change-img-1-sbaka img');
    var images = [ '../images/sba02.jpg', '../images/sba03.jpg', '../images/sba04.jpg', '../images/sba05.jpg', '../images/sba01.jpg'];
    var currentIndex = 1;

    function changeImageOne() {
        imageContentSbakaOne.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Change image every 3 seconds
    setInterval(changeImageOne, 2000);

