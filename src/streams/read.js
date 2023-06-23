import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
    const filePath = new URL('./files/fileToRead.txt', import.meta.url);
    const input = createReadStream(filePath, { encoding: 'utf-8' });

    input.pipe(stdout);
};

await read();