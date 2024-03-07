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
