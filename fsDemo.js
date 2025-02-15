// import fs from 'fs'
import fs from 'fs/promises'

// read file

// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data)
// })


// const data = fs.readFileSync('./test.txt', 'utf8')
// console.log(data, 'data')

// readfile from promise version
// fs.readFile('./test.txt', 'utf8')
// .then(data => {console.log(data)})
// .catch(err => {console.log(err)})


// read file - async-await 
const readFile = async () => {
    try {
        const data =await fs.readFile('./test.txt', 'utf8')
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
// const writeFile = async () => {
//     try {
//         await fs.writeFile('./test.txt', 'Hello World')
//         console.log('File written to...')
//     } catch (error) {
//         console.log(error)
//     }
// }

const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nHello World')
        console.log('File appended to...')
    } catch (error) {
        console.log(error)
    }
}

// writeFile()
appendFile()

readFile()

