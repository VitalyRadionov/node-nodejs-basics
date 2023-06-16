import { rename } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const rn = async () => {
    const pathToFile = dirname(fileURLToPath(import.meta.url)) + '/files/wrongFilename.txt';
    const pathToFilesCopy = dirname(fileURLToPath(import.meta.url)) + '/files/properFilename.md';
    const msgErr = 'FS operation failed';

    try {
        await rename(pathToFile, pathToFilesCopy);
    } catch (err) {
        throw new Error(msgErr);
    }
};

await rn();