/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-client.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kyuki <kyuki@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 19:47:17 by kyuki             #+#    #+#             */
/*   Updated: 2020/12/27 15:50:56 by kyuki            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let http = require('http');
if (process.argv[2]) {
	try {
		http.get(process.argv[2], (res) => {
			let data = ""
			res.on("data", d => {
				data += d
			})
			res.on("end", () => {
				console.log(data)
			})
		}).on('error', function (err) {
			console.log("error", err.message);
		});
	} catch (err) {
		console.log(err.message)
	}
}