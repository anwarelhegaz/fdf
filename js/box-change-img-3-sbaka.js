
var imageContentSbakaThree = document.querySelector('.box-change-img-3-sbaka img');
    var imagesThree = [ '../images/sba11.webp', '../images/sba12.jpg', '../images/sba13.webp', '../images/sba14.jpg', '../images/sba15.jpg'];
    var currentIndex = 1;

    function changeImageThree() {
        imageContentSbakaThree.src = imagesThree[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Change image every 3 seconds
    setInterval(changeImageThree, 2000);

