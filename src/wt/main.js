import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
    const src = new URL('./worker.js', import.meta.url);
    const cpuArray = cpus();

    const workerArray = await Promise.allSettled(cpuArray.map((_, i) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(src, { workerData: 10 + i });
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0)
                    reject(new Error(`Worker stopped with exit code ${code}`));
            });
        });
    }));

    const resArray = workerArray.map(({ status, value }) => ({
        status: status === 'fulfilled' ? 'resolved' : 'error',
        value: status === 'fulfilled' ? value : null,
    }));

    console.log(resArray);
};

await performCalculations();