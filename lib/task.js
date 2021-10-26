"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runner = exports.job = void 0;
const index_1 = require("./index");
/**
 * 创建任务
 * @example
 * ```typescript
 * job("lisa_core:pre_build", {
 *  title: "编译任务1",
 *  task: async() => {
 *    console.log("a")
 *    await fs.remove("./out")
 *    fs.project.root = "./out"
 *    await fs.project.mkdir("app", "config", "target")
 *  }
 * })
 * ```
 * @param cmdName 任务名称，必须是类似 `build:pre` 的名称；请注意，如果任务名称相同，不可知道任务是否会被替换，推荐使用 `{包名}:{任务名}`的命名规范
 * @param task 任务对象
 */
function job(cmdName, task) {
    index_1.default.application.tasks[cmdName] = task;
}
exports.job = job;
function runner(job_list, ctx, verbose) {
    const jobs = job_list || process.env['JOBS'];
    var _tasks = [];
    if (jobs) {
        jobs.split(/\s*(?:,|$)\s*/).forEach(job => {
            if (index_1.default.application.tasks.hasOwnProperty(job)) {
                _tasks.push(index_1.default.application.tasks[job]);
            }
        });
    }
    var _options = {};
    if (verbose) {
        _options.renderer = 'verbose';
    }
    return new Promise((resolve, reject) => {
        new index_1.default.Tasks(_tasks, _options).run(ctx || {}).then(result => {
            resolve(result);
        }).catch(error => {
            /* istanbul ignore next */
            reject(error);
        });
    });
}
exports.runner = runner;
//# sourceMappingURL=task.js.map