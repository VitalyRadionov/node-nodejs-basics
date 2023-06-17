import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, parse } from 'node:path';

const list = async () => {
    const pathToFile = dirname(fileURLToPath(import.meta.url)) + '/files';
    const msgErr = 'FS operation failed';

    try {
        const files = await readdir(pathToFile);
        for (const file of files) {
            console.log(parse(file).name);
        }
    } catch (err) {
        throw new Error(msgErr);
    }
};

await list();