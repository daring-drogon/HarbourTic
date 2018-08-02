var postUrl = 'http://localhost:3000/schedules/add';
var data = {
    name: 'djamale',
    phone: '080808'
}

fetch(postUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(data),
    })
    .then(res => {
        res.json();
    })
    .catch(error => console.log('Error: ',
        error))
    .then(response => console.log('Success: ', response))