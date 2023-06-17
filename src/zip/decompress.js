import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { createUnzip } from 'node:zlib';

const decompress = async () => {
    const destinationPath = new URL('./files/fileToCompress.txt', import.meta.url);
    const sourcePath = new URL('./files/fileToCompress.txt.gz', import.meta.url);
    const unzip = createUnzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(destinationPath);

    pipeline(source, unzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await decompress();