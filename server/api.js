const request = require('request')
const types = require('./types')
const querystring = require('querystring')

const weather = (resolve, reject) => {
    console.log("=========== api.js ===============")
    console.log(types)
    console.log(encodeURI(types.location))
    const location = encodeURIComponent(types.location)
    let query = {
        location: types.location,
        key: types.key
    }
    console.log(querystring.stringify(query))
    let apiResponse = request
        .get(types.heweather_base_api + "/forecast?" + querystring.stringify(query))
    if (apiResponse) {
        resolve(apiResponse)
    } else {
        reject("errMsg: 报错了")
    }
    // console.log(`apiResponse: ${apiResponse}`)
}

exports.weather = weather