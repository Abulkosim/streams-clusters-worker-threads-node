import { finished } from "node:stream/promises";
import { createReadStream } from "node:fs";

const stream = createReadStream('input.txt');

async function run() {
    console.log('just before stream finished');
    await finished(stream);
}

run();