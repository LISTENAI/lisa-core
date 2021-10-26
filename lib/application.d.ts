import { ListrTask, ListrBaseClassOptions } from 'listr2';
import * as minimist from 'minimist';
declare type ConfigFunc = (app: Application) => void;
export declare type TaskObject = ListrTask;
export declare type TaskOptions = ListrBaseClassOptions<any, any, "verbose">;
/**
 * pipeline定义
 */
export declare type Pipeline = {
    [key: string]: PipelineObject;
};
/**
 * pipelineObject定义
 */
export declare class PipelineObject {
    desc: string;
    tasks: Array<string>;
}
export declare class Application {
    tasks: {
        [key: string]: TaskObject;
    };
    /**
     * package.json 信息
     */
    packageJSON: any;
    /**
     * lpm registry url
     */
    private _lpmRegistryUrl?;
    set lpmRegistryUrl(url: string);
    get lpmRegistryUrl(): string;
    /**
     * registry url -- create by 2.0
     */
    private _registryUrl?;
    set registryUrl(url: string);
    get registryUrl(): string;
    /**
     * debug func -- create by 2.0
     */
    private _debug?;
    set debug(flag: string);
    get debug(): any;
    /**
     * lisa server api host
     */
    private _apiHost?;
    set apiHost(url: string);
    get apiHost(): string;
    /**
     * lisa server api prefix
     */
    private _apiPrefix?;
    set apiPrefix(url: string);
    get apiPrefix(): string;
    /**
     * lisa cache 缓存目录
     */
    private _cacheDir?;
    set cacheDir(url: string);
    get cacheDir(): string;
    /**
     * 项目主目录
     */
    root: string;
    /**
     * template 目录
     */
    template_path: string;
    /**
     * download 目录
     */
    download_path: string;
    /**
     * task 文件地址
     */
    task_path?: string;
    /**
     * 程序设置
     * @param callback
     */
    configuration(callback: ConfigFunc): void;
    /**
     * 创建项目时的参数
     */
    pipeline: Pipeline;
    /**
     * 自定义参数
     */
    private _context;
    get context(): any;
    /**
     * 添加指定包的自定义参数
     * @param packageName lisa lib包名
     * @param context 自定义参数
     */
    addContext(packageName: string, context: {
        [key: string]: any;
    }): void;
    /**
     * 添加全局的自定义参数
     * @param context 自定义参数
     */
    addGlobalContext(context: {
        [key: string]: any;
    }): void;
    /**
     * 获取包名下面的Context属性
     * @param packaegName 包名
     */
    getContextFromPackageName(packaegName: string): any;
    /**
     * 执行命令的参数
     */
    argv: string[] | minimist.ParsedArgs;
    /**
     * log 路径
     */
    private _logPath?;
    set logPath(url: string);
    get logPath(): string;
    /**
     * gitignore 设置git忽略的目录文件
     * @param path .gitignore 路径
     * @param args 要忽略的目录文件
     */
    gitignore(path: string, args: string[]): void;
    /**
     * log stdout 输出
     * @param stdout 输出内容
     */
    log(stdout: string): void;
    /**
     * log stderr 输出
     * @param stderr 输出内容
     */
    errorLog(stderr: string): void;
}
export {};
