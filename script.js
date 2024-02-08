document.addEventListener('DOMContentLoaded', function () {
    const dropdownBtn = document.getElementById('dropdownBtn');
    const navElement = document.querySelector('nav');
    const navLiElements = navElement.querySelectorAll('li');

    dropdownBtn.addEventListener('click', function () {
        for (const liElement of navLiElements) {
            if (liElement.style.display === 'block' || liElement.style.display === '') {
                liElement.style.display = 'none';
            } else {
                liElement.style.display = 'block';
            }
        }
    });
});
