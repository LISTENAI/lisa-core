/**
 * Lisa Core 是 Lisa Framework 的核心框架，用于项目创建，Task 支持等能力
 */

import * as execa from 'execa'
import * as fs from 'fs'
import * as Listr from "listr"
import _got  from 'got'
import { Application } from './application'
import config from './cfgstore'

/**
  引用Listr来执行task指令
*/
export const Tasks = Listr

/**
 * 使用 Got 来处理 HTTP 请求，具体请查看 [GOT](https://www.npmjs.com/package/got)
 */
export const got = _got
export const store = config

export * from './task'
export * from './application'
export * as fs from './fs'
export var application = new Application()
export * from './load'

export * from './argv'
export * from 'cli-ux'

/**
 * 引用execa来执行shell命令，解决windows一些兼容性问题，具体请查看 [execa](https://www.npmjs.com/package/execa)
 * @example
 * ```typescript
 * const res = await cmd('lisa', ['install'], {
 *     cwd: fs.project.root
 * }
 * or
 * const res = cmd('lisa', ['install'], {
 *     cwd: fs.project.root
 * }
 * res.stdout.on('data', (data) => {})
 * ```
*/

export const cmd = execa

/**
 * 危险：仅供测试使用
 */
export function reloadApplication() {
  application = new Application()
}