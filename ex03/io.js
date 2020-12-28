/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   io.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kyuki <kyuki@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 19:13:39 by kyuki             #+#    #+#             */
/*   Updated: 2020/12/28 17:56:38 by kyuki            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let fs = require('fs');
if (process.argv[2]) {
	try {
		const content = fs.readFileSync(process.argv[2], "utf8");
		let count = 0;
		for (let i = 0; i < content.length; i++) {
			if (content[i] == '\n') {
				count++
			};
		}
		console.log(count);
	} catch (err) {
		console.log(err.message)
	}
}