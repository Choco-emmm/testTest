
let http = require('http');
let assert = require('assert');
let app = require('./app');

let server = app.createServer();

server.listen(0, function() {
	let port = server.address().port;

	// 测试 /health 返回 200 和 JSON
	let healthReq = http.get({
		host: '127.0.0.1',
		port: port,
		path: '/health'
	}, function(res) {
		let body = '';
		res.on('data', function(chunk) {
			body += chunk;
		});
		res.on('end', function() {
			assert.strictEqual(res.statusCode, 200);
			assert.strictEqual(body, '{"status":"ok"}');
			console.log('/health returned 200 and {"status":"ok"}');

			// 测试 / 返回 404
			let rootReq = http.get({
				host: '127.0.0.1',
				port: port,
				path: '/'
			}, function(res2) {
				let body2 = '';
				res2.on('data', function(chunk) {
					body2 += chunk;
				});
				res2.on('end', function() {
					assert.strictEqual(res2.statusCode, 404);
					assert.strictEqual(body2, '{"error":"not found"}');
					console.log('/ returned 404');
					server.close();
					console.log('All tests passed');
				});
			});
			rootReq.on('error', function(err) {
				throw err;
			});
		});
	});
	healthReq.on('error', function(err) {
		throw err;
	});
});
