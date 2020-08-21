window.addEventListener('DOMContentLoaded', () => {

    let url = 'https://reqres.in/api/users',
        xhrbtn = document.querySelector('.xhr'),
        fetchbtn = document.querySelector('.fetch'),
        jqbtn = document.querySelector('.jq'),
        axiosbtn = document.querySelector('.axios'),
        result = document.querySelector('.users');

    // xhr 
    xhrbtn.addEventListener('click', () => {
        const request = new XMLHttpRequest();

        request.open('GET', 'https://reqres.in/api/users');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send();
        request.addEventListener('load', () => {
            if (request.readyState === 4 && request.status === 200) {
                let usersData = JSON.parse(request.response);
                
                usersData.data.forEach(item => {
                    let card = document.createElement('div');

                    card.classList.add('card');

                    card.innerHTML = `
                        <p>${item.first_name} ${item.last_name}</p>
                        <p>${item.email}</p>
                        <img src="${item.avatar}">
                    `;

                    document.querySelector('.wrapper').appendChild(card);
                });
            } else {
                let error = document.createElement('p');
                error.innerHTML = 'Error!!!';
                document.querySelector('.wrapper').appendChild(error);
            }
        });
    }, {'once': true})

    




















});