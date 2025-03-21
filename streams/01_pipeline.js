import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

await pipeline(
    createReadStream('input.txt'),
    createGzip(),
    createWriteStream('input.txt.gz')
);

console.log('pipeline succeeded')