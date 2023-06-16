import { cp, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const copy = async () => {
    const pathToFiles = dirname(fileURLToPath(import.meta.url)) + '/files';
    const pathToFilesCopy = dirname(fileURLToPath(import.meta.url)) + '/files_copy';
    const msgErr = 'FS operation failed';

    try {
        await mkdir(pathToFilesCopy);
        await cp(pathToFiles, pathToFilesCopy, { recursive: true });
    } catch (err) {
        throw new Error(msgErr);
    }
};

await copy();
