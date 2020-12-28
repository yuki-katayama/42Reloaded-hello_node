/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   async-http-collect.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kyuki <kyuki@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 18:26:58 by kyuki             #+#    #+#             */
/*   Updated: 2020/12/28 18:27:01 by kyuki            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let http = require("http");

function getServerStatusCode(v) {
	return new Promise(function (resolve, reject) {
		http.get(v, (res) => {
			let data = "";
			res.on("data", (d) => {
				data += d;
			});
			res.on("end", () => {
				resolve(data)
			})
		}).on('error', (e) => {
			reject(e)
		});
	});
}

async function main() {
	try {
		for (let i = 2; i < process.argv.length; i++) {
			result = await getServerStatusCode(process.argv[i])
			console.log(result);
		}
	} catch (err) {
		console.log("error: " + err.message)
	}
}

if (process.argv.length == 5) {
	main()
}