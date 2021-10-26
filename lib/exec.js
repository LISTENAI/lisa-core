"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const stream_1 = require("stream");
const readline_1 = require("readline");
const events_1 = require("events");
const iconv = require("iconv-lite");
exports.default = async (file, arg, options, onProcess) => {
    var _a, _b;
    const { cmd } = _1.default;
    // let success = false
    const exec = cmd(file, arg, options);
    const mixer = new stream_1.PassThrough();
    (_a = exec.stdout) === null || _a === void 0 ? void 0 : _a.pipe(mixer);
    (_b = exec.stderr) === null || _b === void 0 ? void 0 : _b.pipe(mixer);
    const rl = readline_1.createInterface({
        input: (options === null || options === void 0 ? void 0 : options.encoding) ? mixer.pipe(iconv.decodeStream(options === null || options === void 0 ? void 0 : options.encoding)) : mixer,
        historySize: 0,
        crlfDelay: Infinity,
    });
    rl.on('line', (line) => {
        try {
            onProcess && onProcess(line);
        }
        catch (error) {
        }
    });
    await events_1.once(exec, 'exit');
    return exec.exitCode;
};
//# sourceMappingURL=exec.js.map