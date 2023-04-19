
async function fetchUsers() {

    const response = await fetch('/data/employees.json')
    const users = await response.json()

    let tbody = document.querySelector('tbody')
    for (let user of users) {

        tbody.innerHTML += 
        `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.ext}</td>
            <td>${user.email}</td>
            <td>${user.department}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        ` 
    }
}
fetchUsers()




// USING FETCH - used for troubleshooting
// fetch('/data/employees.json')
// .then(response => response.json())
// .then(users => {
// for (let user of users) {
//     document.body.innerHTML +=
//     `
//         <p>
//         ${user.name}<br>
//         ${user.email}<br>
//         </p>    
//     `
// }

// })