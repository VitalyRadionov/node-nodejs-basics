import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const read = async () => {
    const pathToFile = dirname(fileURLToPath(import.meta.url)) + '/files/fileToRead.txt';
    const msgErr = 'FS operation failed';

    try {
        const files = await readFile(pathToFile, { encoding: 'utf-8' });
        console.log(files);
    } catch (err) {
        throw new Error(msgErr);
    }
};

await read();