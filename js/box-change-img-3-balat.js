var imageContentBalatThree = document.querySelector('.box-change-img-3-balat img');
    var imagesThree = [ '../images/bl10.jpg', '../images/bl11.jpg', '../images/bl12.jpg', '../images/bl13.webp', '../images/bl14.webp'];
    var currentIndex = 0;

    function changeImageThree() {
        imageContentBalatThree.src = imagesThree[currentIndex];
        currentIndex = (currentIndex + 1) % imagesThree.length;
    }

    // Change image every 3 seconds
    setInterval(changeImageThree, 2000);