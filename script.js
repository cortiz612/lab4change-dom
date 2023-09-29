const imageUrls = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg',
];

let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function updateGallery() {
    const imageUrl = imageUrls[currentIndex];
    
    while (galleryImage.firstChild) {
        galleryImage.removeChild(galleryImage.firstChild);
    }

    const newImage = document.createElement('img');
    newImage.src = imageUrl;
    newImage.alt = 'Image';

    galleryImage.appendChild(newImage);
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    updateGallery();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    updateGallery();
});

updateGallery();
