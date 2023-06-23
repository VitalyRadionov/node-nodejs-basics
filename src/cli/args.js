import { argv } from 'node:process';

const parseArgs = () => {
    const argArr = [];
    for (let i = 2; i < argv.length; i += 2) {
        argArr.push(`${argv[i].slice(2)} is ${argv[i + 1]}`);
    }
    console.log(argArr.join(', '));
};

parseArgs();