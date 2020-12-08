const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider img');
const dots = document.querySelectorAll('.dot');

//counter
let counter = 0;

//Set class active for first slide & first dot
sliderImages[counter].classList.add('active');
dots[counter].classList.add('active');

//remove the 'active' class
const removeActiveClass = (array) => {
  array.forEach((element) => {
    element.classList.remove('active');
  });
};

//remove the 'active' class
const addActiveClass = (array, index) => {
  array[index].classList.add('active');
};

//Dots Event Listener
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    removeActiveClass(dots);
    dot.classList.add('active');
    counter = index - 1;
    nextSlide();
    console.log(index);
  });
});

//Change to next slide
const nextSlide = () => {
  removeActiveClass(sliderImages);
  removeActiveClass(dots);
  counter = (counter + 1) % sliderImages.length;
  addActiveClass(sliderImages, counter);
  addActiveClass(dots, counter);
};

setInterval(nextSlide, 13000);
