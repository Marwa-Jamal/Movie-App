//HTML elements
const innerCard = document.getElementsByClassName("inner"); 
const image = document.getElementsByTagName("img");
const overLay = document.getElementsByClassName("overLay")
const navBar = document.getElementById("navBar");
const xMark = document.getElementById("xMark");
const alignJust = document.getElementById("alignJust");
console.log(alignJust);
console.log(xMark);
const allMovies = document.getElementById("allMovies");
const nowPlaying = document.getElementById("nowPlaying");
const popular = document.getElementById("popular");
const topRated = document.getElementById("topRated");
const trending = document.getElementById("trending");
const upComing = document.getElementById("upComing");
const contactUs = document.getElementById("contactUs");
//Regex For contact form
var regexuserEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
var regexpassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
let fname = document.getElementById("fname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repassword = document.getElementById("repassword");



// fetch 

async function getMovies(x){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjdjOWQ1Y2VlNDhlNmUyYjk0ZmI0MzQ0YmU1NmE5NiIsIm5iZiI6MTc0Nzc5NTY0OS4yNzcsInN1YiI6IjY4MmQzZWMxZTRiM2Y5OTlkZmUyNTUxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X_ZxZjWVXJhhbooheIyctjHPGF7n569fCOWqTU7-q4w'
        }
      };
    let response = await fetch(`https://api.themoviedb.org/3/movie/${x}?language=en-US&page=1`,options)
    let data = await response.json();
    let movieArray = data.results;
    console.log(data);
    console.log(movieArray);
    displayMovies(movieArray);
};



function displayMovies(data){
    allMovies.innerHTML="";
    for(let i=0; i<data.length; i++){
        allMovies.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="inner">
                    <div class="position-relative">
                        <img src="https://image.tmdb.org/t/p/w500${data[i].poster_path}" class="img-fluid"/>
                        <div class="overLay position-absolute w-100 h-100 p-3 text-white d-flex flex-column align-items-center fw-lighter">
                            <h2>${data[i].title}</h2>
                            <p class="description">${data[i].overview}</p>
                            <div class="last">
                            <div class="date">${data[i].release_date}</div>
                            <div class="rating">6.5</div>
                            </div>
                        </div>
                     </div>
                </div>        
            </div>`
    };
    
    for(let card of overLay){
        card.addEventListener("mouseout", function(){
            card.style.opacity = "0";
            card.style.transform = "translateX(-60px)"
            card.firstElementChild.style.transform = "translateY(-50px)";
            card.style.transition = "all 2s";
        })
    }
    for(let card of overLay){
        card.addEventListener("mouseover", function(){
            card.style.opacity = "1";
            card.style.transform = "translateX(0px)";
            card.firstElementChild.style.transform = "translateY(0px)";
            card.firstElementChild.style.transition = "transform 1s";
            card.style.transition = "opacity 1s";
        })
    }
};


getMovies("now_playing");

// JS event

alignJust.addEventListener("click", function(){
        alignJust.classList.add("d-none");
        xMark.classList.remove("d-none");
        xMark.classList.add("d-block");
        navBar.style.transform = "translateX(235px)";
        navBar.style.transition = "transform 1s";
    })
xMark.addEventListener("click", function(){
        alignJust.classList.remove("d-none");
        xMark.classList.add("d-none");
        xMark.classList.remove("d-block");
        navBar.style.transform = "translateX(0px)";
        navBar.style.transition = "transform 1s";
    })

popular.addEventListener("click", function(){
  getMovies("popular");
})
nowPlaying.addEventListener("click", function(){
  getMovies("now_playing");
})
topRated.addEventListener("click", function(){
  getMovies("top_rated");
})
upComing.addEventListener("click", function(){
  getMovies("upcoming");
})

trending.addEventListener("click", async function(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjdjOWQ1Y2VlNDhlNmUyYjk0ZmI0MzQ0YmU1NmE5NiIsIm5iZiI6MTc0Nzc5NTY0OS4yNzcsInN1YiI6IjY4MmQzZWMxZTRiM2Y5OTlkZmUyNTUxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X_ZxZjWVXJhhbooheIyctjHPGF7n569fCOWqTU7-q4w'
        }
      };
      
      let response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        let data = await response.json();
        console.log(data);
        let movieArray = data.results;
        console.log(movieArray);
        displayMovies(movieArray);

})



// topRated.addEventListener("click",async function(){
//     console.log("Hellow!!!");
//     const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjdjOWQ1Y2VlNDhlNmUyYjk0ZmI0MzQ0YmU1NmE5NiIsIm5iZiI6MTc0Nzc5NTY0OS4yNzcsInN1YiI6IjY4MmQzZWMxZTRiM2Y5OTlkZmUyNTUxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X_ZxZjWVXJhhbooheIyctjHPGF7n569fCOWqTU7-q4w'
//         }
//       };
//     let response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,options)
//     let data = await response.json();
//     let movieArray = data.results;
//     console.log(data);
//     console.log(movieArray);
//     displayMovies(movieArray);
// })

// upComing.addEventListener("click",async function(){
//     console.log("Hellow!!!");
//     const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjdjOWQ1Y2VlNDhlNmUyYjk0ZmI0MzQ0YmU1NmE5NiIsIm5iZiI6MTc0Nzc5NTY0OS4yNzcsInN1YiI6IjY4MmQzZWMxZTRiM2Y5OTlkZmUyNTUxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X_ZxZjWVXJhhbooheIyctjHPGF7n569fCOWqTU7-q4w'
//         }
//       };
//     let response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,options)
//     let data = await response.json();
//     let movieArray = data.results;
//     console.log(data);
//     console.log(movieArray);
//     displayMovies(movieArray);
// })

// popular.addEventListener("click",async function(){
//     console.log("Hellow!!!");
//     const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjdjOWQ1Y2VlNDhlNmUyYjk0ZmI0MzQ0YmU1NmE5NiIsIm5iZiI6MTc0Nzc5NTY0OS4yNzcsInN1YiI6IjY4MmQzZWMxZTRiM2Y5OTlkZmUyNTUxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X_ZxZjWVXJhhbooheIyctjHPGF7n569fCOWqTU7-q4w'
//         }
//       };
//     let response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,options)
//     let data = await response.json();
//     let movieArray = data.results;
//     console.log(data);
//     console.log(movieArray);
//     displayMovies(movieArray);
// })


// nowPlaying.addEventListener("click",async function(){
//     console.log("Hellow!!!");
//     const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjdjOWQ1Y2VlNDhlNmUyYjk0ZmI0MzQ0YmU1NmE5NiIsIm5iZiI6MTc0Nzc5NTY0OS4yNzcsInN1YiI6IjY4MmQzZWMxZTRiM2Y5OTlkZmUyNTUxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X_ZxZjWVXJhhbooheIyctjHPGF7n569fCOWqTU7-q4w'
//         }
//       };
//     let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,options)
//     let data = await response.json();
//     let movieArray = data.results;
//     console.log(data);
//     console.log(movieArray);
//     displayMovies(movieArray);
// })



// events by JQuery

$(".arrowUp").on("click", function(){
    console.log("HI");
    $("html, body").animate({scrollTop : 0}, 2000);
});

  $("#contactUs").on("click", function(){
    const contactOFFset = $("#contactForm").offset().top;
    console.log(contactOFFset)
    $("html, body").animate({scrollTop : contactOFFset}, 2000);
})

