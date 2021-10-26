"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flags = exports.argv = exports.minimist = void 0;
const _minimist = require("minimist");
const _1 = require(".");
exports.minimist = _minimist;
/**
 * 获取环境变量
 * @param opts 设置解析参数
 */
function argv(argv = _1.default.application.argv, opts) {
    if (argv.length > 0) {
        return exports.minimist(argv, opts);
    }
    else {
        return exports.minimist(process.argv.slice(2), opts);
    }
}
exports.argv = argv;
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
function flags(key) {
    return (target, propertyKey, descriptor) => {
        const method = descriptor.value;
        descriptor.value = async function () {
            let _argv;
            if (_1.default.application.argv.length > 0) {
                _argv = exports.minimist(_1.default.application.argv);
            }
            else {
                _argv = argv();
            }
            if (key in _argv) {
                const flag = _argv[key];
                return flag;
            }
            else {
                const result = await method.apply(this);
                return result;
            }
        };
    };
}
exports.flags = flags;
//# sourceMappingURL=argv.js.map