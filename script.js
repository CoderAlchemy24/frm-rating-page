const button = document.querySelector(".submit-button");
const page1 = document.querySelector('.rating-content');
const page2 = document.querySelector('.thank-you-state');

const ratings = document.querySelectorAll('.rating');

const feedbackText = document.querySelector(`.score`);
let selected = null;
let score = 0;


  function selectRating(rating) {
  
    ratings.forEach(r => r.classList.remove('selected'));
   
    rating.classList.add('selected');
  
    score = rating.querySelector('p').textContent.trim();
    selected = parseInt(score, 10);
  }

function clickHandler() {
    page1.classList.remove('visible');
    page1.classList.add('not-visible');
    page2.classList.add('visible');
    page2.classList.remove('not-visible');

    if (selected !== null) {
        feedbackText.textContent = `You selected ${selected} out of 5`;
    } else {
        feedbackText.textContent = `You did not select any rating`;
    }
}

button.addEventListener('click', clickHandler);
button.addEventListener("keydown",  (e)=> {  if (e.key === "Enter" || e.key === " ") clickHandler();
   });  


ratings.forEach(rating => {
  rating.addEventListener('click', () => {
    selectRating(rating);
  });

  rating.addEventListener('keydown', (e) => {
    if (e.key === "Enter" || e.key === " ") {
      selectRating(rating);
    }
  });
  
  });