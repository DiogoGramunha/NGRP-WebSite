function openModal(imageArray, spoilerText) {
    const spoilerImages = document.getElementById('spoilerImages');
    spoilerImages.innerHTML = ''; // Clear previous images

    imageArray.forEach((src, index) => {
        const div = document.createElement('div');
        div.className = `carousel-item${index === 0 ? ' active' : ''}`;
        const img = document.createElement('img');
        img.src = src;
        img.className = 'd-block w-100';
        img.alt = 'Spoiler Image';
        div.appendChild(img);
        spoilerImages.appendChild(div);
    });

    document.getElementById('spoilerText').innerText = spoilerText;
    var myModal = new bootstrap.Modal(document.getElementById('spoilerModal'));
    myModal.show();
}
