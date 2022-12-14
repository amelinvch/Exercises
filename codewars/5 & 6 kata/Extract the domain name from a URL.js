//https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

function domainName(url){
	return  url.replace('http://', '')
					   .replace('https://', '')
					   .replace('www.', '')
  					 .split('.')[0];
}

console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://youtube.com"));