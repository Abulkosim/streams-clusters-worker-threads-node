import fs from 'fs'; 

const readStream = fs.createReadStream('../input.txt', {
    encoding: 'utf8', 
    highWaterMark: 1024, 
})

let counter = 0; 

readStream.on('data', (chunk) => {
    counter++; 
    console.log(`received chunk ${counter}`); 
}); 

readStream.on('end', () => {
    console.log('no more data'); 
}); 

readStream.on('error', (err) => {
    console.log('error', err); 
}); 

