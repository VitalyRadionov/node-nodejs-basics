import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { createGzip } from 'node:zlib';

const compress = async () => {
    const sourcePath = new URL('./files/fileToCompress.txt', import.meta.url);
    const destinationPath = new URL('./files/fileToCompress.txt.gz', import.meta.url);
    const gzip = createGzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(destinationPath);

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await compress();