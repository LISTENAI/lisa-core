import * as _minimist from 'minimist'
import lisa from '.'

export const minimist = _minimist

/**
 * 获取环境变量
 * @param opts 设置解析参数
 */
export function argv(argv: string[] = (lisa.application.argv as string[]), opts?: _minimist.Opts) {
  if (argv.length > 0) {
    return minimist(argv, opts)
  } else {
    return minimist(process.argv.slice(2), opts)
  }
}

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
export function flags(key: string) {
  return (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<()=> Promise<any>>) => {
    const method = descriptor.value as ()=> Promise<any>
    descriptor.value = async function() {
      let _argv: any

      if (lisa.application.argv.length > 0) {
        _argv = minimist((lisa.application.argv as string[]))
      } else {
        _argv = argv()
      }

      if (key in _argv) {
        const flag = _argv[key]
        return flag
      } else {
        const result = await method.apply(this)
        return result
      }
    }
  }
}