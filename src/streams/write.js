import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const write = async () => {
    const filePath = new URL('./files/fileToWrite.txt', import.meta.url);
    const file = createWriteStream(filePath);

    stdin.pipe(file);
};

await write();