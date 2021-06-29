/**
 * @module fs
 * 文件操作模块，用于项目中文件快速操作
 * @module
 */

import { Project } from './project'

/**
 * @packageDocumentation
 */
export { Project } from './project'

/**
 * @packageDocumentation
 */
export * from 'fs-extra'

/**
 * 项目主路径，默认为命令行运行的当前的目录
 */
export var project: Project = new Project();

/**
 * 危险，本方法仅允许测试代码中使用
 */
export function reloadProject() {
  project = new Project()
}