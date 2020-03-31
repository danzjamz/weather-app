
export const getCurrentWeather = (zip) => {
    return {
        type: 'GET_WEATHER',
        zip: zip
    }
}