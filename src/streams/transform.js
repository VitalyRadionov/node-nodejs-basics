import { EOL } from 'node:os';
import { stdin, stdout } from 'node:process';
import { pipeline, Transform } from 'node:stream';

const transform = async () => {
    const rev = new Transform({
        transform(chunk, encoding, callback) {
            let str = String(chunk);
            str = str.replace(EOL, '');
            str = str.split('').reverse().join('') + EOL;
            callback(null, str);
        },
    });

    pipeline(
        stdin,
        rev,
        stdout,
        (err) => {
            throw new Error(err);
        }
    );
};

await transform();