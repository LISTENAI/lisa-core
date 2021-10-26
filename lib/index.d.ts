/**
 * Lisa Core 是 Lisa Framework 的核心框架，用于项目创建，Task 支持等能力
 */
/**
  引用Listr来执行task指令
*/
import { Listr } from 'listr2';
import * as Execa from 'execa';
import _got from 'got';
import cli from 'cli-ux';
import { Application } from './application';
import * as fs from './fs';
import * as task from './task';
import Exec from './exec';
declare const _default: {
    Tasks: typeof Listr;
    cmd: typeof Execa;
    got: typeof _got;
    application: Application;
    fs: typeof fs;
    job: typeof task.job;
    runner: typeof task.runner;
    cli: typeof cli;
    exec: typeof Exec;
};
export default _default;
export * from './application';
export * from './argv';
export * from './load';
