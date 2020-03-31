// const apiKey = process.env.development.local.REACT_APP_WEATHER_API_KEY


// export const weatherReducer = (state, action) => {
//     switch (action.type) {
//         case 'GET_WEATHER':
//             return fetch(`api.openweathermap.org/data/2.5/weather?zip=${ action.zip }&appid=${ apiKey }`)
//                     .then(res => res.json())
//                     .then(res => {
//                         return res;
//                     })
//     default:
//         break;
//     }
// }