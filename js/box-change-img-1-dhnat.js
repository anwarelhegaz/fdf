var imageContentDhnatOne = document.querySelector('.box-change-img-1-dhnat img');
    var imagesOne = [ '../images/nk01.jpg', '../images/nk02.jpg', '../images/nk03.jpg', '../images/nk04.jpg', '../images/nk05.jpg'];
    var currentIndex = 0;

    function changeImageOne() {
        imageContentDhnatOne.src = imagesOne[currentIndex];
        currentIndex = (currentIndex + 1) % imagesOne.length;
    }

    // Change image every 3 seconds
    setInterval(changeImageOne, 2000);