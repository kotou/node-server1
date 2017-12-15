    var http = require('http')
    var fs = require('fs')
    var url  = require('url')
    http.createServer(function(request, response){
        response.setHeader('Content-Type','text/html; charset=utf-8')
        var pathObj = url.parse(request.url, true)
        if(pathObj.pathname === '/'){
            pathObj.pathname += 'test.html'
        }
        switch(pathObj.pathname){
        	case '/weatherforecast':
            if(pathObj.query.city == 'shanghai'){
                ret = {
                    city: '上海',
                    weather: '阴'
                }
            }else {
                ret = {
                    city: pathObj.query.city,
                    weather: '无数据'
                }
            }
            response.end(JSON.stringify(ret))
            break;
            case '/greet/3':
            response.end(fs.readFileSync(__dirname + '/sample/3'))
            break;
            default:
            response.end(fs.readFileSync(__dirname + '/sample' + pathObj.pathname))
        }
    }).listen(9090)