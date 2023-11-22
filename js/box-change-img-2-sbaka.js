
var imageContentSbakaTwo = document.querySelector('.box-change-img-2-sbaka img');
    var imagesTwo = [ '../images/sba06.webp', '../images/sba07.jpg', '../images/sba08.jpg', '../images/sba09.jpg', '../images/sba010.jpg'];
    var currentIndex = 1;

    function changeImageTwo() {
        imageContentSbakaTwo.src = imagesTwo[currentIndex];
        currentIndex = (currentIndex + 1) % imagesTwo.length;
    }

    // Change image every 3 seconds
    setInterval(changeImageTwo, 2000);

