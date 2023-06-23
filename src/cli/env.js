import { env } from 'node:process';

const parseEnv = () => {
    let res = [];
    for (const key in env) {
        if (key.startsWith('RSS')) {
            res.push(`${key}=${env[key]}`);
        }
    }
    console.log(res.join('; '));
};

parseEnv();