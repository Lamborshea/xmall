const http = require('http')
const url = require('url')
const start = (route, weather) => {
    const onRequest = (req, res) => {
        console.log(`req.url: ${req.url}`)
        if (req.url == '/weather') {
            let weatherPromise = new Promise(weather);
            weatherPromise.then(result => {
                req.pipe(result)
                result.pipe(res)
                res.writeHead(200, { "Content-Type": 　"text/json; charset=UTF-8"})
                res.write(result)
            })
            .then(() => {
                res.end();
            })
            .catch((error) => {
                console.log(error)
            })
        } else {
            let pathname = url.parse(req.url).pathname
            console.log(`Request for ${pathname} received.`)
            // 回调 router 模块中的 route 函数
            route(pathname)
            res.writeHead(200, {"Content-Type":　"text/json"})
            res.write(`{"msg": "Hello World! "}`)
            res.end()
        }
    }

    http.createServer(onRequest).listen(8000)
    console.log("Server is listening on 8888 port")
}

exports.start = start