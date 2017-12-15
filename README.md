```
var http = require('http')
var fs = require('fs')
var url  = require('url') //创建"http"、"fs"、"url"3个模块，提供方法处理请求和数据
http.createServer(function(request, response){
	response.setHeader('Content-Type','text/html; charset=utf-8')
var pathObj = url.parse(request.url, true) //将传入的URL转换成一个对象赋值给pathObj
if(pathObj.pathname === '/'){
	pathObj.pathname += 'test.html'
} //只输入'/'时默认打开test.html
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
break; //根据city的值来输出那组数据
case '/greet/3':
response.end(fs.readFileSync(__dirname + '/sample/3'))
break; //打开文件名为3的文件
default:
response.end(fs.readFileSync(__dirname + '/sample' + pathObj.pathname))
} // 上面都不符根据输入的pathname打开文件
}).listen(9090) // 创建9090端口
```
