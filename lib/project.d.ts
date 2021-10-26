import * as AdmZip from 'adm-zip';
export declare type LogFunction = (method: string, message: any) => void;
/**
 * 项目类，用于快捷创建项目结构
 */
export declare class Project {
    /**
     * 项目主目录
     */
    private _root?;
    set root(dir: string);
    get root(): string;
    /**
     * template 目录
     */
    private _template_path?;
    set template_path(dir: string);
    get template_path(): string;
    /**
     * template 目录
     */
    private _download_path?;
    set download_path(dir: string);
    get download_path(): string;
    /**
     * 日志方法
     */
    info: LogFunction;
    /**
     * 错误日志方法
     */
    error: LogFunction;
    constructor();
    /**
     * 获取项目的对应目录
     * @param paths 路径地址
     */
    join(...paths: string[]): string;
    /**
     * 获取模板路径
     * @param paths 路径地址
     */
    template_join(...paths: string[]): string;
    /**
     * 获取下载路径
     * @param paths 路径地址
     */
    download_join(...paths: string[]): string;
    /**
     * 创建目录
     * @param paths 目录路径，请注意，这是里相对路径
     */
    mkdir(...paths: string[]): Promise<void>;
    /**
     * 创建空白文件
     */
    touch(...paths: string[]): Promise<void>;
    /**
     * 文件复制 or 目录复制
     * @param source 模版地址，注意是在项目设置的模版目录中寻找
     * @param target 目标地址，注意是在项目中对应的地址
     */
    copy(source: string, target: string): Promise<void>;
    /**
     * 模版渲染器
     * @param source 模版地址，注意是在项目设置的模版目录中寻找
     * @param target 目标地址，注意是在项目中对应的地址
     * @param options 模版所需要的元数据
     */
    template(source: string, target: string, data: any): Promise<void>;
    /**
     * 下载文件
     * @param url 下载地址
     * @param fileName 目标文件名
     * @param targetDir 下载目标目录
     */
    downloadFile(opts: {
        url: string;
        fileName: string;
        targetDir?: string;
        progress?: (percentage: number, transferred: number, total: number) => void;
    }): Promise<{
        err: number;
        msg: string;
    }>;
    /**
     * 解压文件
     * @param source zip文件地址
     * @param target 解压目录
     */
    unzip(source: string, target?: string): Promise<void>;
    /**
     * 获取zip实例
     */
    zip(): AdmZip;
}
