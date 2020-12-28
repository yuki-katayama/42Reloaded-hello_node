/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sum_args.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kyuki <kyuki@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 21:15:38 by kyuki             #+#    #+#             */
/*   Updated: 2020/12/28 17:56:42 by kyuki            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function parsed(x) {
	const parsed = parseInt(x, 10);
	return parsed;
}

let sum = 0;
for (let i = 2; i < process.argv.length; i++)
	sum += parsed(process.argv[i]);
console.log(sum);