window.addEventListener('DOMContentLoaded', () => {

    let url = 'https://reqres.in/api/users',
        xhrBtn = document.querySelector('.xhr'),
        fetchBtn = document.querySelector('.fetch'),
        axiosBtn = document.querySelector('.axios');

    function createCards(response) {
        response.data.forEach(item => {
            let card = document.createElement('div');

            card.classList.add('card');

            card.innerHTML = `
                <p>${item.first_name} ${item.last_name}</p>
                <p>${item.email}</p>
                <img src="${item.avatar}">
            `;

            document.querySelector('.wrapper').appendChild(card);
        });
    }    

    // xhr 
    xhrBtn.addEventListener('click', () => {
        const request = new XMLHttpRequest();

        request.open('GET', url);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send();
        request.addEventListener('load', () => {
            if (request.readyState === 4 && request.status === 200) {
                let usersData = JSON.parse(request.response);
                createCards(usersData); 
            } else {
                alert('Error!!!');
            }
        });
    }, {'once': true});

    // fetch
    fetchBtn.addEventListener('click', () => {
        async function getUsers() {
            try {
                const response = fetch(url)
                .then((res) => {
                    res.json().then((usersData) => {
                        createCards(usersData);
                    })
                })
                return response;
            } catch(error) {
                alert('Error!!!');
            }
        }

        getUsers();
    
    }, {'once': true});

    // jquery
    $('.jq').one('click', function(){
        $.getJSON(url)
        .done(function(usersData){
            createCards(usersData);
        })
        .fail(function(){
            alert('Error!!!');
        })
    });

    // axios
    axiosBtn.addEventListener('click', function(){
        async function getUsers() {
            try {
                const response = await axios.get(url)
                .then(function(usersData){
                    createCards(usersData.data);
                })
                return response;
            } catch(error) {
                alert('Error!!!');
            }
        }

        getUsers();

    }, {'once': true});










 







});