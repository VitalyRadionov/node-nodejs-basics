import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const src = new URL('./files/script.js', import.meta.url);
    fork(src, args.split(' '));
};

// Put your arguments in function call to test this functionality
spawnChildProcess('--version --help');
