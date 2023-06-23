import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const calculateHash = async () => {
    const filePath = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);
    const hash = createHash('sha256');
    const contents = await readFile(filePath, { encoding: 'utf8' });
    hash.update(contents)
    console.log(`Hash: ${hash.digest('hex')}`);
};

await calculateHash();