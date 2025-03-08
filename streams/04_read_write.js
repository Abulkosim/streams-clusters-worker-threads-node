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

const writeStream = fs.createWriteStream('../output.txt');

writeStream.write('Hello, world!\n');
writeStream.write('Writing some more data...');
writeStream.end(); 

writeStream.on('finish', () => {
  console.log('Finished writing to file.');
});

writeStream.on('error', (err) => {
  console.error('Error writing to file:', err);
});

// piping
readStream.pipe(writeStream); 