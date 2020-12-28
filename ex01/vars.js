/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   vars.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kyuki <kyuki@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 18:15:20 by kyuki             #+#    #+#             */
/*   Updated: 2020/12/28 17:56:46 by kyuki            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

string42 = "42";
number42 = 42;
object42 = new Object(42);
rensou42 = {
	"42": 42
};
bool42 = 42 == "42"
undefined42 = void 42;

console.log(`${string42} is a ${typeof string42}.`);
console.log(`${number42} is a ${typeof number42}.`);
console.log(`${object42} is an ${typeof object42}.`);
console.log(`${rensou42} is an ${typeof rensou42}.`);
console.log(`${bool42} is a ${typeof bool42}.`);
console.log(`${undefined42} is an ${typeof undefined42}.`);