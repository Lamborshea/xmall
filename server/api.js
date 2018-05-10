const request = require('request')
const types = require('./types')

const weather = (resolve, reject) => {
    console.log("=========== api.js ===============")
    console.log(types)
    console.log(encodeURI(types.location))
    const location = encodeURIComponent(types.location)
    console.log(types.heweather_base_api + "/forecast?" + "location=" + location + "&key=" + types.key)
    let apiResponse = request
        .get(types.heweather_base_api + "/forecast?" + "location=" + location + "&key=" + types.key)
    if (apiResponse) {
        resolve(apiResponse)
    } else {
        reject("errMsg: 报错了")
    }
    // console.log(`apiResponse: ${apiResponse}`)
}

exports.weather = weather