import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, parse } from 'node:path';

const list = async () => {
    const pathToFile = dirname(fileURLToPath(import.meta.url)) + '/files';
    const msgErr = 'FS operation failed';

    try {
        const files = await readdir(pathToFile);
        // ex1
        for (const file of files) {
            console.log(parse(file).name);
        }
        // ex2
        // console.table(files);
    } catch (err) {
        throw new Error(msgErr);
    }
};

await list();