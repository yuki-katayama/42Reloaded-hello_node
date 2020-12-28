/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-json-api-server.js                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kyuki <kyuki@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 18:27:35 by kyuki             #+#    #+#             */
/*   Updated: 2020/12/28 18:27:38 by kyuki            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var http = require('http');
const port = process.argv[2] ? process.argv[2] : 8080;

try {
	if (port < 0) {
		console.log(`port :options.port should be >= 0 and < 65536. Received ${port}.`)
		return;
	}
	let server = http.createServer(function (req, res) {
		let message;
		const paramsString = {}
		const pathString = req.url.split('?')[0];
		const paramTmp = req.url.split('?')[1];
		let queryString = new URLSearchParams(paramTmp);
		for (let pair of queryString.entries()) {
			paramsString[pair[0]] = pair[1];
		}
		if (pathString && req.method == "GET" && paramsString["iso"] && (pathString == "/api/unixtime" || pathString == "/api/parsetime")) {
			let time = new Date(paramsString['iso']);
			if (time.toString() == 'Invalid Date') {
				res.writeHead(400, {
					'Content-Type': pathString,
				});
				message = JSON.stringify({
					error: "Invalid Date",
				});
			} else {
				switch (pathString) {
					case "/api/unixtime":
						res.writeHead(200, {
							'Content-Type': pathString
						});
						message = JSON.stringify({
							unixtime: Date.parse(paramsString["iso"])
						});
						break;
					case "/api/parsetime":
						res.writeHead(200, {
							'Content-Type': pathString
						});
						message = JSON.stringify({
							hour: time.getUTCHours(),
							minute: time.getUTCMinutes(),
							second: time.getUTCSeconds()
						});
						break;
					default:
						res.writeHead(404, {
							'Content-Type': pathString
						});
						message = JSON.stringify({
							error: "request error",
						});
						break;
				}
			}
		} else {
			res.writeHead(404, {
				'Content-Type': pathString
			});
			message = JSON.stringify({
				error: "request error",
			});
		}
		res.write(message);
		res.end()
		res.on('close', () => {})
	}).listen(port).on('error', function (e) {
		console.log("error", e.message);
	});
} catch (err) {
	console.log("port: " + err.message)
}