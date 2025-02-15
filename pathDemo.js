import url from 'url'
import path from 'path';

const filePath = './dir/dir2/test.txt';

// basename()
// console.log(path.basename(filePath)); 

// dirname()
// console.log(path.dirname(filePath));

// extname()
// console.log(path.extname(filePath));


// parse()
console.log(path.parse(filePath));

const __filename= url.fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log(__dirname, 'dir name', __filename, 'file name');

// join()
const filePath2 = (path.join(__dirname, 'dir1', 'dir2', 'index.html'));
console.log(filePath2, 'file path 2');

// resolve()
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'index.html');
console.log(filePath3, 'file path 3');