const form = document.querySelector("#form");
const input = document.querySelector("input");
const error = document.querySelector("#error");
const cards = document.querySelector(".cards");

let data = {};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Clicked");
  formValidation();

  
});
const formValidation = () => {
  if (input.value === "") {
    error.textContent = "Cannot be blank";
    console.log("Fail");
  } else {
    console.log("Success");
    error.textContent = "";
    getData();
    
  }
};
const getData = () => {
  console.log(data);
  createJobCard();
};

console.log(input.value)

fetch(
  `https://www.themuse.com/api/public/jobs?category=${input.value}&page=1`
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Network response error!");
    }
  })
  .then((data) => {
    createJobCard(data);
  })
  .catch((error) => console.error("Error", error));

const createJobCard = (data) => {
   for (let i = 0; i <= 19; i++) {
      cards.innerHTML += `
      <div class="card">
      <p>${data.results[i].publication_date}</p>
      <h5>${data.results[i].id}</h5>
      <h2>${data.results[i].name}</h2>
      <p>${data.results[i].locations[0].name}</p>
      <p>${data.results[i].refs.landing_page}</p>      
   </div>
      `
   }
 
  
};

/*
card.innerHTML += `
      <div class="cards">
         <p>${data.results[x].publication_date}</p>
         <h5>${data.results[x].id}</h5>
         <h2>${data.results[x].name}</h2>
         <h2>${data.results[x].levels[x].name}</h2>
         <p>${data.results[x].locations[x].name}</p>
      </div>
   `

*/
