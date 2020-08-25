const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `http://api.weatherstack.com/current?access_key=076019a8a48e5f56fa0bfe40272c7d4e&query=${ encodedUlr }`
    });

    const resp = await instance.get();

    if (resp.data.location.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.location;
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }

}

module.exports = {
    getLugarLatLng
}