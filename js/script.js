const $city = $('#city');
const $temp = $('#temp');
const $feels_like = $('#feels_like');
const $weather = $('#weather');
const $input =$('input[type="text"]');
//Event Listener
$('form').on('submit', handleGetData)
function handleGetData(event) {
    // prevents the default behaviour
    event.preventDefault();
    const userInput = $input.val()
    console.log('userInput', userInput)
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=524901&units=imperial&appid=21fdf01c9facb68328303615b86b81c8&q='+userInput
    }).then(
        // SUCCESS...
        (data) => {
            console.log('data', data);
            render(data)
        },
        // FAILURE...
        (error) => {
            console.log('error', error);
        }
    );
}
function render(data) {
    // Data.forEach()
    $city.text("Weather for: " + data.name);
    $temp.text("Temperate is " + data.main.temp + " degrees F");
    $feels_like.text("Feels like " + data.main.feels_like);
    $weather.text("Weather is " + data.weather[0].description);
}