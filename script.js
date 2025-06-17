const button = document.querySelector(".submit-button");
const page1 = document.querySelector('.rating-content');
const page2 = document.querySelector('.thank-you-state');

const ratings = document.querySelectorAll('.rating');

const feedbackText = document.querySelector(`.score`);
let selected = null;
let score = 0;


ratings.forEach((rating)=>{rating.addEventListener("click",
 clickHandler)});

ratings.forEach((rating)=>{rating.addEventListener("keydown",
   (e)=> {  if (e.key === "Enter" || e.key === " ") selectRating(e);
   })});
 
   

button.addEventListener("click", clickHandler);




function clickHandler(){
    page1.classList.remove('visible');
    page1.classList.add('not-visible');
    page2.classList.add('visible');
    page2.classList.remove('not-visible');
    
    if (score!==0){
    feedbackText.textContent = `You selected ${score} out of 5`;
    }
    else { feedbackText.textContent = `You did not select any rating`;
  }
}

function selectRating(e){
    ratings.forEach(num => num.classList.remove('selected'));
 
        e.target.classList.add('selected');
        selected = e.target.querySelector('p').textContent.trim();
        score = parseInt(selected, 10);
       
       
   }


