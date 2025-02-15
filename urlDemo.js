import url from 'url'

const urlString = 'http://www.google.com/search?q=hello+world';

const urlObject = new URL(urlString);
console.log(urlObject);

console.log(url.format(urlObject));

//import.mera.url
//import url -file url
// console.log(import.meta.url);


console.log(url.fileURLToPath(import.meta.url));

console.log(urlObject.search)

const params = new URLSearchParams(urlObject.search);

params.append('limit', 5);
console.log(params.get('q'));
params.delete('limit');
console.log(params)