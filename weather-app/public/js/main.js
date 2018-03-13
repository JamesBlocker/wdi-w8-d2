var $searchBtn = $('#search-btn')
var $searchInput = $('#search-input')
var $cityName = $('#city-name')
var $cityTemp = $('#city-temperature')
var $cityHumidity = $('#city-humidity')
var httpClient = axios.create()

$searchBtn.on('click', () => {
    const city = $searchInput.val()
    const options = { url: `/weather/${city}`}
    httpClient(options).then((serverResponse) => {
        console.log(serverResponse.data)
        $cityName.text(serverResponse.data.name)
        $cityTemp.text(serverResponse.data.main.temp + " F")
        $cityHumidity.text(serverResponse.data.main.humidity + "%")
    })
})
