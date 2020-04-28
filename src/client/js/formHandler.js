function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    }).then(res => getWeather())
    .then((data) => {
        console.log(data);
    })
}

const apikey = 'ffed4aa63204dd3d8fb822260953b11e';
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?';

const getWeather = async () => {
    const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?zip=${document.getElementById('name').value}&appid=ffed4aa63204dd3d8fb822260953b11e`)
    try {
        const res = await response.json();
        return res;
    } catch (error) {
        console.log('error');
    }
}

export { handleSubmit }
