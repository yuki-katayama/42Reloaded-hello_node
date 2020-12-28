/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-collect.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kyuki <kyuki@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 21:16:03 by kyuki             #+#    #+#             */
/*   Updated: 2020/12/28 17:57:04 by kyuki            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let http = require('http');

if (process.argv[2]) {
	try {
		http.get(process.argv[2], (res) => {
			let data = "";
			let count = 0;
			res.on("data", d => {
				data += d
				count += d.length;
			})
			res.on("end", () => {
				console.log(count);
				console.log(data);
			})
		}).on('error', function (e) {
			console.log("error", e.message);
		});
	} catch (err) {
		console.log(err.message)
	}
}