const prevBtn = document.getElementById('prev'),
      nextBtn = document.getElementById('next'),
      slides = document.querySelectorAll('.slide'),
      dotsBtn = document.querySelectorAll('.dot');

      let index = 0;

const activeSlide = n => {
  for(let slide of slides){
    slide.classList.remove('active');
  }
    slides[n].classList.add('active');
}

const activeDot = n => {
  for(let dot of dotsBtn){
    dot.classList.remove('active');
  }
    dotsBtn[n].classList.add('active');
}

const prepareCurrentSlide = ind =>{
     activeSlide(ind);
     activeDot(ind);
}

const nextSlide = () => {
  if(index == slides.length - 1){
    index = 0;
    prepareCurrentSlide(index);
  }else{
    index++;
    prepareCurrentSlide(index);
  }
}

const prevSlide = () => {
  if(index == 0){
    index = slides.length-1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
}

dotsBtn.forEach((item, indexDot) =>{
  item.addEventListener('click', () =>{
    index = indexDot;
    prepareCurrentSlide(index);
  })
})

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

setInterval(nextSlide, 3000);


