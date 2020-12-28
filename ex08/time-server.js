/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   time-server.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kyuki <kyuki@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 18:27:05 by kyuki             #+#    #+#             */
/*   Updated: 2020/12/28 18:27:07 by kyuki            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const net = require('net');

function define_date(time, format) {
	let date;
	if (time < 10) {
		date = '0' + time + format;
	} else {
		date = String(time) + format;
	}
	return date;
}

function make_date() {
	let dt = new Date();
	let date;
	let year = dt.getFullYear();
	let month = dt.getMonth() + 1;
	let day = dt.getDate();
	let hour = dt.getHours();
	let min = dt.getMinutes();

	date = String(year) + '-';
	date += define_date(month, '-');
	date += define_date(day, ' ');
	date += define_date(hour, ':');
	date += define_date(min, '\n');
	return date;
}

const port = process.argv[2] ? process.argv[2] : 8080;
try {
	if (port < 0) {
		console.log(`port :options.port should be >= 0 and < 65536. Received ${port}.`)
		return;
	}
	const server = net.createServer(socket => {
		socket.on('data', data => {
			let date;
			date = make_date();
			socket.write(date);
			socket.end()
		});
		socket.on('close', () => {})
	}).listen(port).on('error', function (e) {
		console.log("error :", e.message);
	});
} catch (err) {
	console.log("port: " + err.message)
}
