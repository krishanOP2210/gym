// Loader
window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
});

// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");

    const c = +counter.innerText;

    const increment = target / 200;

    if(c < target){
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }

  };

  updateCounter();

});

// BMI Calculator
function calculateBMI(){

  let height = document.getElementById("height").value / 100;

  let weight = document.getElementById("weight").value;

  let bmi = (weight / (height * height)).toFixed(1);

  let result = document.getElementById("result");

  if(bmi < 18.5){
    result.innerHTML = `Your BMI: ${bmi} (Underweight)`;
  }
  else if(bmi >= 18.5 && bmi < 25){
    result.innerHTML = `Your BMI: ${bmi} (Normal)`;
  }
  else if(bmi >= 25 && bmi < 30){
    result.innerHTML = `Your BMI: ${bmi} (Overweight)`;
  }
  else{
    result.innerHTML = `Your BMI: ${bmi} (Obese)`;
  }

}

// Back To Top
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 400){
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
});

// Mobile Menu
const hamburger = document.getElementById("hamburger");

const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Scroll Animations
const observer = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

});

document.querySelectorAll(".service-card, .pricing-card, .trainer-card, .testimonial-card, .transform-card").forEach((el)=>{
  observer.observe(el);
});
