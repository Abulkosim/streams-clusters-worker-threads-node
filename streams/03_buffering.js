import http from 'http';

const server = http.createServer((req, res) => {
    let body = ''; 

    req.setEncoding('utf8'); 

    req.on('data', (chunk) => {
        body += chunk; 
    });

    req.on('end', () => {
        try {
            const data = JSON.parse(body); 
            res.write(typeof data); 
            res.end();
        } catch (err) {
            res.statusCode = 400; 
            return res.end(err)
        }
    })
})

server.listen(1337);