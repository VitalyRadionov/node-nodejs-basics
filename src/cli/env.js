import { env } from 'node:process';

const parseEnv = () => {
    for (const key in env) {
        if (key.startsWith('RSS')) {
            console.log(`${key}=${env[key]}`);
        }
    }
};

parseEnv();