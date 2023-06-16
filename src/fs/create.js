import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const create = async () => {
    const pathToFile = dirname(fileURLToPath(import.meta.url)) + '/files/fresh.txt';
    const text = 'I am fresh and young';
    const msgErr = 'FS operation failed';

    try {
        await writeFile(pathToFile, text, { flag: 'wx' });
    } catch (err) {
        throw new Error(msgErr);
    }
};

await create();