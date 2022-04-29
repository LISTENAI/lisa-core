import lisa from "."
import {Options} from 'execa'
import { PassThrough } from 'stream';
import { createInterface } from 'readline';
import { once } from 'events';
import * as iconv from 'iconv-lite'

export default async (
    file: string,
    arg?: readonly string[] | undefined,
    options?: Options<string> | undefined,
    onProcess?: (line: string) => void
) => {
    const {cmd} = lisa
    // let success = false
    const exec = cmd(file, arg, options)

    const mixer = new PassThrough();
    exec.stdout?.pipe(mixer);
    exec.stderr?.pipe(mixer);

    const rl = createInterface({
        input: options?.encoding ? mixer.pipe(iconv.decodeStream(options?.encoding)) : mixer,
        historySize: 0,
        crlfDelay: Infinity,
    });
    rl.on('line', (line) => {
        try {
            onProcess && onProcess(line)
        } catch (error) {
            
        }
    });
    await once(exec, 'exit');
    return exec.exitCode
}