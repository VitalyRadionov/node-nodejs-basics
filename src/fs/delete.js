import { unlink } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const remove = async () => {
    const pathToFile = dirname(fileURLToPath(import.meta.url)) + '/files/fileToRemove.txt';
    const msgErr = 'FS operation failed';

    try {
        await unlink(pathToFile);
    } catch (err) {
        throw new Error(msgErr);
    }
};

await remove();