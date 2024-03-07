const quotesArray = [];

fetch("https://type.fit/api/quotes")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data[1]);
    //quotesArray = data
});

console.log(quotesArray);

let imgIndex = 1;

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

img1.classList.remove('hidden');
img2.classList.add('hidden');
img3.classList.add('hidden');

function nextImage(){

    if(imgIndex > 3){
        imgIndex = 1;
    }

    if(imgIndex == 1){
        img1.classList.remove('hidden');
        img2.classList.add('hidden');
        img3.classList.add('hidden');
    }else if(imgIndex == 2){
        img1.classList.add('hidden');
        img2.classList.remove('hidden');
        img3.classList.add('hidden'); 
    }else if(imgIndex == 3){
        img1.classList.add('hidden');
        img2.classList.add('hidden');
        img3.classList.remove('hidden');
    }

    imgIndex++;
}

setInterval(nextImage,3000);
// let apiUrl = `https://zenquotes.io/api/today`;
//https://zenquotes.io/api/random

// fetch(apiUrl) // order the pizza
// .then(resp => resp.json())
// .then(data =>{
//     console.log(data);

//     // We can't do anything with the data from the API, until HERE
//     loadUsers(data.results);
//     console.log(data.results);
// });

// function loadUsers(users){
//     // Loop over the users
//     // For each uesr
    
//     console.log("Printing Users");

//     let html = "";

//     for(let key in users){
//         console.log(users[key]);

//         let user = users[key];

//         // update the DOM with our userBox HTML?
//         html += `
//             <div class="userBox">
//                     <div>
//                         <div>
//                             <label>Quote:</label> 
//                             ${user.quote}
//                         </div>
//                         <div>
//                             <label>Author:</label> ${user.author}
//                         </div>
                    
//                     </div>
//                 </div>
//         `;
//     }

//     userContainer.innerHTML = html;
// }
