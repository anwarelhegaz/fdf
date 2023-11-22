var imageContentDhnatTwo = document.querySelector('.box-change-img-2-dhnat img');
    var imagesTwo = [ '../images/nk06.png', '../images/nk07.png', '../images/nk08.jpeg', '../images/nk09.webp', '../images/nk10.jpg'];
    var currentIndex = 0;

    function changeImageTwo() {
        imageContentDhnatTwo.src = imagesTwo[currentIndex];
        currentIndex = (currentIndex + 1) % imagesTwo.length;
    }

    // Change image every 3 seconds
    setInterval(changeImageTwo, 2000);