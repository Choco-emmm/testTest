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

			// 测试 /status 返回 200 和 JSON
			let statusReq = http.get({
				host: '127.0.0.1',
				port: port,
				path: '/status'
			}, function(res2) {
				let body2 = '';
				res2.on('data', function(chunk) {
					body2 += chunk;
				});
				res2.on('end', function() {
					assert.strictEqual(res2.statusCode, 200);
					assert.strictEqual(body2, '{"status":"running"}');
					console.log('/status returned 200 and {"status":"running"}');

					// 测试 /version 返回 200 和版本 JSON
					let versionReq = http.get({
						host: '127.0.0.1',
						port: port,
						path: '/version'
					}, function(res3) {
						let body3 = '';
						res3.on('data', function(chunk) {
							body3 += chunk;
						});
						res3.on('end', function() {
							assert.strictEqual(res3.statusCode, 200);
							assert.strictEqual(res3.headers['content-type'], 'application/json');
							let data = JSON.parse(body3);
							assert.strictEqual(data.version, '1.0.0');
							console.log('/version returned 200 and version ' + data.version);

							// 测试 / 返回 404
							let rootReq = http.get({
								host: '127.0.0.1',
								port: port,
								path: '/'
							}, function(res4) {
								let body4 = '';
								res4.on('data', function(chunk) {
									body4 += chunk;
								});
								res4.on('end', function() {
									assert.strictEqual(res4.statusCode, 404);
									assert.strictEqual(body4, '{"error":"not found"}');
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
					versionReq.on('error', function(err) {
						throw err;
					});
				});
			});
			statusReq.on('error', function(err) {
				throw err;
			});
		});
	});
	healthReq.on('error', function(err) {
		throw err;
	});
});
