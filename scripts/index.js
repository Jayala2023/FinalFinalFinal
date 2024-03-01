console.log('Website is running');

const quotes = document.getElementById('quotes');

let apiUrl = `http://quotes.rest/qod.json`;

fetch(apiUrl) // order the pizza
.then(resp => resp.json())
.then(data =>{
    console.log(data);

    // We can't do anything with the data from the API, until HERE
    loadUsers(data.results);
});

function loadUsers(users){
    // Loop over the users
    // For each uesr
    
    console.log("Printing Users");

    let html = "";

    for(let key in users){
        console.log(users[key]);

        let user = users[key];

        // update the DOM with our userBox HTML?
        html += `
            <div class="userBox">
                    <div>
                        <div>
                            <label>Quote:</label> 
                            ${user.quote}
                        </div>
                        <div>
                            <label>Author:</label> ${user.author}
                        </div>
                    
                    </div>
                </div>
        `;
    }

    userContainer.innerHTML = html;
}
