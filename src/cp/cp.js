import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const src = new URL('./files/script.js', import.meta.url);
    const cp = fork(src, args, { silent: true });

    process.stdin.pipe(cp.stdin);
    cp.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['--version', '--help']);
