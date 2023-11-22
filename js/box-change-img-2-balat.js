var imageContentBalatTwo = document.querySelector('.box-change-img-2-balat img');
    var imagesTwo = [ '../images/bl05.jpg', '../images/bl06.jpg', '../images/bl07.jpg', '../images/bl08.jpg','../images/bl09.jpg'];
    var currentIndex = 0;

    function changeImageTwo() {
        imageContentBalatTwo.src = imagesTwo[currentIndex];
        currentIndex = (currentIndex + 1) % imagesTwo.length;
    }

    // Change image every 3 seconds
    setInterval(changeImageTwo, 2000);