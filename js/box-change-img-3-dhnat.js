var imageContentDhnatThree = document.querySelector('.box-change-img-3-dhnat img');
    var imagesThree = [ '../images/nk11.jpg', '../images/nk12.webp', '../images/nk13.jpg', '../images/nk14.jpg', '../images/nk15.jpg'];
    var currentIndex = 1;

    function changeImageThree() {
        imageContentDhnatThree.src = imagesThree[currentIndex];
        currentIndex = (currentIndex + 1) % imagesThree.length;
    }

    // Change image every 3 seconds
    setInterval(changeImageThree, 2000);