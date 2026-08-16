
let speed = 10000;

//vl
function sbdhx() {
	let vl
	vl = 'nmsl'

}


123123
// 123123

function dhxbaby() {
	let cloud
	cloud = 'dhx' // 那就乱写
	console.log("Git push test");

}

// 引入原生 http 模块
let http = require('http');

// 读取版本号
let pkg = require('./package.json');
let version = pkg.version;

// 创建健康检查服务器
function createServer() {
	let server = http.createServer(function(req, res) {
		// 健康检查路径 /health 返回 200 和 JSON
		if (req.url === '/health') {
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.end('{"status":"ok"}');
		} else if (req.url === '/version') {
			// 版本信息路径 /version 返回 200 和 JSON
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.end(JSON.stringify({version: version}));
		} else {
			// 其他路径统一返回 404
			res.writeHead(404, {'Content-Type': 'application/json'});
			res.end('{"error":"not found"}');
		}
	});
	return server;
}

// 导出以方便测试
module.exports = {
	createServer: createServer
};

// 直接运行时监听端口
if (require.main === module) {
	let port = process.env.PORT || 3000;
	let server = createServer();
	server.listen(port, function() {
		console.log('Server listening on port ' + port);
	});
}
