/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   asyncio.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kyuki <kyuki@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 19:47:14 by kyuki             #+#    #+#             */
/*   Updated: 2020/12/27 14:51:30 by kyuki            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var fs = require('fs');
if (process.argv[2]) {
	fs.readFile(process.argv[2], 'utf8', (err, data) => {
		try {
			let count = 0;
			if (err) {
				throw err;
			}
			for (let i = 0; i < data.length; i++) {
				if (data[i] == '\n') {
					count++;
				};
			}
			console.log(count);
		} catch (e) {
			console.log(e.message)
		}
	})
}