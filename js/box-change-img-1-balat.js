var imageContentBalatOne = document.querySelector('.box-change-img-1-balat img');
    var imagesOne = [ '../images/balat02.jpg', '../images/bl01.jpg', '../images/bl02.jpg', '../images/bl03.jpg', '../images/bl04.jpg'];
    var currentIndex = 0;

    function changeImageOne() {
        imageContentBalatOne.src = imagesOne[currentIndex];
        currentIndex = (currentIndex + 1) % imagesOne.length;
    }

    // Change image every 3 seconds
    setInterval(changeImageOne, 2000);