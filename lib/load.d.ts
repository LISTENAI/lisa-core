/**
 *
 * @param file 加载路径
 */
export declare function loadFile(file: string): void;
/**
 *
 * @param file 同步加载路径
 */
export declare function loadFileSync(file: string): void;
/**
 * 加载 config.[js|ts]
 * @param configPath config地址，默认为packge.json中配置的地址，如果没有配置，读取项目中config.js
 */
export declare function loadPwdConfig(configPath?: string): void;
/**
 * 加载 task.[js|ts]
 * @param taskPath task地址，默认为packge.json中配置的地址，如果没有配置，读取项目中 task.js
 */
export declare function loadPwdTask(taskPath?: string): void;
export declare function parsePackageJSON(packagePath?: string): any;
export declare function loadPackageJSON(packagePath?: string): void;
export declare function loadTypescript(): void;
export declare function loadDependencies(justConfig?: boolean): void;
export declare function loadDevDependencies(): void;
/**
 * 加载 任务字典
 */
export declare function loadTaskDict(): void;
/**
 * 获取 任务字典
 */
export declare function getTaskDict(): {
    [key: string]: any;
};
export declare function load(): void;
export declare function loadPreRunTask(): void;
