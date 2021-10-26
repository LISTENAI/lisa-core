import * as _minimist from 'minimist';
export declare const minimist: typeof _minimist;
/**
 * 获取环境变量
 * @param opts 设置解析参数
 */
export declare function argv(argv?: string[], opts?: _minimist.Opts): _minimist.ParsedArgs;
/**
 * 仅供typescript代码使用
 * @example
 * ```typescript
 * export class CliUx {
    @flags("project_path")
    async getProjectPath() {
      const projectPath = await cli.prompt("请输入项目路径", {default: '.'})
      return path.resolve(projectPath)
    }

    @flags('author')
    async getAuthor() {
      const author = await cli.prompt('请输入作者名称', {default: ''}) as string
      return author
    }

    getProjectName(projectPath: string) {
      return path.basename(projectPath)
    }
  }
 * ```
 * @param key 方法字段
 */
export declare function flags(key: string): (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<() => Promise<any>>) => void;
