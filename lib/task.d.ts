import { TaskObject } from '.';
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
export declare function job(cmdName: string, task: TaskObject): void;
export declare function runner(job_list?: string, ctx?: {
    [key: string]: any;
}, verbose?: boolean): Promise<unknown>;
