const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=e84a32d60312f1dacc87071d38f8cbdf&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}